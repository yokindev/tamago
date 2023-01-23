import IconLife from "../../assets/icons/life.png";
import IconSleep from "../../assets/icons/sleep.png";
import IconHappiness from "../../assets/icons/happiness.png";
import * as S from "./StatusBars.styles";

const name = localStorage.getItem("Name");

export default function StatusBars({
  health,
  setHealth,
  happiness,
  setHappiness,
  sleep,
  setSleep,
}) {
  if (health >= 1) {
    setTimeout(() => {
      setHealth(health - 1);
      localStorage.setItem("Health", health);
    }, 1000);
  }

  if (happiness >= 1) {
    setTimeout(() => {
      setHappiness(happiness - 1);
      localStorage.setItem("Happiness", happiness);
    }, 1000);
  }

  if (sleep >= 1) {
    setTimeout(() => {
      setSleep(sleep - 1);
      localStorage.setItem("Sleep", sleep);
    }, 1000);
  }

  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.ContainerBar>
        <S.Icon src={IconLife} />
        <S.ProgressBar>
          <S.Percentage style={{ width: `${health}%` }} />
        </S.ProgressBar>
      </S.ContainerBar>
      <S.ContainerBar>
        <S.Icon src={IconHappiness} />
        <S.ProgressBar>
          <S.Percentage style={{ width: `${happiness}%` }} />
        </S.ProgressBar>
      </S.ContainerBar>
      <S.ContainerBar>
        <S.Icon src={IconSleep} />
        <S.ProgressBar>
          <S.Percentage style={{ width: `${sleep}%` }} />
        </S.ProgressBar>
      </S.ContainerBar>
    </S.Container>
  );
}
