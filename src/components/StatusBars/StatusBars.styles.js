import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.h1`
  margin: 0;
  margin-bottom: 15px;
  font-size: 45px;
  font-weight: 900;
  background: -webkit-linear-gradient(180deg, #3d5a80, #98c1d9, #ee6c4d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContainerBar = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 25px;
  margin-top: 10px;
  margin-right: 10px;
`;

export const ProgressBar = styled.div`
  width: 250px;
  height: 20px;
  margin-top: 10px;
  border: 3px solid #3d5a80;
  box-shadow: 0 0 10px #98c1d9;
  background-color: white;
`;

export const Percentage = styled.span`
  display: block;
  height: 100%;
  background-color: #98c1d9;
`;
