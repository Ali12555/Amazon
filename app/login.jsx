import { useNavigation, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import { LinearGradient } from 'expo-linear-gradient';
import { Login } from '../constants/api';
const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
const nav =useRouter();
  const goToHome = () => {
const data={
    Email:email, //      ((حسب (المدخل) المستصفح name)=(phone حسب السيرفر )
  Password:password //  ((حسب (المدخل) المستصفح password)=(password حسب السيرفر )
}
Login(data)   //(نداء للعمليه login وتعوض ال data بمكان ال body )
.then((response)=>{
  console.log(response);


  if (response.success==true) // اذا الاسم والسسما صحيحه وموجوده انتقل الى الصفحه الرئيسيه 
  
    nav.push('/Home');
  
   
})
      .catch((error) => {      //اذا في مشكله بالسيرفر او الاتصال بالسيرفر 
        console.error('Login error:', error.message);  
        alert('اذا في مشكله بالسيرفر او الاتصال بالسيرفر .');
      }
    );
  };
  
const goToRegister = () => {
  nav.push('/NewLogin');
};


  return (
  <LinearGradient colors={['black', 'white']} style={styles.container}>
    <View >
      <View style={styles.titlecontainer}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}> Pleace enter your email and password</Text>
      </View>
    <View style={styles.inputcontainer}>
      <View style={styles.Iconinput}>
    <Fontisto name="email" size={24} color="white" />
    </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={'white'}
       
      />
    </View>
    <View style={styles.inputcontainer}>
      <View style={styles.Iconinput}>
      <AntDesign name="lock" size={24} color="white" /> 
      </View>

      <TextInput
        style={styles.input}
        placeholder=" Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={'white'}
      
      />
      </View>
     <View style={styles.log}>
       <TouchableOpacity onPress={goToHome} >
        <Text style={styles.logtxt}>Sign in</Text>
       </TouchableOpacity>
       
           </View>
     <TouchableOpacity  onPress={goToRegister} > 
      <View style={styles.txtcontainer}>
        <Text style={styles.txt}>Creat new account</Text>
        </View>
     
     </TouchableOpacity>
     <View style={styles.Iconscontainer}>
      <View style={styles.icon}>
     <TouchableOpacity>
     <FontAwesome5 name="facebook" size={24} color="skyblue" />
     </TouchableOpacity>
     </View>
     <View style={styles.icon}>
     <TouchableOpacity>
     <AntDesign name="google" size={24} color="#ff4500" />
     </TouchableOpacity>
     </View>
     <View style={styles.icon}>
    < TouchableOpacity>
    <AntDesign name="twitter" size={24} color="skyblue" />
    </TouchableOpacity>
     </View>
     
      </View>
    </View>
    </LinearGradient>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
   
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  
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
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'FLEX-end',
    marginBottom: 10,
  },
  txtcontainer: {
    alignItems: 'center',
    padding: 20,
    
  },
  log: {
    height: 70,
    width: "100%",
    backgroundColor: 'white',
justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 50,
  },
  logtxt: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
  txt :{
    fontSize: 18,
    color: 'Black',
    textAlign: 'FLEX-end',
    marginBottom: 10,

  },
  titlecontainer: {
    alignItems: 'center',
   justifyContent: 'center',
   padding: 20
  },
  Iconscontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'space-between',
   
 
  },
  icon: {
    marginHorizontal: 10
  
  },
  inputcontainer: {

 flexDirection: 'row',
 backgroundColor: 'rgba(255, 255, 255, 0.39)',
 alignItems: 'center',
 borderRadius: 50,
marginBottom: 10,
height: 70,
width: "100%",
paddingLeft: 15
  },
  Iconinput: {
   
  }

  
});

export default login;


