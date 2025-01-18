import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

import { catagoryClothes, data, jackets } from '../../../constants/Data';
import { useNavigation } from 'expo-router';
import Homepage from '../../../components/homepage';
import { LinearGradient } from 'expo-linear-gradient';



const Home = () => {
  //   const reanderitem =(jackets)={
  // return(
  //   jackets.
  // )

  //   }
  const searchnav = useNavigation();
  const gotoSearch = () => {
    searchnav.navigate('search')
  }


  const navigation = useNavigation();
  const gotochosing = (data) => {
    const sendData = JSON.stringify(data);
    navigation.navigate('choosingItem', { data: sendData });
  }

  const renderData = () => {

    const renderProudacts = (data) => {
      return (
        data.map((item, index) => (

          <TouchableOpacity
            key={index} onPress={() => gotochosing(item.data)} >
            <Image source={item.img} style={styles.img} key={index} />
          </TouchableOpacity>
        ))
      )
    }


    return (
      data.map((item, index) => (
        <View style={styles.catagory} key={index}>
          <Text style={styles.name}>{item.name}</Text>
          <ScrollView style={styles.scrollview} horizontal={true} >
            {renderProudacts(item.data)}
          </ScrollView>
        </View>
      ))
    )
  }

  // console.log(data, RenderData());


  return (
    <LinearGradient colors={['black', 'white']} style={styles.container}>
   
      <ScrollView >
        <Homepage />

        {renderData()}
      </ScrollView>
    </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  catagory: {
    height: 250,
    margin: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 30,
    margin: 10
  }
  ,


})