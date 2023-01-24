import { useNavigate } from "react-router-dom";
import * as S from "../styles/Home.styles";
import DragonImage1 from "../assets/images/hello.png";
import DragonImage2 from "../assets/images/proud.png";
import DragonImage3 from "../assets/images/relaxed.png";

export default function Home() {
  const images = [DragonImage1, DragonImage2, DragonImage3];
  const randomImage = Math.floor(Math.random() * images.length);

  const setName = (e) => {
    const name = e.target.value;
    localStorage.setItem("Name", name);
  };

  const navigate = useNavigate();
  const play = () => {
    navigate("/game");
  };

  return (
    <S.Container>
      <S.Title>TRAIN YOUR DRAGON</S.Title>
      <S.Image src={images[randomImage]} />
      <S.Input
        type="text"
        placeholder="Enter a name ..."
        onChange={(e) => setName(e)}
      />
      <S.Button onClick={play}>GO</S.Button>
    </S.Container>
  );
}
