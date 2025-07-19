import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import HeaderApp from '../../components/HeaderApp';
import DrawerContent from '../../components/DrawerContent';
import AntDesign from '@expo/vector-icons/AntDesign';

const DarawerLayout = () => {
  return (
    
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          header: (props) => <HeaderApp {...props} />,
          drawerItemStyle: { backgroundColor: 'white', marginVertical:5 ,borderRadius: 50},
        }}
        drawerContent={(props) => <DrawerContent {...props} />}

    
      >
        <Drawer.Screen name="(tabs)"
          options={{
            drawerLabel: 'Home',
            headerTitle: 'Home',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={"black"} />
            )
          }} />
        <Drawer.Screen name="Settings"
          options={{
          
            drawerLabel: 'Settings',
            headerTitle: 'Settings',
            drawerIcon: ({ color, size }) => (
              <AntDesign name="setting" size={size} color={"black"} />
            )
          }} />

      </Drawer>
    </GestureHandlerRootView>
  )
}

export default DarawerLayout

const styles = StyleSheet.create({})