import { IconName } from "@fortawesome/fontawesome-svg-core";

type Player = {
  name: string;
  score: number;
  avatar: IconName;
  uuid: string;
};

type GameCard = {
  text: string;
  difficulty: Difficulty;
  image: string;
};

type GameConfiguration = {
  gameMode: GameMode;
  availableDifficulty: Array<Difficulty>;
  specialRate: number;
}

enum CardType {
  number = "number",
  special = "special",
}

enum GameMode {
  Soft = "soft",
  Hard = "hard",
}

enum Difficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
  VeryHard = "veryHard",
}

export type { Player, GameCard, GameConfiguration };
export { GameMode, Difficulty, CardType };
