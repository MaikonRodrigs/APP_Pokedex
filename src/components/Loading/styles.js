import styled from "styled-components/native";


export const LoadingWrapper = styled.View`
  /* height: 100%; */
  align-items: center;
  justify-content: center;
  z-index: 99;
  flex-direction: row;
`;

export const Dot = styled.View`
  background-color: #000;
  border-radius: 50%;
  width: 9px;
  height: 9px;
  margin: 0 2.5px;
`;
