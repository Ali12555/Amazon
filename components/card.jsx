import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';




const Card = (props) => {
    const nav = useNavigation();
    const gotoshoping = () => {
        console.log(props);

        const sendData = JSON.stringify({
            img: props.img,
            name: props.name,
            price: props.price
        });
        nav.navigate('Shopingpage', { data: sendData });

    }



    return (
        <TouchableOpacity onPress={() => gotoshoping(props.data)} style={styles.container}>

            <Image source={props.img} style={styles.icon} />
            <View style={styles.textcontainer}>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.price}>{props.price + '₪'}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 40,
        margin: 4,
        backgroundColor: 'black'

    },
    icon: {
        width: 150,
        height: 150,
        borderRadius: 30,
        margin: 30
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20,
        color: 'white'

    },
price: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    color: 'white'    
},
    textcontainer: {
       
    
        flex : 1,
        alignItems: 'center',
        justifyContent: 'space-between',
          
    }
})