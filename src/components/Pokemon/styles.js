import styled from "styled-components/native";

export const Container = styled.View.attrs({
  // alwaysBounceVertical: "true",
  // contentContainer: {
  //   paddingTop: 30,
  // },
})`
  height: 100%;
  width: auto;
  position: fixed;
  margin-top: 20px;
`;

export const NavRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
`;

export const SearchAndFavorite = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchRow = styled.View`
  padding: 12px;
  background-color: #d9d9d9;
  border-radius: 99px;
  height: 55px;
  width: 55px;
  align-items: center;
  justify-content: center;
`;

export const SearchOpen = styled.TextInput`
  padding: 12px;
  background-color: #d9d9d9;
  border-radius: 99px;
  width: 198px;
  height: 55px;
  padding-left: 20px;
`;

export const HeaderDescription = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Power = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 99px;
  margin-top: -19px;
`;

export const PokemonImg = styled.Image`
  width: 357px;
  height: 357px;
  align-items: center;
  justify-content: center;
  /* margin: 80px; */
  margin: 40px 30px 0;
  z-index: 5;
`;

export const DescriptionRow = styled.ScrollView.attrs({
  alwaysBounceVertical: true,
})`
  background-color: #fdffae;
  background-color: ${({ bg }) => bg}
  /* background-color: red; */
  width: 100%;
  height: 10px;

  margin-top: -55px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

  padding: 30px;
`;

export const NamedAndIconRow = styled.View``;

export const Name = styled.Text`
  color: #15507d;
  font-weight: 800;
  text-transform: capitalize;
  margin: 15px 0;
  text-align: left;
  font-size: 32px;
`;

export const NumberId = styled.Text`
  color: #15507d;
  margin-top: -19px;
  margin-bottom: 20px;
`;

export const CurrentRow = styled.View`
  width: 100%;
  height: 18px;
  background-color: white;

  border-radius: 99px;
  margin: 8px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

export const Stats = styled.Text`
  font-size: 12px;

  position: absolute;
  left: 10px;
  z-index: 15;
`;

export const Number = styled.Text`
  align-self: flex-end;
  margin-right: 10px;
  font-size: 12px;

  position: absolute;
  right: 2px;
  z-index: 15;
`;

export const Current = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: ${({ w }) => w}%;
  height: 18px;
  background-color: #d6cfcf;

  border-radius: 99px;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
`;

export const HeightAndWeight = styled.View`
  height: 40px;
  width: 100%;

  justify-content: space-between;
  flex-direction: row;
  margin-top: 30px;
`;
export const Height = styled.Text``;
export const Width = styled.Text``;
