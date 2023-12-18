import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const OpenScreen = () => {
  return (
    <View style={{backgroundColor:'white'}}>
       <View style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:320,}}>
      <Image style={styles.log}
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPS5-11Ik2pD95UGh5ON8zPvgafNG9W2QlGByBhLN1w&s'}}/>
      
      <Text style={styles.logText}> from </Text>
    
      <Image style={styles.logName}
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oNJh3SKbcjAb05WFCvKjzYwfUw59YaBQ8Gth1kRZ-pM71GD2-EslPstWDNfUJhZwWs8&usqp=CAU'}} />
     </View>
    </View>
  )
}
const styles = StyleSheet.create({
   
    log:{
        width:100,
        height:100,
        borderRadius:15,
        resizeMode:'cover',
    },
    
    logName:{
        width:120,
        height:45,
        borderRadius:15,
        resizeMode:'cover',  
        marginTop:4,
        marginLeft:10
    },
    logText:{
        fontSize:20,
        marginTop:210,
    }
})

export default OpenScreen
