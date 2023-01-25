import * as S from "./Moods.styles";

export default function Moods({ health, happiness, sleep, image, setImage }) {
  // const chooseImage = () => {
  //   switch (health) {
  //     case health < 75 & health > 50:
  //       return DragonImage1;

  //     case health <= 50:
  //       return DragonImage2;

  //     default:
  //       return DragonImage3;
  //   }
  // };

  return <S.Image src={image} />;
}
