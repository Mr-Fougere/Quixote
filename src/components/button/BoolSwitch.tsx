import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GameMode } from "../../type";

type BoolSwitchProps = {
  setMode: (mode: GameMode) => void;
  mode: GameMode;
  disabled: boolean;
};

export default function BoolSwitch({ mode, setMode, disabled }: BoolSwitchProps) {
  const currentModeIcon = mode === GameMode.Hard ? "beer-mug-empty" : "ranking-star";

  return (
    <button
    disabled={disabled}
      className="bool-switch"
      onClick={() =>
        setMode(mode === GameMode.Hard ? GameMode.Soft : GameMode.Hard)
      }
    >
      <FontAwesomeIcon icon={currentModeIcon} />
    </button  >
  );
}
