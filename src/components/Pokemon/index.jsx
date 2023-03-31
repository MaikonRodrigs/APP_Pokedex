import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { Text, View } from 'react-native'
import { AntDesign, EvilIcons, MaterialIcons } from '@expo/vector-icons';

import * as S from './styles'
import { LoadingItems } from '../Loading';

const Pokemon = () => {
  const p = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png'
  // const pokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png'
  const p1 = 'https://pokedexmaikonrodrigs.web.app/assets/Grass-0f41bfce.png'
  const power = 'https://pokedexmaikonrodrigs.web.app/assets/Fire-3b2af2f7.png'


  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const { request } = useFetch()

  async function fetchPokemon(id) {
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(json)
  }

  useEffect(() => {
    setLoading(true)
    fetchPokemon('7')
    console.log(pokemon?.types[0]?.type?.name)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) {
    return (
      <View style={{ height: "100%", width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <LoadingItems />
      </View>
    )
  }

  if (pokemon.length <= 0 || pokemon == undefined) {
    return (
      <View style={{ height: "100%", width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <LoadingItems />
      </View>
    )
  }

  return (
    <>
      <S.Container>

        <S.NavRow>
          <AntDesign name="arrowleft" size={24} color="#15507d" />
          <S.SearchAndFavorite>
            <S.SearchRow>
              <EvilIcons name="search" size={26} color="#15507d" />
            </S.SearchRow>
            <MaterialIcons name="favorite" size={24} color="red" marginLeft={10} />
          </S.SearchAndFavorite>
        </S.NavRow>
        <S.PokemonImg source={{ uri: pokemon?.sprites?.other?.['official-artwork']?.front_default }} />
        <S.PokemonImg source={{ uri: pokemon?.sprites?.other?.['official-artwork']?.front_default }}
          style={{ opacity: .035, position: 'absolute', left: 10, top: 0, marginTop: 30, width: 559, height: 559, zIndex: 0 }}
        />
        <S.DescriptionRow 
        bg={
          (pokemon?.types[0]?.type?.name === 'grass' && '#D3FFD8') ||
          (pokemon?.types[0]?.type?.name === 'fire' && '#F5D072') ||
          (pokemon?.types[0]?.type?.name === 'water' && '#D3F7FF')
        }>
          <S.HeaderDescription>
            <S.NamedAndIconRow>
              <S.Name>{pokemon?.name}</S.Name>
              <S.NumberId>#{pokemon?.id}</S.NumberId>
            </S.NamedAndIconRow>
            <S.Power source={{ uri: power }}></S.Power>
          </S.HeaderDescription>
          <S.CurrentRow>
            <S.Stats>HP</S.Stats>
            <S.Number>{pokemon?.stats[0]?.base_stat}</S.Number>
            <S.Current w={pokemon?.stats[0]?.base_stat}>
            </S.Current>
          </S.CurrentRow>
          <S.CurrentRow>
            <S.Stats>ATTACK</S.Stats>
            <S.Number>{pokemon?.stats[1]?.base_stat}</S.Number>
            <S.Current w={pokemon?.stats[1]?.base_stat}>
            </S.Current>
          </S.CurrentRow>
          <S.CurrentRow>
            <S.Stats>DEFENSE</S.Stats>
            <S.Number>{pokemon?.stats[2]?.base_stat}</S.Number>
            <S.Current w={pokemon?.stats[2]?.base_stat}>
            </S.Current>
          </S.CurrentRow>
          <S.CurrentRow>
            <S.Stats>SP.ATTACK</S.Stats>
            <S.Number>{pokemon?.stats[3]?.base_stat}</S.Number>
            <S.Current w={pokemon?.stats[3]?.base_stat}>
            </S.Current>
          </S.CurrentRow>
          <S.CurrentRow>
            <S.Stats>SP.DEFENSE</S.Stats>
            <S.Number>{pokemon?.stats[4]?.base_stat}</S.Number>
            <S.Current w={pokemon?.stats[4]?.base_stat}>
            </S.Current>
          </S.CurrentRow>
          <S.CurrentRow>
            <S.Stats>SPEED</S.Stats>
            <S.Number>{pokemon?.stats[5]?.base_stat}</S.Number>
            <S.Current w={pokemon?.stats[5]?.base_stat}>
            </S.Current>
          </S.CurrentRow>
          <S.HeightAndWeight>
            <S.Height>{pokemon?.height}cm</S.Height>
            <S.Width>{pokemon?.weight}kg</S.Width>
          </S.HeightAndWeight>
        </S.DescriptionRow>

      </S.Container>
    </>
  )
}

export default Pokemon;

{/* <S.SearchOpen
  placeholder="Search"
  onFocus={() => console.log('Search')}
>
</S.SearchOpen>
  <EvilIcons name="search" size={24} color="#15507d" /> */}