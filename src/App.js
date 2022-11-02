import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const menu = {
    Indian: [
      { name: "Shahi Paneer", price: 200, rating: "🌟🌟🌟🌟" },
      { name: "Masala Dosa", price: 80, rating: "🌟🌟🌟🌟🌟" },
      { name: "Chhole Kulche", price: 100, rating: "🌟🌟🌟" }
    ],
    Chinese: [
      { name: "Hakka Noodles", price: 150, rating: "🌟🌟🌟" },
      { name: "Manchurian", price: 250, rating: "🌟🌟" },
      { name: "Fried Rice", price: 200, rating: "🌟🌟🌟🌟" }
    ],
    Italian: [
      { name: "Pizza", price: 400, rating: "🌟🌟🌟🌟" },
      { name: "Pasta", price: 300, rating: "🌟🌟" },
      { name: "Croissant", price: 50, rating: "🌟🌟🌟" }
    ]
  };

  const cuisinesOnly = Object.keys(menu); //cuisine array
  console.log(cuisinesOnly);

  let [cuisine, setCuisine] = useState("Indian");
  function dishHandler(e) {
    console.log(e);
    setCuisine(e);
  }

  return (
    <div className="App">
      <h1>🥘goodEats</h1>
      <h4>Check out the healthiest cuisines out there.</h4>
      <h3>{cuisine}</h3>

      {cuisinesOnly.map((btn) => {
        return (
          <button onClick={() => dishHandler(btn)} key={btn}>
            {btn}
          </button>
        );
      })}
      {menu[cuisine].map((dish) => {
        return (
          <ul style={{ listStyleType: "none" }}>
            <li>
              <div className="listItem">
                <h2>{dish.name}</h2>
                <h3>
                  <span role="img" aria-label={dish.name}>
                    {dish.rating}
                  </span>
                </h3>
                <h4>{dish.price}</h4>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
