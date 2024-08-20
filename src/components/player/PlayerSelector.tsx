import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Player } from "../../type";

type PlayerProps = {
  player: Player;
  selectPlayer: (player: Player) => void;
};

const PlayerSelector = ({ selectPlayer, player }: PlayerProps) => {

  return (
    <div key={player.name} className="player-block"  onClick={() => selectPlayer(player)} >
      <FontAwesomeIcon icon={ player.avatar} className="player-avatar" />
      <span className="player-name">{player.name}</span>
      <span className="player-score">{player.score}</span>
    </div>
  );
};

export default PlayerSelector;
