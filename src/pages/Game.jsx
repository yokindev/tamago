import StatusBars from "../components/StatusBars";
import Buttons from "../components/Buttons";
import * as S from "../styles/Home.styles";
import { useState } from "react";

export default function Game() {
  const [health, setHealth] = useState(100);
  const [happiness, setHappiness] = useState(50);
  const [sleep, setSleep] = useState(100);

  return (
    <S.Container>
      <StatusBars health={health} happiness={happiness} sleep={sleep} />
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
