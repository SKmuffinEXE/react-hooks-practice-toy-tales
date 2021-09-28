import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const[toyList, setToyList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then(setToyList);
  }, [toyList]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy,){
    setToyList(prev => [...prev, newToy])
  }
  
  function updateLikes(){
    const updateToyList = toyList
    setToyList(updateToyList)
  }

  function donateToy() {
    // const updatedToyList = toyList.filter((toy) => toy.id !== toyToDelete.id);
    const updated = toyList
    setToyList(updated);
  }

  // console.log(toyList)

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy = {addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>{showForm ? "Hide" : "Add a toy"}</button>
      </div>
      <ToyContainer toys = {toyList} 
      onLike = {updateLikes}
      donate = {donateToy}/>
    </>
  );
}

export default App;
