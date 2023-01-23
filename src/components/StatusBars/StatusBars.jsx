import IconLife from "../../assets/icons/life.png";
import IconSleep from "../../assets/icons/sleep.png";
import IconHappiness from "../../assets/icons/happiness.png";
import * as S from "./StatusBars.styles";
import { useEffect } from "react";

const name = localStorage.getItem("Name");

export default function StatusBars({
  health,
  setHealth,
  happiness,
  setHappiness,
  sleep,
  setSleep,
}) {
  useEffect(() => {
    if (!health) return;

    const healthCountDown = setTimeout(() => {
      setHealth(health - 1);
    }, 2000);

    return () => {
      clearTimeout(healthCountDown)
    }
      
  }, [health, setHealth]);

  useEffect(() => {
    if (!happiness) return;

    const happinessCountDown = setTimeout(() => {
      setHappiness(happiness - 1);
    }, 3000);

    return () => {
      clearTimeout(happinessCountDown)
    }
      
  }, [happiness, setHappiness]);

  useEffect(() => {
    if (!sleep) return;

    const sleepCountDown = setTimeout(() => {
      setSleep(sleep - 1);
    }, 4000);

    return () => {
      clearTimeout(sleepCountDown)
    }
      
  }, [sleep, setSleep]);

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
