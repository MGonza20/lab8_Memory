import React, { useState, useEffect } from "react";
import Board from "./Board";
import "./app.css";

export default function App() {
  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);
  const [movements, setMovements] = useState(0);
  const [matches, setMatches] = useState(0);
  const [block, setBlock] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [cardContent, setCardContent] = useState([
    {
      src: "https://i.ibb.co/NLQwhdP/elm.png",
      paired: false,
    },
    {
      src: "https://i.ibb.co/rytWr2v/ceylon.png",
      paired: false,
    },
    {
      src: "https://i.ibb.co/VQzTnWC/sequelize.png",
      paired: false,
    },
    {
      src: "https://i.ibb.co/TKkhYP3/atom.png",
      paired: false,
    },
    {
      src: "https://i.ibb.co/N3f2S4W/apache.png",
      paired: false,
    },
    {
      src: "https://i.ibb.co/KzPNfHv/visualstudio.png",
      paired: false,
    },
    {
      src: "https://i.ibb.co/tzN9qGw/webpack.png",
      paired: false,
    },
    {
      src: "https://i.ibb.co/dP2YN3S/yarn.png",
      paired: false,
    },
    {
      src: "https://i.ibb.co/MSR12z7/sketch.png",
      paired: false,
    },
  ]);

  const setup = () => {
    const setup = cardContent
      .concat(cardContent)
      .sort(() => Math.random() - 0.5)
      .map((element) => ({
        ...element,
        id: Math.floor(Math.random() * 10000) + 1,
      }));
    setCardContent(setup);
  };

  useEffect(() => {
    setup();
    setMovements(0);
  }, []);

  useEffect(() => {
    if (cardContent.length === matches * 2) {
      setGameComplete(true);
    }
  }, [matches]);

  const again = () => {
    setBlock(false);
    setCard1(null);
    setCard2(null);
  };

  const countMatch = () => {
    setMatches(matches + 1);
  };

  const countMovements = () => {
    setMovements(movements + 1);
  };

  const flip = (id, card) => {
    if (card1) {
      setCard2(card);
    } else {
      setCard1(card);
    }
    countMovements();
  };

  useEffect(() => {
    if (card1 && card2) {
      setBlock(true);
      card1.src === card2.src
        ? (setCardContent(
            cardContent.map((element) =>
              element.src === card1.src ? { ...element, paired: true } : element
            )
          ),
          again(),
          countMatch())
        : setTimeout(() => again(), 1200);
    }
  }, [card1, card2]);

  return (
    <div>
      <h4 className="movementsLabel">Movimientos: {movements}</h4>

      <div className="infoContainer">
        <p className="completedLabel">
          {" "}
          {gameComplete ? "¡Has completado el juego!" : ""}{" "}
        </p>
      </div>

      <Board
        cardsProp={cardContent}
        onFlip={flip}
        card1={card1}
        card2={card2}
        block={block}
      />
    </div>
  );
}
