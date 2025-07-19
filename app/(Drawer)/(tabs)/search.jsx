import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { data } from '../../../constants/Data'
import Card from '../../../components/card'
// import Search from './search';

const Search = () => {

  const [search, setsearch] = useState('');

  const renderItems = () => {
    //card
    const filteredProducts = []

    data.forEach((catagory) => {
      if (catagory && catagory.data && catagory.data.length > 0) {
        const cateData = catagory.data
        cateData.forEach(type => {
          if (type && type.data && type.data.length > 0) {
            const typeData = type.data
            typeData.forEach(product => {
              product.name.toLowerCase().includes(search.toLowerCase()) ? filteredProducts.push(product) : null
            })
          }
        })
      }
    })
    return filteredProducts.map((product, index) => <Card key={index} img={product.img} name={product.name} price={product.price} />)
  }
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
      <ScrollView>
        {renderItems() || null}
      </ScrollView>
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