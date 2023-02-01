import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  HomeTitle,
  HomeImage,
  HomeInput,
  HomeButton,
} from "../styles/Home.styles";
import DragonHello from "../assets/images/hello.png";

export default function Home() {
  const navigate = useNavigate();

  const setName = (e) => {
    if (e.key === "Enter") {
      const name = e.target.value;
      localStorage.setItem("Name", name);
      navigate("/game");
    }
  };

  const play = () => {
    navigate("/game");
  };

  return (
    <HomeContainer>
      <HomeTitle>TRAIN YOUR DRAGON</HomeTitle>
      <HomeImage src={DragonHello} />
      <HomeInput
        type="text"
        placeholder="Enter a name ..."
        onKeyDown={setName}
      />
      <HomeButton onClick={play}>Go</HomeButton>
    </HomeContainer>
  );
}
