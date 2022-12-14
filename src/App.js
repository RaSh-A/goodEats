import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const menu = {
    Indian: [
      { name: "Shahi Paneer", price: 200, rating: "ππππ" },
      { name: "Masala Dosa", price: 80, rating: "πππππ" },
      { name: "Chhole Kulche", price: 100, rating: "πππ" }
    ],
    Chinese: [
      { name: "Hakka Noodles", price: 150, rating: "πππ" },
      { name: "Manchurian", price: 250, rating: "ππ" },
      { name: "Fried Rice", price: 200, rating: "ππππ" }
    ],
    Italian: [
      { name: "Pizza", price: 400, rating: "ππππ" },
      { name: "Pasta", price: 300, rating: "ππ" },
      { name: "Croissant", price: 50, rating: "πππ" }
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
      <h1>π₯goodEats</h1>
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
