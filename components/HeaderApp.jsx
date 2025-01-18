import { StyleSheet, TouchableOpacity, View } from 'react-native'

import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs, useNavigation } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';







const HeaderApp = ({ options, navigation, route }) => {
    console.log("navigation", navigation);
    
    const addprees = () => {
        navigation.navigate('login')
    }
    const handelLeftButtonPress = () => {
        if (navigation?.canGoBack()) {
            navigation.goBack();
        } else {
            navigation.openDrawer();
        }


    }

    return (

        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => handelLeftButtonPress()}
            >
                <Ionicons name={navigation.canGoBack() ? "arrow-back-outline" : "menu"} size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={addprees} style={styles.iconcontainer} >
                <AntDesign name="adduser" size={24} color="white" style={styles.icon} />
            </TouchableOpacity>

        </View>


    )
};


export default HeaderApp

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'flex-end',
        height: 110,
        backgroundColor: 'black',
        justifyContent: 'space-between',
        paddingTop: 50
    },
    iconcontainer: {
        borderWidth: 3,
        borderColor: "white",
        backgroundColor: 'black',
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },



});