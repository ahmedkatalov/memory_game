import React from "react";
import { useState } from "react";
import GameSpace from "./GameSpace";

export default function Main() {
  const [card] = useState([
    {
      id: 1,
      number: 1,
      isFinished: false,
      img: "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
    },
    {
      id: 2,
      number: 1,
      isFinished: false,
      img: "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
    },
    {
      id: 3,
      number: 2,
      isFinished: false,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png",
    },
    {
      id: 4,
      number: 2,
      isFinished: false,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png",
    },
    {
      id: 5,
      number: 3,
      isFinished: false,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
    },
    {
      id: 6,
      number: 3,
      isFinished: false,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
    },
    {
      id: 7,
      number: 4,
      isFinished: false,
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
    },
    {
      id: 8,
      number: 4,
      isFinished: false,
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
    },
  ]);

  let cards = card.sort(() => Math.random() - 0.5);

  return (
    <main>
      <div className="game">
        <GameSpace cards={cards} />
      </div>
    </main>
  );
}
