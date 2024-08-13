import React, {useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const API_URL = "http://localhost:6001/plants"

const [plants, setPlants] = useState([])
const [searchText, setSearchText] = useState("")

useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(plantData => setPlants(plantData))
  }, [])

const filteredPlants = plants.filter(plants => {

    if(plants.name !== undefined){
      return plants.name.toUpperCase().includes(searchText.toUpperCase())  
    }
    else{
      return false
    }
    
})

function addPlant(newPlant){
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body:JSON.stringify(newPlant)
  })
  .then(response => response.json())
  .then(newPlantData => setPlants([...plants,newPlantData]))
}

  return (
    <main>
      <NewPlantForm addPlant = {addPlant}/>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
