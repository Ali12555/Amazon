import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { data } from '../constants/Data'
import Card from '../components/card';
import { useRoute } from '@react-navigation/native';

const choosingItem = () => {
    const { params } = useRoute();
    const data = JSON.parse(params?.data || []);

    const rendercards = () => {
        const cards = data.map((item, index) => {
            return (

                <Card key={index}
                    img={item.img}
                    // style={styles.img}
                    name={item.name}
                    price={item.price}
                //  style={styles.text}
                />


            )
        });
        return cards;

    };
    return (
        <ScrollView style={styles.container}>
            {rendercards()}
        </ScrollView>
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