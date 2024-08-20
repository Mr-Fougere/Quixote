import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GameMode } from "../../type";

type BoolSwitchProps = {
  setMode: (mode: GameMode) => void;
  mode: GameMode;
};

export default function BoolSwitch({ mode, setMode }: BoolSwitchProps) {
  const currentModeIcon = mode === GameMode.Hard ? "beer-mug-empty" : "ranking-star";

  return (
    <div
      className="bool-switch"
      onClick={() =>
        setMode(mode === GameMode.Hard ? GameMode.Soft : GameMode.Hard)
      }
    >
      <FontAwesomeIcon icon={currentModeIcon} />
    </div>
  );
}
