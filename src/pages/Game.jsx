import StatusBars from "../components/StatusBars";
import Moods from "../components/Moods";
import Buttons from "../components/Buttons";
import DragonDefault from "../assets/images/proud.png";
import * as S from "../styles/Home.styles";
import { useState } from "react";

export default function Game() {
  const [health, setHealth] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const [sleep, setSleep] = useState(100);
  const [image, setImage] = useState(DragonDefault);

  localStorage.setItem("Health", health);
  localStorage.setItem("Happiness", happiness);
  localStorage.setItem("Sleep", sleep);
  localStorage.setItem("Image", image);

  return (
    <S.Container>
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
    </S.Container>
  );
}
