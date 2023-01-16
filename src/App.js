import Home from "./pages/Home";
import Select from "./pages/Select";
import Game from "./pages/Game";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<Select />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
