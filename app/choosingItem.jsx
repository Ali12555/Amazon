import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { data } from '../constants/Data'
import Card from '../components/card';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
// import { get } from './../hooks/api';

const choosingItem = () => {
    const params = useLocalSearchParams();

    const data = JSON.parse(params?.data || []);
    console.log("data>>>", data);
    // get("/test").then((res) => console.log("the get method ",res)).catch((err) => console.log(err));    
    const rendercards = () => {
        const cards = data.map((item, index) => {
            return (

                <Card key={index}
                    img={item.colors[0].imag}
                    style={styles.img}
                    name={item.name}
                    price={item.price}
                    colors={item.colors}
                //  style={styles.text}
                />


            )
        });
        return cards;

    };
    return (
        <LinearGradient colors={['black', 'white']} style={styles.container}>
            <ScrollView >
                {rendercards()}
            </ScrollView>
        </LinearGradient>
    )
};

export default choosingItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'

    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 30,
        margin: 10,
        resizeMode: 'contain'

    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginBottom: 20,
        // textAlign: 'center',
    },


})