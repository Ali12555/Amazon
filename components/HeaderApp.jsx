import { Dimensions, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'

import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs, useNavigation } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const size = Dimensions.get('window');

const HeaderApp = ({ options, navigation, route }) => {
    // console.log("navigation", navigation);

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

    const isAndroid = () => {
        return Platform.OS === 'android';
    }

    return (

        <View style={[styles.container, { paddingTop: !isAndroid() ? 50 : 0 }]}>

            <TouchableOpacity
                onPress={() => handelLeftButtonPress()}
            >
                <Ionicons name={navigation.canGoBack() ? "arrow-back-outline" : "menu"} size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={addprees} style={styles.iconcontainer} >
                {isAndroid() ? <AntDesign name="user" size={30} color="white" style={styles.user} /> : <EvilIcons name="user" size={50} color="white" />}
            </TouchableOpacity>

        </View>


    )
};


export default HeaderApp

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        alignItems: 'center',


    },
    iconcontainer: {
    },
    user: {
        borderWidth:2,
        borderColor:'white',
        borderRadius:50
    }


});