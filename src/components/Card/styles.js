import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex: 1;
`;

export const Row = styled.View`
  background: #a8e0d1;
  width: 400px;
  height: 200px;
  border-radius: 12px;
  margin-top: 40px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
export const Name = styled.Text`
  color: #15507d;
  font-weight: 800;
  text-transform: capitalize;

`;
export const NumberId = styled.Text``;
export const Img = styled.Image`
  width: 60px;
  /* background: red; */
  height: 40px;
`;
