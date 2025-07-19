import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

import { catagoryClothes, data, jackets, dataclothes } from '../../../constants/Data';
import { useNavigation } from 'expo-router';
import Homepage from '../../../components/homepage';
import { LinearGradient } from 'expo-linear-gradient';



const size = Dimensions.get('window');

const Home = () => {


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

          <TouchableOpacity style={styles.imgcontainer}
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
    paddingBottom: 100
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
    width: size.width*0.4,
    height: size.height*0.2,
    borderRadius: 70,
    margin: 10,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
  ,
  imgcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    margin: "2%",
    borderRadius: 30,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 10 },
  }
  ,
 


})