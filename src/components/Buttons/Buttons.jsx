import IconFood from "../../assets/icons/food.png";
import IconMusic from "../../assets/icons/music.png";
import IconBed from "../../assets/icons/bed.png";
import IconMedicine from "../../assets/icons/medicine.png";
import DragonEat from "../../assets/images/eat.png";
import DragonFun from "../../assets/images/sing.png";
import DragonRest from "../../assets/images/happy.png";
import * as S from "./Buttons.styles";

export default function Buttons({
  health,
  setHealth,
  happiness,
  setHappiness,
  sleep,
  setSleep,
  setImage,
}) {
  const eat = () => {
    if (health <= 75) {
      setHealth((health) => health + 25);
      setImage(DragonEat);
    }
  };

  const fun = () => {
    if (happiness <= 75) {
      setHappiness((happiness) => happiness + 25);
      setImage(DragonFun);
    }
  };

  const rest = () => {
    if (sleep <= 50) {
      setSleep((sleep) => sleep + 50);
      setImage(DragonRest);
    }
  };

  const medicine = () => {
    if (health <= 50) {
      setHealth((health) => health + 50);
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
      <S.Button onClick={() => medicine()}>
        <S.Icon src={IconMedicine} />
      </S.Button>
    </S.Container>
  );
}
