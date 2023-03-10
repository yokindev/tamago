import DragonSad from "../assets/images/sad.png";
import DragonTired from "../assets/images/tired.png";
import DragonSick from "../assets/images/sick.png";

import { MoodsImage } from "../styles/Moods.styles";

import { useEffect } from "react";

export default function Moods({ health, happiness, sleep, image, setImage }) {
  useEffect(() => {
    if (health < 25) {
      setImage(DragonSick);
    } else if (sleep < 25) {
      setImage(DragonTired);
    } else if (happiness < 25) {
      setImage(DragonSad);
    }
  }, [health, happiness, sleep, setImage]);

  return <MoodsImage src={image} />;
}
