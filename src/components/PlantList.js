import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  
  const plantComponents = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant}></PlantCard>
})

  return (
    <ul className="cards">{plantComponents}</ul>
  );
}

export default PlantList;
