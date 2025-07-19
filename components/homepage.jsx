import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { dataclothes } from '../constants/Data';

const size = Dimensions.get('window');


const Homepage = () => {
  const gotochosing = (dataclothes) => {
    if (dataclothes != null) {
      const sendData = JSON.stringify(dataclothes);
      navigation.navigate('Shopingpage', { data: sendData });
    }else{
      alert('no data')
    }
  }
  const renderDataclothes = (dataclothes) => {
    return (

      dataclothes.map((item, index) => (

        <TouchableOpacity
          key={index}
          style={styles.imagcontainer} 
          onPress={() => gotochosing(item)}
          >
          <View style={styles.img}>

            <Image source={item.img} style={styles.img} />

          </View>
          <Text style={styles.txt}>{item.name}</Text>
          <Text style={styles.price}>Price : {item.price} $</Text>
        </TouchableOpacity>
      ))
    )

  }
  const navigation = useNavigation();
  const gotoSearch = () => {
    navigation.navigate('search');
  };
  return (

    <View style={styles.container}>
      <Text style={styles.text}>Hello,Welcome</Text>
      <TouchableOpacity style={styles.searchcontainer} onPress={gotoSearch} >

        <AntDesign name="search1" size={20} color="white" />

        <Text style={styles.searchtxt}>Search</Text>


      </ TouchableOpacity>
      <View style={styles.render}>
        {renderDataclothes(dataclothes)}
      </View>

      {/* <Image source={Images.Wellcome()}  style={styles.img}/> */}

    </View>

  )
}

export default Homepage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingBottom: 100
  },
  imagcontainer: {
    borderWidth: 1,
    borderColor: 'white',
    margin: "2%",
    borderRadius: 30,
    width: '45%',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 10 },

  },
  img: {
    width: "100%",
    height: size.height*0.2,
    borderRadius: 70,
    margin: 10,
    resizeMode: 'contain',
    alignSelf: 'center'



  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
  },

  searchcontainer: {

    margin: 10,
    width: "98%",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 10 },
    padding: 15,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 1,

  },

  searchtxt: {
    fontSize: 19,
    color: 'white',
    marginLeft: 10
  },
  render: {
    width: "100%",
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  txt: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 10



  },
  price: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 10,
    marginBottom: 10



  }
})