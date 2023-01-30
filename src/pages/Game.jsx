import StatusBars from "../components/StatusBars";
import Moods from "../components/Moods";
import Buttons from "../components/Buttons";
import DragonDefault from "../assets/images/default.png";
import DragonDead from "../assets/images/dead.png";
import {
  GameContainer,
  GameImage,
  GameMessage,
  GameButton,
} from "../styles/Game.styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Game() {
  const [health, setHealth] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const [sleep, setSleep] = useState(100);
  const [image, setImage] = useState(DragonDefault);

  localStorage.setItem("Health", health);
  localStorage.setItem("Happiness", happiness);
  localStorage.setItem("Sleep", sleep);
  localStorage.setItem("Image", image);

  const name = (localStorage.getItem("Name")).toUpperCase();

  const navigate = useNavigate();
  const back = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <>
      {health && happiness && sleep ? (
        <GameContainer>
          <StatusBars
            health={health}
            happiness={happiness}
            sleep={sleep}
            setHealth={setHealth}
            setHappiness={setHappiness}
            setSleep={setSleep}
          />
          <Moods
            health={health}
            happiness={happiness}
            sleep={sleep}
            image={image}
            setImage={setImage}
          />
          <Buttons
            health={health}
            happiness={happiness}
            sleep={sleep}
            setHealth={setHealth}
            setHappiness={setHappiness}
            setSleep={setSleep}
            setImage={setImage}
          />
        </GameContainer>
      ) : (
        <GameContainer>
          <GameMessage>{name} IS DEAD</GameMessage>
          <GameImage src={DragonDead} />
          <GameButton onClick={back}>Home</GameButton>
        </GameContainer>
      )}
    </>
  );
}
