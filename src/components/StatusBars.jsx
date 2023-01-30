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

export default function StatusBars({
  health,
  setHealth,
  happiness,
  setHappiness,
  sleep,
  setSleep,
}) {
  const name = (localStorage.getItem("Name")).toUpperCase();

  const bars = [
    {
      icon: IconLife,
      progress: health,
    },
    {
      icon: IconHappiness,
      progress: happiness,
    },
    {
      icon: IconSleep,
      progress: sleep,
    },
  ];

  useEffect(() => {
    if (health && happiness && sleep) {
      const countDown = setTimeout(() => {
        setHealth(health - 5);
        setHappiness(happiness - 2);
        setSleep(sleep - 4);
      }, 2000);

      return () => {
        clearTimeout(countDown);
      };
    }
  }, [health, setHealth, happiness, setHappiness, sleep, setSleep]);

  return (
    <StatusBarContainer>
      <StatusBarTitle>{name}</StatusBarTitle>

      {bars.map((bar, index) => (
        <StatusBarBox key={index}>
          <StatusBarIcon src={bar.icon} />
          <StatusBarDiv>
            <StatusBarPercentage percentage={bar.progress} />
          </StatusBarDiv>
        </StatusBarBox>
      ))}
    </StatusBarContainer>
  );
}
