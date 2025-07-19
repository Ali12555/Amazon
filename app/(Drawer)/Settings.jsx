import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


const Settings = () => {
  return (
    <LinearGradient colors={['black', 'white']} style={styles.container}>
    <View>
      <Text style={styles.text}>Settings</Text>
    </View>
    </LinearGradient>
  )
}

export default Settings

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