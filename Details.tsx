import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native'
import React from 'react'

const Details = () => {
  return (
    <View>
   <Text style={styles.imageText}>Add your story </Text>
      
      <TouchableOpacity style={styles.image}>
        <Image  source={require('./image/228.jpg')}/>
      </TouchableOpacity >

      <TouchableOpacity style={styles.image}>
        <Image  source={require('./image/228.jpg')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.image}>
        <Image  source={require('./image/228.jpg')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.image}>
        <Image  source={require('./image/228.jpg')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.image}>
        <Image  source={require('./image/228.jpg')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.image}>
        <Image  source={require('./image/228.jpg')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.image}>
        <Image  source={require('./image/228.jpg')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.image}>
        <Image  source={require('./image/228.jpg')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.image}>
        <Image  source={require('./image/228.jpg')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.image}>
        <Image  source={require('./image/228.jpg')}/>
      </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    image:{
      width:130,
      height:130,
      borderRadius:1,
      resizeMode:'center',

    },
    imageText:{
       fontSize:23,
       fontWeight:'700',
       textAlign:'center',
       marginTop:8,
    }
})
export default Details