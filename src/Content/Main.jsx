import React from "react";
import { useState } from "react";
import GameSpace from "./GameSpace";

export default function Main() {
  const [card] = useState([
    { id: 1, number: 1, isFinished: false },
    { id: 2, number: 1, isFinished: false },
    { id: 3, number: 2, isFinished: false },
    { id: 4, number: 2, isFinished: false },
    { id: 5, number: 3, isFinished: false },
    { id: 6, number: 3, isFinished: false },
    { id: 7, number: 4, isFinished: false },
    { id: 8, number: 4, isFinished: false },
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
