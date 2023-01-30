import DragonSad from "../assets/images/sad.png";
import DragonBoring from "../assets/images/boring.png";
import DragonSick from "../assets/images/sick.png";
import DragonShocked from "../assets/images/shocked.png";
import { MoodsImage } from "../styles/Moods.styles";

export default function Moods({ health, happiness, sleep, image, setImage }) {
  if (!health || !happiness || !sleep) {
    setImage(DragonShocked);
  } else if (health < 25) {
    setImage(DragonSick);
  } else if (sleep < 25) {
    setImage(DragonBoring);
  } else if (happiness < 25) {
    setImage(DragonSad);
  }

  return <MoodsImage src={image} />;
}
