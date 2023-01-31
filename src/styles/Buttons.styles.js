import styled from "styled-components";

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const ButtonsBox = styled.button`
  border: 3px solid #3d5a80;
  box-shadow: 0 0 15px #98c1d9;
  padding: 25px;
  border-radius: 50px;
  background-color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const ButtonsIcon = styled.img`
  width: 45px;

  @media (max-width: 768px) {
    width: 30px;
  }
`;
