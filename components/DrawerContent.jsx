import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Images from './../assets/images/Images';



const DrawerContent = (props) => {



    return (
        <View style={styles.DrawerContainer} >
            <ImageBackground style={styles.background} source={Images.background()}>
            <Image source={Images.profile()} style={styles.profile}/>
            <Text style={styles.name}>Ali Naife</Text>
            
            </ImageBackground>
            <DrawerContentScrollView  {...props} style={styles.drawericon}>
                <DrawerItemList  {...props} />
            </DrawerContentScrollView>


        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    DrawerContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    background: {
      height: 250,
        resizeMode: 'cover',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    profile: {
        width: 150,
        height: 150,
        borderRadius: 50
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: 20
    },
    drawericon: {
        backgroundColor: 'white',
    }
    


})