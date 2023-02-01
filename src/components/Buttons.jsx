import IconFood from "../assets/icons/food.png";
import IconMusic from "../assets/icons/music.png";
import IconBed from "../assets/icons/bed.png";
import IconMedicine from "../assets/icons/medicine.png";

import {
  ButtonsContainer,
  ButtonsBox,
  ButtonsIcon,
} from "../styles/Buttons.styles";

export default function Buttons({ eat, sing, rest, medicine }) {
  return (
    <ButtonsContainer>
      <ButtonsBox onClick={eat}>
        <ButtonsIcon src={IconFood} />
      </ButtonsBox>
      <ButtonsBox onClick={sing}>
        <ButtonsIcon src={IconMusic} />
      </ButtonsBox>
      <ButtonsBox onClick={rest}>
        <ButtonsIcon src={IconBed} />
      </ButtonsBox>
      <ButtonsBox onClick={medicine}>
        <ButtonsIcon src={IconMedicine} />
      </ButtonsBox>
    </ButtonsContainer>
  );
}
