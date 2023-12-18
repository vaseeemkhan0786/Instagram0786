import { StyleSheet, Text, 
  View, Image,ScrollView, 
  TouchableOpacity, Linking, Dimensions } from 'react-native'
import React from 'react'

const Stories = () => {
  const{width,height}=Dimensions.get('window');
  return (
     <View>
      <ScrollView  style={styles.images} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
        onPress={()=>Linking.openURL('https://www.instagram.com/accounts/login/?hl=en')} >
      <Image 
       style={[styles.image,{marginLeft:10}]}
       source={require('./image/asad-owaisi.jpg')} />
      <Text  style={styles.imageText}> your story </Text>
      </TouchableOpacity>

      <TouchableOpacity 
       onPress={()=>Linking.openURL('https://www.instagram.com/accounts/login/?hl=en')}>
      <Image 
       style={styles.image}
       source={require('./image/228.jpg')} />
      <Text  style={styles.imageText}> vaseemkhan </Text>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={()=>Linking.openURL('https://www.instagram.com/mr_faisu_07/?hl=en')}>
      <Image 
       style={styles.image}
       source={require('./image/mr.feshu.jpg')} />
      <Text  style={styles.imageText}> mr.feshu </Text>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={()=>Linking.openURL('https://www.instagram.com/ertugrul__ghazi__fan/')}>
      <Image 
       style={styles.image}
       source={require('./image/ertugul.jpg')} />
      <Text  style={styles.imageText}> Ertugul ghazi </Text>
      </TouchableOpacity>

      <TouchableOpacity 
       onPress={()=>Linking.openURL('https://www.instagram.com/allusnehareddy/?hl=en')}>
      <Image 
       style={styles.image}
       source={require('./image/allufamily.jpg')} />
      <Text  style={styles.imageText}>sneha reddy</Text>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={()=>Linking.openURL('https://www.instagram.com/iamsrk/?hl=en')}>
      <Image 
       style={styles.image}
       source={require('./image/srk3.jpg')} />
      <Text  style={styles.imageText}> iamsrk </Text>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={()=>Linking.openURL('https://www.instagram.com/alluarjunonline/?hl=en')}>
      <Image 
       style={styles.image}
       source={require('./image/alluarjun.webp')} />
      <Text style={styles.imageText} >allu arjun </Text>
      </TouchableOpacity>
     </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
   image:{
       width:80,
       height:80,
       borderRadius:80,
       resizeMode:'cover',
       marginTop:5,
       marginLeft:10
   },
 imageText:{
    fontSize:15,
    textAlign:'center',
 },
images:{
  marginTop:10
}
})

export default Stories

