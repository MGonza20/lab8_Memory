/* eslint-disable react/prop-types */
import React from "react";
import "./card.css";

export default function Card({ cardElement, onFlip, flipIt, block }) {
  return (
    <div
      className={`card ${flipIt ? "see" : ""}`}
      onClick={() => (!block ? onFlip(cardElement.id, cardElement) : "")}
    >
      <div className="icon">
        {" "}
        <img src={cardElement.src}></img>{" "}
      </div>
    </div>
  );
}
