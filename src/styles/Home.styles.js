import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #e0fbfc;
`;

export const HomeTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 45px;
  font-weight: 900;
  background: -webkit-linear-gradient(270deg, #3d5a80, #98c1d9, #ee6c4d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HomeImage = styled.img`
  width: 300px;
`;

export const HomeInput = styled.input`
  border: 3px solid #3d5a80;
  width: 200px;
  border-radius: 50px;
  padding: 15px;
  font-weight: 900;
  font-size: 15px;
  text-align: center;
`;

export const HomeButton = styled.button`
  border: none;
  padding: 15px;
  border-radius: 50px;
  background-color: #ee6c4d;
  font-weight: 900;
  color: #e0fbfc;
  font-size: 25px;
  cursor: pointer;
`;
