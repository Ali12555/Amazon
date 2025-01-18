import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Profile = () => {
  
  return (
    <LinearGradient colors={['black', 'white']} style={styles.container}>
    <View>
      <Text>P</Text>
    </View>
    </LinearGradient>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
 
})