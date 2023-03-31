import React, { useState } from 'react';
import { Text } from 'react-native';
import * as S from './styles';

const Search = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <S.Container>
        <S.Input
          type="text"
          placeholder="Name or number"
          value={value}
          onChangeText={text => setValue(text)}
          // keyboardType="url"
          inputMode="search"
          clearTextOnFocus
          // enablesReturnKeyAutomatically={true}
          />
        <S.SendIcon />
      </S.Container>
    </>
  );

}

export default Search;