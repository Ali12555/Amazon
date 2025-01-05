import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'


import { catagoryClothes, data } from './../../constants/Data';
import { useNavigation } from 'expo-router';
import Homepage from './../../components/homepage';



const Home = () => {
// useEffect(() => {
//     navigation.setOptions({headerShown: false})    
//   }, [])


  const navigation = useNavigation();
  const gotochosing = (data) => {
    const sendData = JSON.stringify(data);
    navigation.navigate('choosingItem', { data: sendData });
  }

  const renderData = () => {

    const renderProudacts = (data) => {
      return (
        data.map((item, index) => (

          <TouchableOpacity key={index} onPress={() => gotochosing(item.data)} >
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
    <ScrollView style={styles.container}>
     <Homepage />

      {renderData()}
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  catagory: {
    // flex: 1,
    // flexDirection: 'row',
    height: 250,
    margin: 10,
    // backgroundColor: "#fff"
    borderWidth: 2,
    // borderColor: "#fff"
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

})