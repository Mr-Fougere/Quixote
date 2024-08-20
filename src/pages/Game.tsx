import { GameMode, Player } from "../type";
import GameCardBlock from "../components/card/GameCardBlock";

type GameProps = {
  players: Player[];
  setPlayers: (players: Player[]) => void;
  mode: GameMode;
};

const Game = ({ mode, players, setPlayers }: GameProps) => {

  const setScorePlayer = (value: number, player: Player) => {
    const newPlayers = players.map((p) => {
      if (p.uuid === player.uuid) {
        return { ...p, score: p.score + value };
      }
      return p;
    });
    setPlayers(newPlayers);
  }
  
  return (
    <div className="game-container">
      <div className="game-cards-container">
        <GameCardBlock mode={mode}  key={1} players={players} setPlayerScore={setScorePlayer} />
        <GameCardBlock mode={mode}  key={2} players={players} setPlayerScore={setScorePlayer} />
        <GameCardBlock mode={mode}  key={3} players={players} setPlayerScore={setScorePlayer} />
      </div>
    </div>
  );
};

export default Game;
