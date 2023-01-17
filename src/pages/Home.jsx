import { useNavigate } from "react-router-dom";
import * as S from "../styles/Home.styles";
import Dragon from "../assets/images/hello.png";

export default function Home() {
  const toGame = useNavigate();

  const setName = (e) => {
    const name = e.target.value;
    localStorage.setItem("Name", name);
  };

  const play = () => {
    toGame("/game");
  };

  return (
    <div>
      <S.Container>
        <S.Title>TRAIN YOUR DRAGON</S.Title>
        <S.Logo src={Dragon} />
        <S.Input
          type="text"
          placeholder="Enter a name ..."
          onChange={(e) => setName(e)}
        />
        <S.Button onClick={play}>GO</S.Button>
      </S.Container>
    </div>
  );
}
