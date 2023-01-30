import IconFood from "../assets/icons/food.png";
import IconMusic from "../assets/icons/music.png";
import IconBed from "../assets/icons/bed.png";
import IconMedicine from "../assets/icons/medicine.png";
import DragonDefault from "../assets/images/default.png";
import DragonEat from "../assets/images/eat.png";
import DragonSing from "../assets/images/sing.png";
import DragonRest from "../assets/images/rest.png";
import DragonYoga from "../assets/images/yoga.png";
import DragonNo from "../assets/images/no.png";
import {
  ButtonsContainer,
  ButtonsBox,
  ButtonsIcon,
} from "../styles/Buttons.styles";

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

  const buttons = [
    {
      function: eat,
      icon: IconFood,
    },
    {
      function: sing,
      icon: IconMusic,
    },
    {
      function: rest,
      icon: IconBed,
    },
    {
      function: medicine,
      icon: IconMedicine,
    },
  ];

  return (
    <ButtonsContainer>
      {buttons.map((button, index) => (
        <ButtonsBox key={index} onClick={button.function}>
        <ButtonsIcon src={button.icon} />
      </ButtonsBox>
      ))}
    </ButtonsContainer>
  );
}
