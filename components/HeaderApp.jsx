import { StyleSheet, View } from 'react-native'

import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs, useNavigation } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


const HeaderApp = ({ options, navigation, route, }) => {
    const Navigition = useNavigation();
    const addprees = () => {
        Navigition.navigate('login')
    }
    const goback = () => {
        Navigition.goBack()
    }

    return (

        <View  style={styles.container}>
            
                        <Ionicons name="arrow-back-outline" onPress={()=>goback()} size={24} color="white" />
            <AntDesign name="adduser" size={24} color="white" onPress={addprees} style={styles.icon} />
         
            
        </View>
       

    )
};
export default HeaderApp

const styles = StyleSheet.create({
    container: {
    
        paddingHorizontal: 20,
        alignItems: 'center',
    
        flexDirection: 'row',
        height: 110,
        backgroundColor: 'black',
        justifyContent: 'space-between',
        paddingTop: 50
    },
    icon: {
        // alignSelf: 'flex-end',
    },
 


});