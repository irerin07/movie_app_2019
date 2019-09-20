import React from 'react';

function Food({name, picture}){
  return (
  <div>
    <h1>I love {name}</h1>
    <img src= {picture} alt={name}/>
    </div>
  )
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: 
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
  },
  {
    id: 4,
    name: "Ramen",
    image:
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
      },
  {
    id: 5,
    name: "Hamberger",
    image:
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
        ))}
    </div>
    );
  }

export default App;
