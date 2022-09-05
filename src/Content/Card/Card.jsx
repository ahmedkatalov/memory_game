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
      }, 1600);
    }
  };

  return (
    <div
      onClick={() => rotateCard(card)}
      className={rotate ? "card rotated" : final ? "card rotated" : "card"}
    >
      <img
        className="cardNumber"
        src={card.img}
        alt=""
        width="100"
        height="100"
      />
    </div>
  );
}
