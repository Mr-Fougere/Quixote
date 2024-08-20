import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Difficulty, GameCard, GameMode, Player } from "../../type";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import gameCardsData from "../../assets/GameCardsData";
import PlayerSelector from "../player/PlayerSelector";

type GameCardBlockProps = {
  mode: GameMode;
  players: Player[];
  setPlayerScore: (value: number, player: Player) => void
};

const GameCardBlock = ({ mode, players, setPlayerScore  }: GameCardBlockProps) => {

  const randomCard = (): GameCard => {
    const index = Math.floor(Math.random() * gameCardsData.length);
     return gameCardsData[index];
  };

  const [gameCard, setGameCard] = useState<GameCard>(randomCard());
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    if(isFlipped) return;
    setIsFlipped(!isFlipped);
  };

  const handlePlayerSelect = (player: Player) => {
    if(!isFlipped) return;

    setPlayerScore(gameCard.value, player);
    setGameCard(randomCard());
    setTimeout(() => {
      setIsFlipped(false);
    }, 1000);
  }

  const cornerIcon = ():IconName => {
    switch (mode) {
      case GameMode.Soft:
        switch (gameCard.difficulty) {
          case Difficulty.Easy:
            return "1"
          case Difficulty.Medium:
            return "2"
          case Difficulty.Hard:
            return "3"
        }
      default:
        switch (gameCard.difficulty) {
          case Difficulty.Easy:
            return "glass-water"
          case Difficulty.Medium:
            return "whiskey-glass"
          case Difficulty.Hard:
            return "wine-bottle"
        }
    }
  }

  return (
    <div className={`game-card-block ${isFlipped ? "flipped" : ""}`}  onClick={handleCardClick}>
      <div className={`game-card-front ${gameCard.difficulty}`}>
        <div className="game-card-inter">
          <div className={`game-card-corner top left ${gameCard.difficulty}`}>
            <FontAwesomeIcon icon={cornerIcon()} />
          </div>
          <div className={`game-card-corner bottom right  ${gameCard.difficulty}`}>
            <FontAwesomeIcon icon={cornerIcon()} />
          </div>
          <div className="game-card-text revert"> {gameCard.text}</div>
          <div className="separator"></div>
          <div className="game-card-text"> {gameCard.text}</div>
        </div>
      </div>
      <div className={`game-card-back ${gameCard.difficulty}`}>
        <div className="player-selector">
          {players.map((player) => (
            <PlayerSelector player={player} selectPlayer={handlePlayerSelect}  ></PlayerSelector>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCardBlock;
