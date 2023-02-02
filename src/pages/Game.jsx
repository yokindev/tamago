import StatusBars from "../components/StatusBars";
import Moods from "../components/Moods";
import Buttons from "../components/Buttons";

import DragonDefault from "../assets/images/default.png";
import DragonEat from "../assets/images/eat.png";
import DragonSing from "../assets/images/sing.png";
import DragonRest from "../assets/images/rest.png";
import DragonYoga from "../assets/images/yoga.png";
import DragonNo from "../assets/images/no.png";
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

  const name = localStorage.getItem("Name").toUpperCase();

  const eat = () => {
    if (health <= 75) {
      setHealth((health) => health + 25);
      setImage(DragonEat);

      setTimeout(() => {
        setImage(DragonDefault);
      }, 2000);
    } else {
      setImage(DragonNo);

      setTimeout(() => {
        setImage(DragonDefault);
      }, 2000);
    }
  };

  const sing = () => {
    if (happiness <= 75) {
      setHappiness((happiness) => happiness + 25);
      setImage(DragonSing);

      setTimeout(() => {
        setImage(DragonDefault);
      }, 2000);
    } else {
      setImage(DragonNo);

      setTimeout(() => {
        setImage(DragonDefault);
      }, 2000);
    }
  };

  const rest = () => {
    if (sleep <= 50) {
      setSleep((sleep) => sleep + 50);
      setImage(DragonRest);

      setTimeout(() => {
        setImage(DragonDefault);
      }, 2000);
    } else {
      setImage(DragonNo);

      setTimeout(() => {
        setImage(DragonDefault);
      }, 2000);
    }
  };

  const medicine = () => {
    if (health <= 50) {
      setHealth((health) => health + 50);
      setImage(DragonYoga);

      setTimeout(() => {
        setImage(DragonDefault);
      }, 2000);
    } else {
      setImage(DragonNo);

      setTimeout(() => {
        setImage(DragonDefault);
      }, 2000);
    }
  };

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
          <Buttons eat={eat} sing={sing} rest={rest} medicine={medicine} />
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
