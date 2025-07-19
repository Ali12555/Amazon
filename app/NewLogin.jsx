import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import {createUser} from '../constants/api'
import { useNavigation, useRouter } from 'expo-router';

const NewLogin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
// Name
// Password
// Email
const nav=useRouter();

     const regiisterUser=()=>{
    const body={
       Name:name,
        Email:email,
        Password:password  
    }
    console.log(body);
    
    createUser(body)
    .then((Response)=>{
        if(Response.success==true)
    nav.push('/Home');
        else
        alert('משהוא לא תקין')
    })
   }
  return (
    <LinearGradient colors={['black', 'white']} style={styles.container}>
    <View >

      <Text style={styles.title}>Create Your Account</Text>
      <View style={styles.inputcontainer}>
        <View style={styles.Iconinput}>
          <AntDesign name="mail" size={24} color="white" />
          <TextInput
            style={styles.input}
            placeholder='Enter your Email'
            value={email}
            onChangeText={setEmail}
            placeholderTextColor={'white'}
          />
        </View>
        <View style={styles.Iconinput}>
          <AntDesign name="lock" size={24} color="white" />
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={'white'}
          />
        </View>
        <View style={styles.Iconinput}>
          <AntDesign name="phone" size={24} color="white" />
          <TextInput
            style={styles.input}
            placeholder="Enter your Name"
            secureTextEntry
            value={name}
            onChangeText={setName}
            placeholderTextColor={'white'}
          />
        </View>
        <View style={styles.log}>
          <TouchableOpacity onPress={regiisterUser} >
            <Text style={styles.txt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </LinearGradient>



  );
}

export default NewLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 20,
    // justifyContent: 'center',

    backgroundColor: 'black',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    // textAlign: 'center',
    color: 'white'
  },
  input: {
    height: 70,
    width: "90%",
  
    // borderRadius: 50,
  paddingLeft: 15,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  log: {
    height: '70',
    width: "100%",
    backgroundColor: 'white',
    justifyContent: 'center',

    marginBottom: 10,
    borderRadius: 50,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  inputcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  Iconinput: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.39)',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 10,
    height: 70,
    width: "100%",
    paddingLeft: 15,
  }



})