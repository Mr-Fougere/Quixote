import { Difficulty, GameCard } from "../type";

const easyGameCards:GameCard[] = [
  {
    difficulty: Difficulty.Easy,
    text: "ANY PAIR",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Easy,
    text: "NEGATIVE CARD SUM",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Easy,
    text: "POSITIVE CARD SUM",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Easy,
    text: "EVEN CARD SUM",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Easy,
    text: "ODD CARD SUM",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Easy,
    text: "THREE SAME SIGN",
    image: "https://via.placeholder.com/150",
  },
];

const mediumGameCards:GameCard[] = [
  {
    difficulty: Difficulty.Medium,
    text: "THREE SUIT CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Medium,
    text: "THREE SPADE CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Medium,
    text: "THREE SAME FIGURE CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Medium,
    text: "THREE FIGURE CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Medium,
    text: "THREE DIAMOND CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Medium,
    text: "THREE HEART CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Medium,
    text: "THREE CLOVER CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Medium,
    text: "ANY TWO PAIR",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Medium,
    text: "EACH SIGN CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Medium,
    text: "FOUR SAME SIGN",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "ANY TRIPLET",
    image: "https://via.placeholder.com/150",
  },
];

const hardGameCards:GameCard[] = [
  
  {
    difficulty: Difficulty.Hard,
    text: "FOUR SUIT CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "FOUR FIGURE CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "ONLY FIGURE CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "EACH FIGURE CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "ONLY RED CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "ONLY BLACK CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "ANY COLOR",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "FOUR SAME FIGURE CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "SAME COLOR SUIT",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "ANY SQUARE",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "ONE TRIPLET ONE DOUBLE",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "FULL SUIT",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "FOUR SPADE CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "FOUR DIAMOND CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "FOUR HEART CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.Hard,
    text: "FOUR CLOVER CARDS",
    image: "https://via.placeholder.com/150",
  },
];

const veryHardGameCards:GameCard[] = [
  {
    difficulty: Difficulty.VeryHard,
    text: "13579",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.VeryHard,
    text: "2468J",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.VeryHard,
    text: "ONLY EVEN NUMBER CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.VeryHard,
    text: "ONLY ODD NUMBER CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.VeryHard,
    text: "ONLY SPADE CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.VeryHard,
    text: "ONLY DIAMOND CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.VeryHard,
    text: "ONLY HEART CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.VeryHard,
    text: "ONLY CLOVER CARDS",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.VeryHard,
    text: "SUITE ROYALE",
    image: "https://via.placeholder.com/150",
  },
  {
    difficulty: Difficulty.VeryHard,
    text: "QUINTE FLUSH ROYALE",
    image: "https://via.placeholder.com/150",
  },
];

const gameCardsData : Record<Difficulty, GameCard[]>= {
  [Difficulty.Easy]: easyGameCards,
  [Difficulty.Medium]: mediumGameCards,
  [Difficulty.Hard]: hardGameCards,
  [Difficulty.VeryHard]: veryHardGameCards
};

const numberLevels: Record<Difficulty, { max: number; min: number }[]> = {
  [Difficulty.Easy]: [{ max: 44, min: 20 }],
  [Difficulty.Medium]: [
    { max: 54, min: 45 },
    { max: 19, min: 10 }
  ],
  [Difficulty.Hard]: [
    { max: 60, min: 55 },
    { max: 9, min: 4 }
  ],
  [Difficulty.VeryHard]: [
    { max: 64, min: 61 },
    { max: 3, min: 0 }
  ],
};

export default { gameCardsData, numberLevels };
