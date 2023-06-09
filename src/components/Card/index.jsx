import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useFetch from '../../hooks/useFetch';

import * as S from './styles';

const Card = () => {
  const [pokemon, setPokemon] = useState('Pikachu')
  const [pokemons, setPokemons] = useState([])
  const { request } = useFetch()

  async function fetchPokemon(id) {
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(json)
  }

  async function getAllPokemons() {
    const baseURL = 'https://pokeapi.co/api/v2/'

    const res = await fetch(`${baseURL}pokemon/?offset=40&limit=40`)
    const data = await res.json()

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return data
    })
    const results = await Promise.all(promises)

    setPokemons(results)
  }
  const number = '123'

  useEffect(() => {
    getAllPokemons()
  }, [])

  function onPressPokemon(id) {
    fetchPokemon(id)
    console.log('FetchPokemon:' + pokemon?.name)
  }





  return (
    <>
      {/* <S.Row>
        <S.Imge source={{ uri: pokemon.sprites?.other?.['official-artwork']?.front_default }}
          styles={{ positin: 'fixed' }}
        />
      </S.Row> */}
      <S.Container>
        <Text>{pokemon?.name}</Text>
        <S.Row>
          {pokemons.map((pokemon) => {
            return (
              <S.Card
                key={pokemon?.id}
                onPress={() => onPressPokemon(pokemon?.id)}
              >
                <S.Imge source={{ uri: pokemon.sprites?.other?.['official-artwork']?.front_default }} />
                <S.Name>{pokemon?.name}</S.Name>
                <S.NumberId>#{pokemon?.id}</S.NumberId>
              </S.Card>
            )
          }
          )}
        </S.Row>
      </S.Container >
    </>
  )
}

export default Card;
{/* <S.Img source={pokemon.sprites?.other?.['official-artwork']?.front_default} /> */ }
{/* <S.Img source={pokemons?.back_default} /> */ }