import IconLife from "../../assets/icons/life.png";
import IconSleep from "../../assets/icons/sleep.png";
import IconHappiness from "../../assets/icons/happiness.png";

import * as S from "./StatusBars.styles";

export default function StatusBars({ health, happiness, sleep }) {
  const name = localStorage.getItem("Name");

  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.ContainerBar>
        <S.Icon src={IconLife} />
        <S.ProgressBar />
      </S.ContainerBar>
      <S.ContainerBar>
        <S.Icon src={IconHappiness} />
        <S.ProgressBar />
      </S.ContainerBar>
      <S.ContainerBar>
        <S.Icon src={IconSleep} />
        <S.ProgressBar />
      </S.ContainerBar>
    </S.Container>
  );
}
