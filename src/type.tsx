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
  availableDifficulty: Difficulty[];
  specialRate: number;
  started: boolean;
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
  VeryHard = "very_hard",
}

export type { Player, GameCard, GameConfiguration };
export { GameMode, Difficulty, CardType };
