import styled from "styled-components";

export const GameContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #e0fbfc;
`;

export const GameImage = styled.img`
  width: 350px;
`;

export const GameMessage = styled.p`
  font-size: 20px;
`;

export const GameButton = styled.button`
  border: none;
  padding: 15px;
  border-radius: 50px;
  background-color: #ee6c4d;
  font-weight: 900;
  color: #e0fbfc;
  font-size: 25px;
  cursor: pointer;
`;