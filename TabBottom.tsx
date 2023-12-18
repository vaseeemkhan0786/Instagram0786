import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { NavigationContainer,  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from './Screen/Search';
import Reel from './Screen/Reel';
import Profile from './Screen/Profile';
import Vaseemkhan from './Screen/Vaseemkhan';
import Add from './Screen/Add';
import Icon from 'react-native-vector-icons/Ionicons';
import OpenScreen from './Screen/OpenScreen';

const Tab = createBottomTabNavigator();
const App = () => {

  useEffect(  ()=>{
    const useName=()=> {
      return OpenScreen;
    }
    useName();
  },[])
  return (
    <View>
      <ScrollView >
      <Vaseemkhan />
      </ScrollView>
      <View style={styles.Tab}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name='an' component={Vaseemkhan}
              options={{
                tabBarIcon: ({ focused }) => {
                return(
                  
                    <Image source={{uri:'https://i.pinimg.com/originals/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg'}}
                    style={{width:25,height:25,tintColor:focused?'grey':'black'}}
                    />
                  
                ) }
              }} />
            <Tab.Screen name='ba' component={Search}
              options={{
                tabBarIcon: ({ focused }) => {
                return(
                  
                   <Image source={{uri:'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png'}}
                   style={{width:25,height:25,tintColor:focused?'grey':'black'}}
                    />
                  
                )
                }
              }} />
            <Tab.Screen name='ca' component={Reel}
              options={{
                tabBarIcon: ({ focused }) =>{
                  return (
                    <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/992/992651.png'}}
                    style={{width:25,height:25,tintColor:focused?'grey':'black'}}
                    />
                  
                )}
              }} />
            <Tab.Screen name='Add' component={Add}
              options={{
                tabBarIcon: ({ focused }) => {
                return(
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX25evhc4QyojT1o8dZRcQcJC1bR6H3mR6FQsD0zs&s'}}
                    style={{width:25,height:25,tintColor:focused?'grey':'black'}}
                    />
                )
              }
              }} />
            <Tab.Screen name='a' component={Profile}
              options={{
                tabBarIcon: ({ focused }) => {
                  return(
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp22OSJupXROvk_xljaAXNeG9qqK7G7YmzXw&usqp=CAU'}}
                    style={{width:25,height:25,tintColor:focused?'grey':'black'}}
                    />
                  )
                  }
              }} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View >
  )
}
const styles = StyleSheet.create({
  Tab: {
    position: 'absolute',
    top: 710,
    left: 0,
    right: 0
  }
})

export default App