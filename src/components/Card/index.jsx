import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import useFetch from '../../hooks/useFetch';

import * as S from './styles';

const Card = () => {
  const [pokemon, setPokemon] = useState([])
  const { request } = useFetch()

  async function fetchPokemon(id) {
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(json)
  }

  useEffect(() => {
    fetchPokemon('149')
  }, [])

  return (
    <S.Container>
      <S.Row>
        <S.Img source={pokemon?.back_default} />
        <S.Name>{pokemon?.name}</S.Name>
        <S.NumberId>{pokemon?.id}</S.NumberId>
      </S.Row>
      <S.Row>
        <S.Name>{pokemon?.name}</S.Name>
        <S.NumberId>{pokemon?.id}</S.NumberId>
      </S.Row>
    </S.Container>
  )
}

export default Card;
{/* <S.Img source={pokemon.sprites?.other?.['official-artwork']?.front_default} /> */}
{/* <S.Img source={pokemon.sprites?.other?.['official-artwork']?.front_default} /> */}