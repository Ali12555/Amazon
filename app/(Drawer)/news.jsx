import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const news = () => {
  return (
    <LinearGradient colors={['black', 'white']} style={styles.container}>
    <View>
      <Text style={styles.text}>news</Text>
    </View>
    </LinearGradient>
  )
}

export default news

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 40,
  
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    // textAlign: 'center',
  }
})