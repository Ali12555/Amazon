import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const Shopingpage = () => {
    const { params } = useRoute();
    const data = JSON.parse(params?.data || {});
    console.log(params);


    return (
        <View style={styles.container}>
            <Image source={data.img}style={styles.haderimage}/>
            <Text style={styles.text}>{data.name}</Text>
        </View>
    )
}

export default Shopingpage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    haderimage: {
        width: 400,
        height: 400,
        borderRadius: 30,
        margin: 10
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