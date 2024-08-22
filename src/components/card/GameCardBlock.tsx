import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CardType,
  Difficulty,
  GameCard,
  GameConfiguration,
  GameMode,
  Player,
} from "../../type";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import PlayerSelector from "../player/PlayerSelector";
import Data from "../../assets/Data";

type GameCardBlockProps = {
  gameConfig: GameConfiguration;
  players: Player[];
  setPlayerScore: (value: number, player: Player) => void;
};

const MAX_DEFAULT_DEGREE = 12;
const MIN_DEFAULT_DEGREE = -12;

const GameCardBlock = ({
  gameConfig,
  players,
  setPlayerScore,
}: GameCardBlockProps) => {

  const randomDegree = (): number => {
    return (
      Math.floor(
        Math.random() * (MAX_DEFAULT_DEGREE - MIN_DEFAULT_DEGREE + 1)
      ) + MIN_DEFAULT_DEGREE
    );
  };

  const availableGameCards = (): GameCard[] => {
    return gameConfig.availableDifficulty
      .map((difficulty) => {
        return Data.gameCardsData[difficulty];
      })
      .flat();
  };

  const numberRange = ({
    min,
    max,
  }: {
    max: number;
    min: number;
  }): number[] => {
    const numbers: number[] = [];
    for (let i = min; i <= max; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  const availableNumberCards = (): number[] => {
    return gameConfig.availableDifficulty
      .map((difficulty) => {
        return Data.numberLevels[difficulty]
          .map((bearing) => {
            return numberRange(bearing);
          })
          .flat();
      })
      .flat();
  };

  const nextCardType = (): CardType => {
    const rate = gameConfig.specialRate;
    const random = Math.random() * 5;
    if (random < rate) {
      return CardType.special;
    } else {
      return CardType.number;
    }
  };

  const randomCard = (): GameCard => {
    const nextType: CardType = nextCardType();

    if (nextType === CardType.special) {
      const gameCards = availableGameCards();
      const index = Math.floor(Math.random() * gameCards.length);
      return gameCards[index];
    } else {
      const numberCards = availableNumberCards();
      const index = Math.floor(Math.random() * numberCards.length);
      return {
        text: numberCards[index].toString(),
        difficulty: Difficulty.Easy,
        image: "",
      };
    }
  };

  const [gameCard, setGameCard] = useState<GameCard>(randomCard());
  const [isFlipped, setIsFlipped] = useState(false);
  const [degree, setDegree] = useState<number>(randomDegree());

  const handleCardClick = () => {
    if (isFlipped) return;

    setDegree(randomDegree());
    setIsFlipped(!isFlipped);
  };

  const handlePlayerSelect = (player: Player) => {
    if (!isFlipped) return;

    setPlayerScore(cardValue(), player);
    setGameCard(randomCard());
    setDegree(randomDegree());
    setTimeout(() => {
      setIsFlipped(false);
    }, 100);
  };

  const cardValue = (): number => {
    switch (gameCard.difficulty) {
      case Difficulty.Medium:
        return 2;
      case Difficulty.Hard:
        return 3;
      case Difficulty.VeryHard:
        return 5;
      default:
        return 1;
    }
  };

  const cornerIcon = (): IconName => {
    switch (gameConfig.gameMode) {
      case GameMode.Soft:
        switch (gameCard.difficulty) {
          case Difficulty.Medium:
            return "2";
          case Difficulty.Hard:
            return "3";
          default:
            return "1";
        }
      default:
        switch (gameCard.difficulty) {
          case Difficulty.Easy:
            return "wine-bottle";
          case Difficulty.Medium:
            return "whiskey-glass";
          default:
            return "glass-water";
        }
    }
  };

  return (
    <div
      key={gameCard.text}
      className={`game-card-block ${isFlipped ? "flipped" : ""}`}
      style={{ transform: `rotateZ(${degree}deg)` }} 
      onClick={handleCardClick}
    >
      <div className={`game-card-front ${gameCard.difficulty}`}>
        <div className="game-card-inter">
          <div className={`game-card-corner top left ${gameCard.difficulty}`}>
            <FontAwesomeIcon icon={cornerIcon()} />
          </div>
          <div
            className={`game-card-corner bottom right  ${gameCard.difficulty}`}
          >
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
            <PlayerSelector
              player={player}
              selectPlayer={handlePlayerSelect}
            ></PlayerSelector>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCardBlock;
