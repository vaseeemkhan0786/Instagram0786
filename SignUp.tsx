import { StyleSheet, Text, TextInput, TouchableOpacity, View,ScrollView,Button,} from 'react-native'
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState(false);
  const [SetData, setSetData] = useState(false);

  const Submit = async () => {
   // const valid = Validation();
    // if (valid) {
      try {
        await AsyncStorage.setItem('NAME', JSON.stringify(name));
        await AsyncStorage.setItem('USENAME', JSON.stringify(username))
        await AsyncStorage.setItem('EMAIL', JSON.stringify(email))
        await AsyncStorage.setItem('PASSWORD', JSON.stringify(password))
        navigation.navigate('Home')

      } catch (error) {
        console.log('error in async')
      }
    // }else{
    //   console.log('null')
    // }
  }

 const RedItem = async() =>{
   const name =await AsyncStorage.getItem('NAME');
   const user =await AsyncStorage.getItem('USERNAME');
   const email =await AsyncStorage.getItem('EMAIL')
   const pass =await AsyncStorage.getItem('PASSWORD')
   console.log(name+ ' ' +username+ ' ' +email+ ' ' +pass );
 }

  const Validation = () => {
    if (name != '') {
      setValidation(true)
    } else {
      setValidation(false)
    }

    if (username != '') {
      setValidation(true)
    } else {
      setValidation(false)
    }

    if (email != '') {
      setValidation(true)
    } else {
      setValidation(false)
    }

    if (password != '') {
      setValidation(true)
    } else {
      setValidation(false)
    }
  }
  return (
    <View>
       <ScrollView>
      <Text style={styles.Insta} >Instagram</Text>
      <Text style={styles.Up}> Sign up to see photos and videos </Text>
      <Text style={styles.Up}> from your friends </Text>
      <View style={styles.Inp}>
        <TouchableOpacity
          style={styles.touch}>
          <Text style={styles.touchable}>Log in with Facebook</Text>
        </TouchableOpacity>
        <View style={styles.lines}>
          <TextInput style={styles.line} />
          <Text style={styles.or}>OR</Text>
          <TextInput style={styles.line} />
        </View>
        <View style={styles.InputValue}>
          <TextInput style={styles.Input} placeholder='Fullname' value={name} onChangeText={(name) => setName(name)} />
          {
            name == '' && <Text style={{ color: 'red', fontSize: 20, marginLeft: 20, }}>enter correct value </Text>
          }
          <TextInput style={styles.Input} placeholder='username' value={username} onChangeText={(username) => setUsername(username)} />
          {
            username == '' && <Text style={{ color: 'red', fontSize: 20, marginLeft: 20, }}>enter correct value </Text>
          }
          <TextInput style={styles.Input} placeholder='Email' value={email} onChangeText={(email) => setEmail(email)} />
          {
            email == '' && <Text style={{ color: 'red', fontSize: 20, marginLeft: 20, }}>enter correct value </Text>
          }
          <TextInput style={styles.Input} placeholder='password' value={password} onChangeText={(password) => setPassword(password)} />
          {
            password == '' && <Text style={{ color: 'red', fontSize: 20, marginLeft: 20, }}>enter correct value </Text>
          }
        </View>
        <View>
          <TouchableOpacity
            style={styles.match}
            onPress={() => Submit()}  >
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}> Sign Up </Text>
          </TouchableOpacity>
        </View>
        <Button title ='getData' onPress={RedItem}  />
        <View>
          <Text style={styles.matchs}>By signing up,you agree to our</Text>
          <Text style={styles.matchren}>Terms & Privacy Policy </Text>
        </View>
      </View>
     </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  Insta: {
    fontSize: 30,
    fontFamily: '',
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
    fontWeight: '900',
  },
  match: {
    marginTop: 15,
    padding: 12,
    marginHorizontal: 15,
    borderRadius: 8,
    backgroundColor: 'blue',
  },
  matchs: {
    marginTop: 15,
    marginHorizontal: 15,
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'capitalize',
    color: 'black',
    textDecorationLine: 'underline',
  },
  matchren: {
    marginHorizontal: 15,
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'capitalize',
    color: 'black',
    textDecorationLine: 'underline'
  },
  Up: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    lineHeight: 27,
  },
  Inp: {
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 8,

  },
  touch: {
    backgroundColor: 'blue',
    padding: 8,
    marginHorizontal: 15,
    borderRadius: 8,
  },
  touchable: {
    textAlign: 'center',
    fontSize: 23,
    fontFamily: '',
  },
  line: {
    borderBottomWidth: 1,
    width: 150,
    marginLeft: 10,
  },
  lines: {
    flexDirection: 'row',
    height: 50
  },
  or: {
    textAlign: 'center',
    fontSize: 23,
    marginHorizontal: 8,
    marginTop: 25
  },
  Input: {
    fontSize: 22,

    marginHorizontal: 15,
    marginTop: 10,
    borderWidth: 1,
    color: 'black',
    borderRadius: 10,
  },
  InputValue: {
    marginTop: 20,

  }
});

export default SignUp

