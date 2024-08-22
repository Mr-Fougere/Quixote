import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import "./App.scss";
import { useEffect, useState } from "react";
import { Difficulty, GameConfiguration, GameMode, Player } from "./type";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAppleWhole,
  faCarrot,
  faCheese,
  faFish,
  faHotdog,
  faIceCream,
  faLemon,
  faPepperHot,
  faBeerMugEmpty,
  faHashtag,
  faX,
  fa1,
  fa2,
  fa3,
  faWhiskeyGlass,
  faWineBottle,
  faGlassWater,
  faPlus,
  faRankingStar
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAppleWhole,
  faCarrot,
  faCheese,
  faFish,
  faHotdog,
  faIceCream,
  faLemon,
  faPepperHot,
  faHashtag,
  faBeerMugEmpty,
  faX,
  fa1,
  fa2,
  fa3,
  faWhiskeyGlass,
  faWineBottle,
  faGlassWater,
  faPlus,
  faRankingStar
);  

const App = () => {
  const getPlayers = ():Player[] | [] => {
    const savedPlayers = localStorage.getItem('players');
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  }

  const getGameConfig = ():GameConfiguration => {
    const savedGameConfig = localStorage.getItem('gameConfig');
    return savedGameConfig
      ? JSON.parse(savedGameConfig)
      : {
          gameMode: GameMode.Soft,
          availableDifficulty: [Difficulty.Easy, Difficulty.Medium],
          specialRate: 1,
        };
  }

  const [players, setPlayers] = useState<Player[]>(getPlayers);
  const [gameConfig, setGameConfig] = useState<GameConfiguration>(getGameConfig);

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem('gameConfig', JSON.stringify(gameConfig));
  }, [gameConfig]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setPlayers={setPlayers} players={players} setGameConfig={setGameConfig} gameConfig={gameConfig} />} />
        <Route path="/game" element={<Game players={players} gameConfig={gameConfig} setPlayers={setPlayers}/>} />
      </Routes>
    </Router>
  );
};

export default App;
