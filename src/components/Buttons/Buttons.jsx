import IconFood from "../../assets/icons/food.png";
import IconMusic from "../../assets/icons/music.png";
import IconBed from "../../assets/icons/bed.png";
import IconMedicine from "../../assets/icons/medicine.png";
import * as S from "./Buttons.styles";

export default function Buttons({
  health,
  setHealth,
  happiness,
  setHappiness,
  sleep,
  setSleep,
}) {
  const eat = () => {
      setHealth(health + 5);
  };

  const fun = () => {
    setHappiness(happiness + 5);
  };

  const rest = () => {
    while (sleep < 50) {
      setSleep(sleep + 50);
    }
  };

  const cure = () => {
    while (health < 50) {
      setHealth(health + 50);
    }
  };

  return (
    <S.Container>
      <S.Button onClick={() => eat()}>
        <S.Icon src={IconFood} />
      </S.Button>
      <S.Button onClick={() => fun()}>
        <S.Icon src={IconMusic} />
      </S.Button>
      <S.Button onClick={() => rest()}>
        <S.Icon src={IconBed} />
      </S.Button>
      <S.Button onClick={() => cure()}>
        <S.Icon src={IconMedicine} />
      </S.Button>
    </S.Container>
  );
}
