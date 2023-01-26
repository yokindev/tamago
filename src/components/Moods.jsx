// import DragonAngry from "../assets/images/angry.png";
// import DragonSad from "../assets/images/sad.png";
// import DragonSick from "../assets/images/sick.png";
// import DragonShocked from "../assets/images/shocked.png";
// import DragonDefault from "../assets/images/default.png";
import { MoodsImage } from "../styles/Moods.styles";

export default function Moods({ health, happiness, sleep, image, setImage }) {
  return <MoodsImage src={image} />;
}
