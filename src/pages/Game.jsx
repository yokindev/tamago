import StatusBars from "../components/StatusBars";
import Moods from "../components/Moods";
import Buttons from "../components/Buttons";
import * as S from "../styles/Home.styles";
import { useState } from "react";

export default function Game() {
  const [health, setHealth] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [sleep, setSleep] = useState(100);

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
