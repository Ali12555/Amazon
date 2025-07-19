import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import StoreContext from '../../../context/storeContext';
import Card from './../../../components/card';


const Cart = () => {
  const { cart, setCart } = useContext(StoreContext)
  const renderItem = () => {
    return cart.map((item, index) => (
      <Card key={index} img={item.img} name={item.name} price={item.price} amount={item.amount} />
    ))
    // <View key={index}>
    //   <Text>
    //     {item.name}
    //   </Text>
    // </View>
  }
  return (
    <LinearGradient colors={['black', 'white']} style={styles.container}>
      <View>
        <Text style={{ fontSize: 50, color: 'red' }}></Text>
        {renderItem()}
      </View>
    </LinearGradient>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})