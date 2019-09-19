import React from 'react';

function Food({name, picture}){
  return <div>
    <h1>I love {name}</h1>
    <img src= {picture}/>
    </div>;
}

const foodILike = [
  {
    name: "Kimchi",
    image: 
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
  },
  {
    name: "Samgyeopsal",
    image:
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
  },
  {
    name: "Bibimbap",
    image:
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
  },
  {
    name: "Ramen",
    image:
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
      },
  {
    name: "Hamberger",
    image:
    "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
        ))}
    </div>
    );
  }

export default App;
