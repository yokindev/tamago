import IconFood from "../../assets/icons/food.png";
import IconMusic from "../../assets/icons/music.png";
import IconBed from "../../assets/icons/bed.png";
import IconMedicine from "../../assets/icons/medicine.png";
import * as S from "./Buttons.styles";

export default function Buttons() {
  return (
    <S.Container>
      <S.Button>
        <S.Icon src={IconFood} />
      </S.Button>
      <S.Button>
        <S.Icon src={IconMusic} />
      </S.Button>
      <S.Button>
        <S.Icon src={IconBed} />
      </S.Button>
      <S.Button>
        <S.Icon src={IconMedicine} />
      </S.Button>
    </S.Container>
  );
}
