import Dragon from "../../assets/images/hello.png";
import * as S from "./Moods.styles";

export default function Moods({health, happiness, sleep}) {
  return <S.Image src={Dragon} />;
}
