import React, { useEffect, useState } from "react";
import Header from "./components/Header";
//import GridOfCards from "./components/GridOfCards";
import "./index.css";
import "./App.css";

const url = "http://localhost:5000";

function App() {
  const [dog_breeds, setDogBreeds] = useState([]);

  const [error, setError] = useState("");

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
          <article className="card" key={dog_breed.id}>
            <img
              className="card_image"
              alt={`Image of ${dog_breed.name}`}
              src={dog_breed.image}
            />
            <div className="card_footer">
            <h2 className="card_title">{dog_breed.name}</h2>
          </div>
          </article>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
