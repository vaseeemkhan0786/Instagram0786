import { StyleSheet, Text, View,TextInput,Image } from 'react-native'
import React from 'react'

const Share = () => {
  return (
    <View>
      <Text style={styles.emailShare}>Share</Text>
      <TextInput style={styles.email}>
        <Image source={{uri:'https://mail.google.com/mail/u/0/'}} />
      </TextInput>
    </View>
  )
}
const styles = StyleSheet.create({
  emailShare:{
    fontSize:20,
    marginLeft:18,
  },
  email:{
fontSize:17,
textAlign:'center',
  }
})

export default Share
