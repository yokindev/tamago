import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #e0fbfc;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const HomeTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 75px;
  font-weight: 900;
  background: -webkit-linear-gradient(270deg, #3d5a80, #98c1d9, #ee6c4d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 45px;
  }
`;

export const HomeImage = styled.img`
  width: 500px;

  @media (max-width: 768px) {
    width: 350px;
  }
`;

export const HomeInput = styled.input`
  border: 3px solid #3d5a80;
  width: 400px;
  border-radius: 50px;
  padding: 25px;
  font-weight: 900;
  font-size: 25px;
  text-align: center;

  @media (max-width: 768px) {
    width: 200px;
    padding: 15px;
    font-size: 15px;
  }
`;

export const HomeButton = styled.button`
  border: none;
  padding: 25px;
  border-radius: 50px;
  background-color: #ee6c4d;
  font-weight: 900;
  color: #e0fbfc;
  font-size: 35px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 25px;
  }
`;
