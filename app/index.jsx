import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import Images from '@/assets/images/Images';
import { useNavigation } from 'expo-router';
import ScreenNames from './ScreenNames';


const index = () => {

const nav = useNavigation()

  useEffect(() => {
    nav.setOptions({headerShown: false})  
    
    setTimeout(() => {

       nav.navigate(ScreenNames.home)
    }, 1000);
} , [])


  return (
    <View style={styles.container}>
      <Image source={Images.cart()} style={styles.img} />
      {/* <Text style={styles.text}>Hello,Wellcome</Text> */}
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'black'
  },
  img: {
    flex:1 , 
    resizeMode:'contain' , 
    // opacity: 0.6
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }

})
