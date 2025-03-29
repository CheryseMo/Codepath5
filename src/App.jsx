import React, { useState, useEffect } from "react";
import axios from "axios";
import DogCard from "./components/DogCard";
import BanList from "./components/BanList";
import History from "./components/History";

const App = () => {
  const [dog, setDog] = useState(null);
  const [banList, setBanList] = useState({ breeds: [], colors: [] });
  const [history, setHistory] = useState([]);

  const fetchDog = async () => {
    try {
      let validDog = false;
      let newDog = null;

      while (!validDog) {
        const res = await axios.get("https://dog.ceo/api/breeds/image/random");
        const imageUrl = res.data.message;
        const breed = imageUrl.split("/")[4]; // Extract breed from URL
        const color = getRandomColor(); // Simulated color data

        if (!banList.breeds.includes(breed) && !banList.colors.includes(color)) {
          newDog = { imageUrl, breed, color };
          validDog = true;
        }
      }

      setDog(newDog);
      setHistory((prev) => [newDog, ...prev]); // Add to history
    } catch (error) {
      console.error("Error fetching dog:", error);
    }
  };

  const toggleBan = (type, value) => {
    setBanList((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

  const getRandomColor = () => {
    const colors = ["Black", "Brown", "White", "Golden", "Spotted"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div>
      <h1>Discover a Random Dog</h1>
      <DogCard dog={dog} toggleBan={toggleBan} />
      <button onClick={fetchDog}>Discover New Dog</button>
      <BanList banList={banList} toggleBan={toggleBan} />
      <History history={history} />
    </div>
  );
};

export default App;
