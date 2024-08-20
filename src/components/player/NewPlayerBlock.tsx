import { useState } from "react";

type Props = {
  addPlayer: ( name: string) => void;
};

const NewPlayerBlock = ({addPlayer}: Props) => {
  const [name, setName] = useState("");


	const addNewPlayer = () => {
		if (name) {
			addPlayer(name);
			setName("");
		}	
	}

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addNewPlayer();
    }
  }

  return (
    <div className="new-player">
      <input
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Nom du joueur"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addNewPlayer}>Ajouter</button>
    </div>
  );
};

export default NewPlayerBlock;
