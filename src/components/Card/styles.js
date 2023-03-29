import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  alwaysBounceVertical: "true",
  // automaticallyAdjustsScrollIndicatorInsets: "true",
  // automaticallyAdjustContentInsets: "true",
  // bouncesZoom: "true",
  // pagingEnabled: true,
  contentContainer: {
    // flex: 1,
  },
})`
  height: 600px;
  width: 100%;
  margin-top: 20px;
`;

export const Row = styled.View`
  /* flex: 1; */
  display: grid;
  flex-direction: row;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  gap: 6rem;
  /* height: 1000px; */
`;

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: .5,
})`
  /* margin-left: 12px; */
  width: 48%;
  height: 220px;
  border-radius: 12px;
  margin-top: 10px;
  padding: 20px;
  background: #a8e0d1;
`;
export const Name = styled.Text`
  color: #15507d;
  font-weight: 800;
  text-transform: capitalize;
  margin-top: 15px;
  text-align: center;
`;
export const NumberId = styled.Text`
  text-align: center;

`;
export const Imge = styled.Image`
  width: 100px;
  height: 100px;
  margin: 10px auto;
`;
