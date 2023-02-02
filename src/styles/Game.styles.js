import styled from "styled-components";

export const GameContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #e0fbfc;
`;

export const GameMessage = styled.h1`
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

export const GameImage = styled.img`
  max-width: 500px;
  min-width: 350px;
  width: 100%;
`;

export const GameButton = styled.button`
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
