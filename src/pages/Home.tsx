import { GameConfiguration, GameMode, Player } from "../type";
import NewPlayer from "../components/player/NewPlayerBlock";
import PlayerBlock from "../components/player/PlayerBlock";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import BoolSwitch from "../components/button/BoolSwitch";
import { useNavigate } from "react-router-dom";

type HomeProps = {
  setPlayers: (players: Player[]) => void;
  players: Player[];
  setGameConfig: (gameConfig: GameConfiguration) => void;
  gameConfig: GameConfiguration;
};

const avatars: IconName[] = [
  "lemon",
  "pepper-hot",
  "carrot",
  "apple-whole",
  "fish",
  "ice-cream",
  "cheese",
  "hotdog",
];

const Home = ({ setPlayers, players, setGameConfig, gameConfig }: HomeProps) => {
  const navigate = useNavigate(); 

  const addPlayer = (name: string) => {

    const newPlayers = players.slice();
    const remainingAvatars = avatars.filter(
      (a) => !newPlayers.some((p) => p.avatar === a)
    );
    const newAvatar =
      remainingAvatars[Math.floor(Math.random() * remainingAvatars.length)];
    newPlayers.push({
      name: name,
      avatar: newAvatar,
      score: 0,
      uuid: Math.random().toString(),
    });
    setPlayers(newPlayers);
  };

  const removePlayer = (uuid: string) => {
    if(gameConfig.started) return
    const newPlayers = players.slice();
    const index = newPlayers.findIndex((player) => player.uuid === uuid);
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
  };

  const setSpecialRate = () => {
    if(gameConfig.started) return
    let newSpecialRate = gameConfig.specialRate + 1
    newSpecialRate = newSpecialRate > 5 ? 1 : newSpecialRate;
    setGameConfig({ ...gameConfig, specialRate: newSpecialRate });
  }

  const canAddPlayer = avatars.length > players.length &&  !gameConfig.started; 
  const enoughPlayers = players.length >= 2;

  const startGame = () => {
    setGameConfig({ ...gameConfig, started: true });
    navigate("/game");
  };

  const setGameMode = (mode: GameMode) => {
    if(gameConfig.started) return
    setGameConfig({ ...gameConfig, gameMode: mode });
  }

  return (
    <div className="players">
      <div >Kixotte</div>
      <h3>{players.length}/8 joueurs</h3>
      <div className="players-list">
        {players.map((player) => (
          <PlayerBlock
            key={player.uuid}
            player={player}
            removePlayer={removePlayer}
          />
        ))}
      </div>
      {canAddPlayer && <NewPlayer addPlayer={addPlayer}></NewPlayer>}
      <div className="game-block" >
        <button
          disabled={gameConfig.started}
          className={"special-rate button"}
          onClick={setSpecialRate}
        >
          {gameConfig.specialRate}
        </button>
        <BoolSwitch setMode={setGameMode} mode={gameConfig.gameMode} disabled={gameConfig.started} />
        <button
          className={"start-game button"}
          onClick={startGame}
          disabled={!enoughPlayers}
        >
          { gameConfig.started ? "Reprendre" : "Commencer"} partie {gameConfig.gameMode}
        </button>
      </div>
    </div>
  );
};

export default Home;
