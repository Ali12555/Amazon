import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import TabBar from '../../../components/TabBar';
import { Drawer } from 'expo-router/drawer';
import HeaderApp from '../../../components/HeaderApp';


const _layout = () => {
  return (

    
    <Tabs

      screenOptions={{headerShown: false}}

      tabBar={props => <TabBar {...props} />}>




      <Tabs.Screen
        name='Home'
        options={{ title: 'Home' }}
      />


      <Tabs.Screen
        name='search'
        options=
        {{ title: 'Search' }}
      />
      <Tabs.Screen
        name='profile'
        options={{ title: 'Profile' }}
      />
      <Tabs.Screen
        name='Cart'
        options={{ title: 'Cart' }}
      />


    </Tabs>


  )


}

export default _layout


