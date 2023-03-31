import React from 'react';

import Card from "../../components/Card";
import Pokemon from '../../components/Pokemon';
import Search from "../../components/Search";

import * as S from './styles';

const Home = () => {
  const text = 'Search for a Pokemon by name or using id National Pokedéx number.'
  return (
    <S.Container>
      {/* <S.Name>Pokédex</S.Name> */}
      {/* <S.Description>{text}</S.Description> */}
      {/* <Search /> */}
      <Pokemon />
      {/* <Card /> */}
    </S.Container>

  );
}

export default Home;