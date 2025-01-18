import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import HeaderApp from '../../components/HeaderApp';

const DarawerLayout = () => {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{ header: (props) => <HeaderApp {...props} /> }}
      // screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="(tabs)"
          options={{
            drawerLabel: 'Home',
            headerTitle: 'Home',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            )
          }} />
        <Drawer.Screen name="news"
          options={{
            drawerLabel: 'news',
            headerTitle: 'news',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="newspaper" size={size} color={color} />
            )
          }} />

      </Drawer>
    </GestureHandlerRootView>
  )
}

export default DarawerLayout

const styles = StyleSheet.create({})