import { StyleSheet, Text, View,
   TouchableOpacity, ScrollView, 
   Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Stories from './Stories';
import StoriesPage from './StoriesPage';

const HomeWrap = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.name}>
        <Text style={styles.nameInsta}>Instagram</Text>

        <TouchableOpacity onPress={()=>navigation.navigate('Notification')}
        style={{ marginLeft: 175 }}>
          <Icon name='heart' size={30} color={'grey'} />
        </TouchableOpacity >

        <TouchableOpacity style={{ marginRight: 10 }} 
         onPress={()=>navigation.navigate('SearchTab')}>
          <Icon name='chatbubble-outline' size={27} color={'grey'} />
        </TouchableOpacity>
      </View>
      <View >
        <Stories />
        <StoriesPage />
      </View>
      
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  nameInsta: {
    fontSize: 25,
    marginLeft: 10,
    color: 'black'
  },
 
})

export default HomeWrap;