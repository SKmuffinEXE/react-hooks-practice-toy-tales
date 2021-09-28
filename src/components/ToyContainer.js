import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys,onLike, donate}) {
  
  let toyBox = toys.map(toy => {
    // {console.log(toy.name)}
return <ToyCard 
id = {toy.id} 
name = {toy.name} 
img = {toy.image} 
likes = {toy.likes} 
key = {toy.name}
onLike = {onLike}
donate = {donate}/>

  })


  // console.log(toys[0])
  return (
    <div id="toy-collection">{toyBox}</div>
  );
}

export default ToyContainer;
