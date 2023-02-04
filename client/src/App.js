import React, { useEffect, useState } from "react";
import Header from "./components/Header";
//import GridOfCards from "./components/GridOfCards";
import { motion } from "framer-motion";
import "./index.css";
import "./App.css";
import Listing from "./components/Listing.js";
import Overlay from "./components/Overlay.js";


const url = "http://localhost:5000";

function App() {
  const [dog_breeds, setDogBreeds] = useState([]);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getDogBreeds = async () => {
      const response = await fetch(`${url}/`);
      const data = await response.json();
      const dog_breeds = data.dog_breeds;

      setDogBreeds(dog_breeds);
    };
    getDogBreeds();
  }, []);

  return (
    <div className="App">
      <>
        <Header />
      </>
      <>{/* <GridOfCards />*/} ,</>
      <div className="container">
        <div className="grid">
          {dog_breeds.map((dog_breed) => (
            <motion.article
              className="card"
              key={dog_breed.id}
              whileHover={{ opacity: 1 }}
            >
              <img
                className="card_image"
                alt={`Image of ${dog_breed.name}`}
                src={dog_breed.image}
              />
              <div className="card_footer">
                <h2 className="card_title">{dog_breed.name}</h2>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <Listing open={openModal} dog_breeds={dog_breeds}/>
      {open && <Overlay close={closeModal}></Overlay>}
    </div>
  );
}
export default App;
