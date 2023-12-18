import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import ReelComponent from './ReelComponent';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Video from 'react-native-video';
import axios from 'axios';


const Reel = () => {
  const VideoRef = useRef()
  const [searchIndex, setSearchIndex] = useState(0);
  const [data, setData] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  const onBuffer = id => {
    console.log("iding", id);
  }

  const onError = (id) => {
    console.log("errors itemm contant", id);
  }

  const ChangeHandleIndex = (index) => {
    setSearchIndex(index);
  }

  //  const Handle=async()=>{
  //    try {
  //     const response=await axios.get('https://gist.github.com/jsturgis/3b19447b304616f18657#file-gistfile1-txt');
  //     const result = response.data;
  //     setData(result);
  //     setIsLoding(true);
  //     console.log(result);
  //    } catch (error) {
  //     console.log('error');
  //    }
  //  }
  // useEffect( ()=>{
  //   Handle();
  //   setIsLoding(false)
  // },[])

  const renderItem = ({ item, index, searchIndex }) => {
    return (
      <View style={{ width: width, height: height, position: 'absolute', }}>
        <TouchableOpacity style={{ width: width, height: height, position: 'absolute' }}>
          <Video source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }}
            ref={VideoRef}
            onBuffer={onBuffer}
            onError={onError}
            repeat={true}
            paused={false}
            muted={false}
            resizeMode={'cover'}
            style={{width:300,height:300,position:'absolute'}} />
             <View>
          <Text>{item.description}</Text>
          <Text>{item.subtitle}</Text>
          <Text>{item.thumb}</Text>
          <Text>{item.title}</Text>
        </View>
        </TouchableOpacity>

      </View>

    )
  }

  return (
    <View style={{ flex: 1, width: width, height: height, position: 'relative' }}>

      <SwiperFlatList
        // showPagination
        data={ReelComponent}
        onChangeIndex={ChangeHandleIndex}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}

      />
    </View>
  )
}
// Later on in your styles..
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 200,
    width: 200,
  },
});

export default Reel;