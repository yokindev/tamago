import { useNavigate } from "react-router-dom";

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
      <h1>Train your dragon</h1>
      <input
        type="text"
        placeholder="Enter a name"
        onChange={(e) => setName(e)}
      />
      <button onClick={play}>PLAY</button>
    </div>
  );
}
