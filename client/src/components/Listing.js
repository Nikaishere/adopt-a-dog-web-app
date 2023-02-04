import React from "react";

const Listing = (dog_breeds, open) => {
  return (
    <div className="featured-section" onClick={open}>
      <div className="featured-card"></div>

      <div className="featured-details-card">
        {dog_breeds.map((dog_breed) => (
          <section className="featured-details-card" key={dog_breed.id}>
            <div className="size">{dog_breed.size}</div>
            <div>{dog_breed.energy}</div>
            <div>{dog_breed.protectivness}</div>
            <div>{dog_breed.trainability}</div>
            <div>{dog_breed.shedding}</div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Listing;
