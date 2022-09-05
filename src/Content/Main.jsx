import React from "react";
import { useState } from "react";
import GameSpace from "./GameSpace";
import data from "./data.json";

export default function Main() {
  const [card] = useState(data);

  let cards = card.sort(() => Math.random() - 0.5);

  return (
    <main>
      <div className="game">
        <GameSpace cards={cards} />
      </div>
    </main>
  );
}
