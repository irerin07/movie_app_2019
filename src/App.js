import React from 'react';
import Proptypes from "prop-types"

function Food({name, picture, rating}){
  return (
  <div>
    <h1>I love {name}</h1>
    <h3>{rating}/5</h3>
    <img src= {picture} alt={name}/>
    </div>
  )
}

Food.propTypes = {
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: 
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png",
    rating: 3
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png",
    rating: 4
  },
  {
    id: 4,
    name: "Ramen",
    image:
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png",
    rating: 2
      },
  {
    id: 5,
    name: "Hamberger",
    image:
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png",
    rating: 1
  }
]


function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        ))}
    </div>
    );
  }

export default App;
