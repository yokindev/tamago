import IconFood from "../../assets/icons/food.png";
import IconMusic from "../../assets/icons/music.png";
import IconBed from "../../assets/icons/bed.png";
import IconMedicine from "../../assets/icons/medicine.png";
import * as S from "./Buttons.styles";
import { useEffect } from "react";

export default function Buttons({
  health,
  setHealth,
  happiness,
  setHappiness,
  sleep,
  setSleep,
}) {
  useEffect(() => {
    if (health && happiness && sleep) {
      localStorage.setItem("Health", health);
      localStorage.setItem("Happiness", happiness);
      localStorage.setItem("Sleep", sleep);
    }
  }, [health, happiness, sleep]);

  return (
    <S.Container>
      <S.Button onClick={() => setHealth(health + 25)}>
        <S.Icon src={IconFood} />
      </S.Button>
      <S.Button onClick={() => setHappiness(happiness + 25)}>
        <S.Icon src={IconMusic} />
      </S.Button>
      <S.Button onClick={() => setSleep(sleep + 50)}>
        <S.Icon src={IconBed} />
      </S.Button>
      <S.Button onClick={() => setHealth(health + 50)}>
        <S.Icon src={IconMedicine} />
      </S.Button>
    </S.Container>
  );
}
