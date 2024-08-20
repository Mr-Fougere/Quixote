import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Player } from "../../type";

type PlayerProps = {
  player: Player;
  removePlayer: (uuid: string) => void;
};

const PlayerBlock = ({ removePlayer, player }: PlayerProps) => {

  return (
    <div key={player.name} className="player-block">
      <FontAwesomeIcon icon={ player.avatar} className="player-avatar" />
      <span className="player-name">{player.name}</span>
      <FontAwesomeIcon icon={"x"} className="player-remove" onClick={() => removePlayer(player.uuid)} />
    </div>
  );
};

export default PlayerBlock;
