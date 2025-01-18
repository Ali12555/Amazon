import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Settings = () => {
  return (
    <LinearGradient colors={['black', 'white']} style={styles.container}>
    <View>
      <Text>Settings</Text>
    </View>
    </LinearGradient>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})