import { GameConfiguration, Player } from "../type";
import GameCardBlock from "../components/card/GameCardBlock";

type GameProps = {
  players: Player[];
  setPlayers: (players: Player[]) => void;
  gameConfig: GameConfiguration;
};

const Game = ({ gameConfig, players, setPlayers }: GameProps) => {
  if (players.length === 0) {
    window.location.href = "/";
  }

  const setScorePlayer = (value: number, player: Player) => {
    const newPlayers = players.map((p) => {
      if (p.uuid === player.uuid) {
        return { ...p, score: p.score + value };
      }
      return p;
    });
    setPlayers(newPlayers);
  };

  return (
    <div className="game-container">
      <div className="game-cards-container">
        <GameCardBlock
          gameConfig={gameConfig}
          key={"game-card-1"}
          players={players}
          setPlayerScore={setScorePlayer}
          position={1}
        />
        <GameCardBlock
          gameConfig={gameConfig}
          key={"game-card-2"}
          players={players}
          setPlayerScore={setScorePlayer}
          position={2}
        />
        <GameCardBlock
          gameConfig={gameConfig}
          key={"game-card-3"}
          players={players}
          setPlayerScore={setScorePlayer}
          position={3}
        />
      </div>
    </div>
  );
};

export default Game;
