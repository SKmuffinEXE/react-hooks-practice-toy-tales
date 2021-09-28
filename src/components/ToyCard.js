import React, {useEffect} from "react";

function ToyCard({id, name, img, likes, onLike, donate}) {

  // console.log(toy)

  

  function likeToy(){
    const updateToy = {
      likes: likes + 1
    }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((r) => r.json())
      .then(onLike)
  }

  function handleDonate(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(donate);
  }
  
  return (

    
    <div className="card">
      <h2>{name}</h2>
      <img
        src={img}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick = {likeToy}>Like {"<3"}</button>
      <button className="del-btn" onClick = {handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
