import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Images from '@/assets/images/Images';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Homepage = () => {
  const navigation = useNavigation();
  const gotoSearch = () => {
    navigation.navigate('search');
  };
  return (
    // <LinearGradient colors={['black', 'white']} style={styles.container}>
    <View style={styles.container}> 
        <Text style={styles.text}>Hello,Welcome</Text>
        
        <View style={styles.imagcontainer} >
        
         <Image source={Images.Wellcome()}  style={styles.img}/>
        </View>
        
        < LinearGradient colors={['black', 'white']} style={styles.searchcontainer} ><TouchableOpacity style={styles.searchcontainer} onPress={gotoSearch} >
    
    <AntDesign name="search1" size={24} color="Black" />
     <View style={styles.search}> 
     <Text style={styles.searchtxt}>Search</Text>
     </View>
    
    </ TouchableOpacity></LinearGradient>

        
        
     
    </View>
    // {/* </LinearGradient> */}
  )
}

export default Homepage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    imagcontainer: {
        flex: 1,
        flexDirection: 'row',


    
        // alignItems: 'center',
      },
      img: {
        width:410 ,
        height: 300,
        borderRadius: 30,
        margin: 10,
        
       
      },
      text: {    
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginBottom: 20,
        // textAlign: 'center',
      },
      searchcontainer: {
        margin: 10,
        width: 420,
        height: 70,
        flexDirection: 'row',
        // backgroundColor: '#696969',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 10 },
        padding: 15,
        alignSelf: 'center',
        
        borderColor: 'black',
      
      },
      search: {
        flexDirection: 'row',
      },
      searchtxt: {
        fontSize: 20,
        color: 'Black',
        marginLeft: 10
      }
     
})