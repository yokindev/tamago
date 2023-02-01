import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  HomeTitle,
  HomeImage,
  HomeInput,
  HomeButton,
} from "../styles/Home.styles";
import DragonHello from "../assets/images/hello.png";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  localStorage.setItem("Name", name);

  const navigate = useNavigate();

  const handleKey = (e) => {
    if (e.key === "Enter") {
      navigate("/game");
    }
  };

  const play = () => {
    if (name) {
      navigate('/game')
    }
  }

  return (
    <HomeContainer>
      <HomeTitle>TRAIN YOUR DRAGON</HomeTitle>
      <HomeImage src={DragonHello} />
      <HomeInput
        type="text"
        placeholder="Enter a name ..."
        onKeyDown={handleKey}
        onChange={(e) => setName(e.target.value)}
      />
      <HomeButton onClick={play}>Go</HomeButton>
    </HomeContainer>
  );
}
