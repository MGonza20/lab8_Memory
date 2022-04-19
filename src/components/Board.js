/* eslint-disable react/prop-types */
import React from "react";
import Card from "./Card";
import "./board.css";

export default function Board({cardsProp, onFlip, card1, card2, block}) { 
  
    return (
        <div className="board">
            {cardsProp.map((element, index) => (
                <Card 
                    key={index}
                    cardElement={element} 
                    onFlip={onFlip} 
                    block={block}
                    flipIt={element.paired || element === card1 || element === card2 }/>
            ))}
        </div>
    );
}