import IconLife from "../assets/icons/life.png";
import IconSleep from "../assets/icons/sleep.png";
import IconHappiness from "../assets/icons/happiness.png";
import {
  StatusBarContainer,
  StatusBarTitle,
  StatusBarBox,
  StatusBarIcon,
  StatusBarDiv,
  StatusBarPercentage,
} from "../styles/StatusBars.styles";
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
      clearTimeout(healthCountDown);
    };
  }, [health, setHealth]);

  useEffect(() => {
    if (!happiness) return;

    const happinessCountDown = setTimeout(() => {
      setHappiness(happiness - 1);
    }, 1000);

    return () => {
      clearTimeout(happinessCountDown);
    };
  }, [happiness, setHappiness]);

  useEffect(() => {
    if (!sleep) return;

    const sleepCountDown = setTimeout(() => {
      setSleep(sleep - 1);
    }, 3000);

    return () => {
      clearTimeout(sleepCountDown);
    };
  }, [sleep, setSleep]);

  return (
    <StatusBarContainer>
      <StatusBarTitle>{name}</StatusBarTitle>

      <StatusBarBox>
        <StatusBarIcon src={IconLife} />
        <StatusBarDiv>
          <StatusBarPercentage style={{ width: `${health}%` }} />
        </StatusBarDiv>
      </StatusBarBox>

      <StatusBarBox>
        <StatusBarIcon src={IconHappiness} />
        <StatusBarDiv>
          <StatusBarPercentage style={{ width: `${happiness}%` }} />
        </StatusBarDiv>
      </StatusBarBox>

      <StatusBarBox>
        <StatusBarIcon src={IconSleep} />
        <StatusBarDiv>
          <StatusBarPercentage style={{ width: `${sleep}%` }} />
        </StatusBarDiv>
      </StatusBarBox>
    </StatusBarContainer>
  );
}
