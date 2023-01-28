import DragonAngry from "../assets/images/angry.png";
import DragonSad from "../assets/images/sad.png";
import DragonBoring from "../assets/images/boring.png";
import DragonSick from "../assets/images/sick.png";
import DragonShocked from "../assets/images/shocked.png";
import { MoodsImage } from "../styles/Moods.styles";

export default function Moods({ health, happiness, sleep, image, setImage }) {
  if (health === 0) {
    setImage(DragonShocked);
  } else if (health < 25 && health > 1) {
    setImage(DragonSick);
  } else if (sleep < 25) {
    setImage(DragonBoring);
  } else if (happiness < 50 && happiness > 25) {
    setImage(DragonAngry);
  } else if (happiness < 25) {
    setImage(DragonSad);
  }

  return <MoodsImage src={image} />;
}
