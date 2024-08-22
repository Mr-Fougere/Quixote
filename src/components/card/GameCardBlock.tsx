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
  position: number;
  setPlayerScore: (value: number, player: Player) => void;
};

const MAX_DEGREE = 7;
const MAX_Y = 7;
const MAX_X = 2;

const GameCardBlock = ({
  gameConfig,
  players,
  setPlayerScore,
  position,
}: GameCardBlockProps) => {
  const randomOffsetPosition = (): { x: number; y: number; degree: number } => {
    return {
      x: Math.floor(Math.random() * (MAX_X + 1)) - MAX_X,
      y: Math.floor(Math.random() * (MAX_Y + 1)) - MAX_Y,
      degree: Math.floor(Math.random() * (MAX_DEGREE + 1)) - MAX_DEGREE,
    };
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

  const availableNumberCards = (): GameCard[] => {
    return gameConfig.availableDifficulty
      .map((difficulty) => {
        return Data.numberLevels[difficulty]
          .map((bearing) => {
            return numberRange(bearing).map((value) => {
              return {
                text: value.toString(),
                difficulty: difficulty,
                image: "",
              };
            });
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
    const gameCards =
      nextType === CardType.special
        ? availableGameCards()
        : availableNumberCards();
    const index = Math.floor(Math.random() * gameCards.length);
    return gameCards[index];
  };

  const [gameCard, setGameCard] = useState<GameCard>(randomCard());
  const [isFlipped, setIsFlipped] = useState(false);
  const [offsetPosition, setOffsetPosition] = useState<{
    x: number;
    y: number;
    degree: number;
  }>(randomOffsetPosition());

  const handleCardClick = () => {
    if (isFlipped) return;

    setOffsetPosition(randomOffsetPosition());
    setIsFlipped(!isFlipped);
  };

  const handlePlayerSelect = (player: Player) => {
    if (!isFlipped) return;

    setPlayerScore(cardValue(), player);
    setGameCard(randomCard());
    setTimeout(() => {
      setOffsetPosition(randomOffsetPosition());
    }, 50);
    setTimeout(() => {
      setIsFlipped(false);
    }, 50);
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
          case Difficulty.VeryHard:
            return "5";
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
      className={`game-card-block ${
        isFlipped ? "flipped" : ""
      } position-${position}`}
      style={{
        transform: `rotateZ(${offsetPosition.degree}deg) translate(${offsetPosition.x}%, ${offsetPosition.y}%)`,
      }}
      onClick={handleCardClick}
    >
      <div
        className={`game-card-front ${gameCard.difficulty} ${
          gameCard.text.length < 3 ? "number" : "special"
        }`}
      >
        <div className="game-card-inter">
          <div className={`game-card-corner top left ${gameCard.difficulty}`}>
            <FontAwesomeIcon icon={cornerIcon()} />
          </div>
          <div
            className={`game-card-corner bottom right  ${gameCard.difficulty}`}
          >
            <FontAwesomeIcon icon={cornerIcon()} />
          </div>
          <div className="game-card-text"> {gameCard.text}</div>
          <div className="separator"></div>
          <div className="game-card-text revert"> {gameCard.text}</div>
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
