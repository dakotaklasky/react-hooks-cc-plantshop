import React,{useState} from "react";

function NewPlantForm({addPlant}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange(event){
    setFormData({...formData,[event.target.name]:event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()

    const newPlant = {
      ...formData
    }

    console.log(newPlant)
    addPlant(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" value={formData.name}/>
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" value={formData.image} />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price"  value={formData.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
