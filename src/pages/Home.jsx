import { useNavigate } from "react-router-dom";
import * as S from "../styles/Home.styles";
import DragonHello from "../assets/images/hello.png";

export default function Home() {
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
      <S.Image src={DragonHello} />
      <S.Input
        type="text"
        placeholder="Enter a name ..."
        onChange={(e) => setName(e)}
      />
      <S.Button onClick={play}>Go</S.Button>
    </S.Container>
  );
}
