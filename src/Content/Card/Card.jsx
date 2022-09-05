import React from "react";
import "./Card.css";
import { useState } from "react";

export default function Card({ card, check, filter, isMatched, final }) {
  const [rotate, setRotate] = useState(false);

  const rotateCard = (card) => {
    if (filter.length < 2) {
      check(card);
      setRotate(!rotate);
    }
    if (!isMatched) {
      setTimeout(() => {
        setRotate(false);
      }, 1000);
    }
  };

  return (
    <div
      onClick={() => rotateCard(card)}
      className={rotate ? "card rotated" : final ? "card rotated" : "card"}
    >
      <h2 className="cardNumber">{card.number}</h2>
    </div>
  );
}
