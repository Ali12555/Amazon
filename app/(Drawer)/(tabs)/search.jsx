import { StyleSheet, Text, View , TextInput} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
// import Search from './search';

const Search = () => {

  const [search, setsearch] = useState('');

  return (
    <LinearGradient colors={['black', 'white']} style={styles.container}>
  <TextInput 
  style={styles.input}
  placeholder='search'
  value={search}
  onChangeText={setsearch}
  placeholderTextColor={'white'}
  textAlign='left'
  />
    </LinearGradient>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 10,
    color: 'white'

  }
})