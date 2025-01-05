import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Images from '@/assets/images/Images';

const Homepage = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hello,Welcome</Text>
        
        <ScrollView style={styles.scrollView} horizontal={true}
        > 
         <Image source={Images.Wellcome()}  style={styles.img}/>
        <Image source={Images.blackcart()}  style={styles.img}/>
        <Image source={Images.purplecart()}style={styles.img} />
       
        <Image source={Images.shopingcart()} style={styles.img} />

        </ScrollView>
        
        
     
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    scrollView: {
        flex: 1,
        flexDirection: 'row',

    
        // alignItems: 'center',
      },
      img: {
        width: 350,
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
      }
})