import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import  ApiData  from './ApiData';
var filter = require('lodash.filter');


const Search = () => {
  const [filteredData, setFilteredData] = useState(ApiData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);

    const filteredItems = ApiData.filter((item) =>  {
      item.fname.toLowerCase().includes(text.toLowerCase())
    }
    );
    setFilteredData(filteredItems);
  };


  const renderItem = ({ item }) => {
    return (
      <View style={styles.thapa}>
        <TouchableOpacity>
          <Image style={styles.image} source={item.image} />
        </TouchableOpacity>
        <View>
          <Text style={styles.imagefname}> {item.fname} </Text>
          <Text style={styles.imageemail}> {item.email} </Text>
        </View>
         
      </View>
    )
  }
  return (
    <View>
      <Text style={styles.vk}>Search </Text>
      <TextInput style={[styles.vaseem,]} placeholder='search' placeholderTextColor={'black'}
       value={searchQuery} onChangeText={handleSearch} />
      <FlatList data={ApiData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem} />
    </View>
  )
  }
const styles = StyleSheet.create({
  vaseem: {
    fontSize: 20,
    marginHorizontal: 14,
    borderWidth: 1,
    borderRadius: 10,
    fontWeight: '300',

  },
  vk: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'contain',
    marginLeft: 12,
    marginTop: 10,
  },
  imagefname: {
    fontSize: 20,
    marginLeft: 7,
    marginTop: 15,
    color: 'black',
    fontWeight: '700'
  },

  imageemail: {
    fontSize: 17,
    marginLeft: 7,
    color: 'grey',
    fontWeight: '600'
  },
  thapa: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  }

})

export default Search

