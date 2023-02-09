import React, { useEffect, useState } from "react";
import GridOfCards from "./GridOfCards";
import Listing from "./Listing.js";


const url = "http://localhost:5000";

function DogBreedsPage() {
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
    <>
      {/* <GridOfCards />*/}
      <GridOfCards dog_breeds={dog_breeds}    ></GridOfCards>
      
      
     
     
      </>
    
  ); 
}

export default DogBreedsPage;






  
