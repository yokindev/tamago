import StatusBars from "../components/StatusBars";
import Moods from "../components/Moods";
import Buttons from "../components/Buttons";
import DragonProud from "../assets/images/proud.png";
import DragonPeace from "../assets/images/peace.png";
import DragonRelaxed from "../assets/images/relaxed.png";
import DragonFun from "../assets/images/fun.png";
import * as S from "../styles/Home.styles";
import { useState } from "react";

export default function Game() {
  const dragonImages = () => {
    var images = [DragonFun, DragonPeace, DragonProud, DragonRelaxed];
    var random = Math.floor(Math.random() * images.length);
    var defaultImage = images[random];

    return defaultImage;
  };

  const [health, setHealth] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const [sleep, setSleep] = useState(100);
  const [image, setImage] = useState(dragonImages);

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
        dragonImages={dragonImages}
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
