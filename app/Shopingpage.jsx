import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { namespace, useLocalSearchParams } from './../.expo/types/router.d';
import { LinearGradient } from 'expo-linear-gradient';
import storeContext from '../context/storeContext';

const Shopingpage = () => {
    const { cart, setCart } = useContext(storeContext)
    const addtocart = () => {
        let founded = cart.find((item) => item.name === data.name)
        if (founded) {
            founded.amount = (founded.amount || 1) + 1
            setCart([...cart])
        }
        else {
            const newItem = [
                { ...data },

            ]
            setCart([...cart, ...newItem])
        }
    }
    var amountValue = 0;
    const params = useLocalSearchParams();



    const data = JSON.parse(params?.data || {});
    console.log("params: ", data);


    const [Amount, setAmount] = useState(0);
    const [product, setProduct] = useState(data?.colors?.[0] || data)

    // console.log("data>>>", data);

    const onPlusPress = () => {
        setAmount(Amount + 1);
        amountValue = Amount + 1;
    };
    const onMinusPress = () => {
        setAmount(Amount - 1);
        amountValue = Amount - 1;
    };

    const onColorPress = (color) => {
        const selectedProduct = data?.colors?.find(item => item.color === color);
        setProduct(selectedProduct)
    }

    const renderColors = () => {
        return data?.colors?.map((item, index) => (


            <TouchableOpacity style={[styles.coloritem, { backgroundColor: item.color, borderWidth: item.color == product?.color ? 2 : 0 }]} onPress={() => onColorPress(item.color)} key={index} />
        ))
    }
    const rendersizes = () => {
        return product?.sizes?.map((item, index) => (
            <TouchableOpacity ><Text style={styles.size} key={index}>{item}</Text></TouchableOpacity>
        ))
    }

    useEffect(() => {

    }, [Amount]);


    return (
        <LinearGradient colors={['black', 'white']} style={styles.container}>
            <ScrollView>
                <Image source={product?.img} style={styles.haderimage} />
                <Text style={styles.text}>{data?.name}</Text>
                <  View style={styles.order}>

                    <Text style={styles.price}>{data?.price + '₪'}</Text>
                    <View style={styles.amountcontainer}>
                        <AntDesign name="pluscircleo" size={35} color="white" onPress={() => onPlusPress()} />
                        <Text style={styles.amount}>{Amount}</Text>
                        <AntDesign name="minuscircleo" size={35} color="white" onPress={() => onMinusPress()} />

                    </View>

                </View>
                <View style={styles.colorcontainer}>
                    {renderColors()}
                </View>
                <View style={styles.sizecontainer}>
                    {rendersizes()}
                </View>



                <TouchableOpacity style={styles.orderbtncontainer}>
                    <Text style={styles.orderbtn}>Buy It Now</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.Addbtncontainer} onPress={addtocart}>
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
    },
    haderimage: {
        width: "%100",
        height: 400,
        borderRadius: 30,
        margin: 10,
        resizeMode: 'contain'
    },
    text: {
        padding: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        paddingLeft: 20,

    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginBottom: 20,

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
        color: 'white',


    },
    orderbtncontainer: {
        alignSelf: 'center',
        width: '94%',
        height: "5%",
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 10 },
    },
    Addbtncontainer: {
        alignSelf: 'center',
        marginTop: 10,
        width: '94%',
        height: "5%",
        backgroundColor: '',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 10 },
    },
    Addorder: {
        fontSize: 20,

        color: 'white',
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 50,
        marginBottom: 20,
        textAlign: 'center',
    },
    coloritem: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'red',
        margin: 10
    },
    colorcontainer: {
        flexDirection: 'row',
        marginBottom: 10
    },

    sizecontainer: {
        flexDirection: 'row',
    },
    size: {
        width: 50,
        height: 50,
        fontSize: 30,
        fontWeight: 'bold',
        borderWidth: 1,
        color: 'white',
        borderRadius: 20,
        textAlign: 'center',
        borderColor: 'white',
        margin: 7

    }



})