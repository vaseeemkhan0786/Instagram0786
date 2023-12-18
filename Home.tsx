import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import Reel from './Reel';
import Add from './Add';
import Profile from './Profile';
import HomeWrap from './HomeWrap';
import Search from './Search';

const Tab=createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator >
        <Tab.Screen name="HomeWrap" component={HomeWrap} 
          options={{
            headerShown: false, 
            title:'',
            tabBarIcon: ({ color, size }) => (
              <Icon name='home-outline' color={'black'} size={35} />
            ),
         }}
        />
        
        <Tab.Screen name="Search" component={Search}
         options={{
          headerShown: false, 
          title:'',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={'grey'} size={35} />
          ),
       }} />
        <Tab.Screen name="Add" component={Add} 
         options={{
          headerShown: false,
          title:'',
          tabBarIcon: ({ color, size }) => (
            <Icon name='add-circle-outline' color={'grey'} size={35} />
          ),
       }}/>
        <Tab.Screen name="Reel" component={Reel} 
         options={{
          headerShown: false, 
          title:'',
          tabBarIcon: ({ color, size }) => (
            <Icon name='play-outline' color={'grey'} size={35} />
          ),
       }}/>
       
        <Tab.Screen name="Profile" component={Profile} 
         options={{
          headerShown: false, 
          title:'',
          tabBarIcon: ({ color, size }) => (
            <Icon name='person-circle' color={'grey'} size={35} />
          ),
       }}/>
      
      </Tab.Navigator>
    
  )
}

export default Home