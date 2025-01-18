import { StyleSheet, Text, View, Image, TouchableOpacity , ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { namespace } from './../.expo/types/router.d';
import { LinearGradient } from 'expo-linear-gradient';

const Shopingpage = () => {
    var amountValue = 0;
    const [Amount, setAmount] = useState(0);
    const { params } = useRoute();

    const data = JSON.parse(params?.data || {});
    console.log("data", data);

    const onPlusPress = () => {
        setAmount(Amount + 1);
        amountValue = Amount + 1;
    };
    const onMinusPress = () => {
        setAmount(Amount - 1);
        amountValue = Amount - 1;
    };
    useEffect(() => {

    }, [Amount]);


    return (
        <LinearGradient colors={['black', 'white']} style={styles.container}>
        <ScrollView>
            <Image source={data.img} style={styles.haderimage} />
            <Text style={styles.text}>{data.name}</Text>
        <LinearGradient colors={['black', 'white']} style={styles.order}>
            <  View style={styles.order}>
               
                    <Text style={styles.price}>{data.price + '₪'}</Text>
                <View style={styles.amountcontainer}>
                    <AntDesign name="pluscircleo" size={35} color="white" onPress={() => onPlusPress()} />
                    <Text style={styles.amount}>{Amount}</Text>
                    <AntDesign name="minuscircleo" size={35} color="white" onPress={() => onMinusPress()} />

                </View>

            </View>
        </LinearGradient>

            <TouchableOpacity style={styles.orderbtncontainer}>
                <Text style={styles.orderbtn}>Buy It Now</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.Addbtncontainer}>
                <Text style={styles.Addorder}>Add To Cart</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.Addbtncontainer}>
                <Text style={styles.Addorder}>Add To WishList</Text>

            </TouchableOpacity>

            <Text style={styles.txt}> Information: This app is an e-commerce platform that allows users to browse and 
                purchase a variety of products. It features a user-friendly interface where customers
                 can explore different categories, such as electronics, clothing, and home goods. The 
                 app offers secure payment options and efficient delivery services to ensure a smooth 
                 shopping experience. Users can track their orders in real time and receive notifications 
                 about discounts and special offers. With 
                a focus on convenience, the app aims to provide an easy and enjoyable 
                shopping experience for all users</Text>



        </ScrollView>

        </LinearGradient>
    )
}

export default Shopingpage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        // flexDirection: 'row',
    },
    haderimage: {
        width: "%100",
        height: 400,
        borderRadius: 30,
        margin: 10
    },
    text: {
            padding: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
       paddingLeft: 20,
        // textAlign: 'center',
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginBottom: 20,
        // textAlign: 'center',
    },
    order: {
        width: 420,
        flexDirection: 'row',
       
        justifyContent: 'space-between',
        alignItems: 'C',
        alignSelf: 'center',
        borderRadius: 30,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 10 },
        marginBottom: 20



    },

    amountcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
        padding: 5





    },
    amount: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        padding: 10
    },
    orderbtn: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
      
    
    },
    orderbtncontainer: {
        width: '100%',
        height: 60,
        backgroundColor: '#1e90ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#1e90ff',
        borderRadius: 30,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 10 },
    },
    Addbtncontainer: {
       marginTop:10,
        width: '100%',
        height: 60,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#1e90ff',
        borderRadius: 30,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 10 },
    },
    Addorder: {
        fontSize: 20,
        
        color: '#1e90ff'
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 50,
        marginBottom: 20,
        textAlign: 'center',
    },


})