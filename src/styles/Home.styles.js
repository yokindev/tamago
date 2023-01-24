import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #e0fbfc;
`;

export const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 40px;
  font-weight: 900;
`;

export const Image = styled.img`
  width: 300px;
`;

export const Input = styled.input`
  border: 3px solid #3d5a80;
  width: 200px;
  border-radius: 50px;
  padding: 15px;
  font-weight: 900;
  font-size: 15px;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  padding: 15px;
  border-radius: 50px;
  background-color: #ee6c4d;
  font-weight: 900;
  color: #e0fbfc;
  font-size: 25px;
  cursor: pointer;
`;
