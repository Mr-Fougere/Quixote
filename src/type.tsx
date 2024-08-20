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
  value: number;
  image: string;
};

enum GameMode {
  Soft = "soft",
  Hard = "hard",
}

enum Difficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}

export type { Player, GameCard };
export { GameMode, Difficulty };
