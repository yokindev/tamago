import StatusBars from "../components/StatusBars";
import Moods from "../components/Moods";
import Buttons from "../components/Buttons";
import * as S from "../styles/Home.styles";
import { useState } from "react";

export default function Game() {
  const [health, setHealth] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [sleep, setSleep] = useState(100);

  if (health >= 1) {
    setTimeout(() => {
      setHealth(health - 1);
    }, 2000);
  }

  if (happiness >= 1) {
    setTimeout(() => {
      setHappiness(happiness - 1);
    }, 3000);
  }

  if (sleep >= 1) {
    setTimeout(() => {
      setSleep(sleep - 1);
    }, 4000);
  }

  localStorage.setItem("Health", health);
  localStorage.setItem("Happiness", happiness);
  localStorage.setItem("Sleep", sleep);

  return (
    <S.Container>
      <StatusBars
        health={health}
        happiness={happiness}
        sleep={sleep}
      />
      <Moods />
      <Buttons
        health={health}
        happiness={happiness}
        sleep={sleep}
        setHealth={setHealth}
        setHappiness={setHappiness}
        setSleep={setSleep}
      />
    </S.Container>
  );
}
