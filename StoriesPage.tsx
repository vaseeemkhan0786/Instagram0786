import {
  StyleSheet, Text, View, TouchableOpacity,Modal,
  Linking, Image, Dimensions, ScrollView
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Iconicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import SaveModal from './SaveModal';
//import Modal from "react-native-modal";

const StoriesPage = () => {
  const navigation = useNavigation();
  const [name, setName] = useState(0);
  const [count, setCount] = useState(false);
  const [heart, setHeart] = useState(false);
  const [save,setSave] =useState(true)
  const [add,setAdd] =useState(0)
  const [visible, setVisible] = useState(true);
  const[click,setClick] =useState(false)
  const LikeValue=()=>{
      if(count){
          setName(name)
      }else{
        setName(name+1)
      }
  }
  

  //  if(add !=0){
  //   setSave(true)
  //  }
  //   } else{
  //     setSave(true)
  //  }
  // }
//   const LikeValue2=()=>{
//     if(!count ==true){
//         setName(name+1)
//     }else{
//       setName(name)
//     }
// }
// const LikeValue3=()=>{
//   if(count !=true){
//       setName(name+1)
//   }else{
//     setName(name)
//   }
// }

  return (
    <View>
      <View>
        <View style={styles.imageFlex}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.instagram.com/iamsrk/?hl=en')}>
            <Image
              style={styles.image}
              source={require('./image/srk3.jpg')} />
          </TouchableOpacity>

          <Text style={styles.imageText}> srk </Text>

          <TouchableOpacity style={styles.right}
            onPress={() => navigation.navigate('ThreeDotModal')}>
            <Iconicons name='ellipsis-vertical' size={30} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled>
          <Image style={styles.imagesrk}
            source={require('./image/srk2.jpg')} />
          <Image style={styles.imagesrk}
            source={require('./image/allufamily.jpg')} />
          <Image style={styles.imagesrk}
            source={require('./image/alluarjun.webp')} />
            <Modal visible={visible}
                animationType='slide'
                onRequestClose={() => setVisible(false)} >
                <View style={styles.Modal}>

                    <TouchableOpacity>
                        <View style={styles.ImageView}>
                            <Image style={styles.Image} source={require('./image/srk1.webp')} />
                            <Text style={styles.Text}>save to collection</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </Modal>
        </ScrollView>
        <View style={styles.nameIcon} >
          <TouchableOpacity
            onPress={LikeValue}>
            <Iconicons name='heart-outline' size={33}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('CommentModal')}
            style={styles.nameIcons}>
            <Iconicons name='chatbubble-outline' size={30} color={'grey'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('RequestSent')}
            style={styles.nameIcons} >
            <Iconicons name='paper-plane' size={30} color={'grey'} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.nameIconPlace} onPressIn={()=>setVisible(!visible)}>
            <Iconicons name='bookmark-outline' size={30}  />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.likes}>{name} likes</Text>
        </TouchableOpacity>

        <View style={styles.profile_detial}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.instagram.com/ertugrul__ghazi__fan/')}>
            <Text style={styles.namesrk}>ertugul</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textcom}>
              it's best perfomance .i have seen .it's ok
              srk is good looking on this patchure more read..
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.views}> View all comments </Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.imageFlex}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.instagram.com/iamsrk/?hl=en')}>
            <Image
              style={styles.image}
              source={require('./image/srk3.jpg')} />
          </TouchableOpacity>

          <Text style={styles.imageText}> srk </Text>

          <TouchableOpacity style={styles.right}
            onPress={() => navigation.navigate('ThreeDotModal')}>
            <Iconicons name='ellipsis-vertical' size={30} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled>
          <Image style={styles.imagesrk}
            source={require('./image/akbar.jpeg')} />
          <Image style={styles.imagesrk}
            source={require('./image/Abdul-kalam.jpg')} />
          <Image style={styles.imagesrk}
            source={require('./image/aman.jpg')} />
             <Modal visible={visible}
                animationType='slide'
                onRequestClose={() => setVisible(false)} >
                <View style={styles.Modal}>

                    <TouchableOpacity>
                        <View style={styles.ImageView}>
                            <Image style={styles.Image} source={require('./image/ertugul.jpg')} />
                            <Text style={styles.Text}>save to collection</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </Modal>
        </ScrollView>
        <View style={styles.nameIcon} >
          <TouchableOpacity
            onPress={LikeValue}>
            <Iconicons name='heart-outline' size={33} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Search')}
            style={styles.nameIcons}>
            <Iconicons name='chatbubble-outline' size={30} color={'grey'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('RequestSent')}
            style={styles.nameIcons}>
            <Iconicons name='paper-plane' size={30} color={save==false?'black':'grey'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>setVisible(!visible)}
            style={styles.nameIconPlace}>
            <Iconicons name='bookmark-outline' size={30} color={'grey'} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.likes}>{name} likes</Text>
        </TouchableOpacity>

        <View style={styles.profile_detial}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.instagram.com/ertugrul__ghazi__fan/')}>
            <Text style={styles.namesrk}>ertugul</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textcom}>
              it's best perfomance .i have seen .it's ok
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.textcoms}>
            srk is good looking on this patchure more read..
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.views}> View all comments </Text>
        </TouchableOpacity>
      </View>


      <View>
        <View style={styles.imageFlex}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.instagram.com/ertugrul__ghazi__fan/')}>
            <Image
              style={styles.image}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSl6kFzkpyZjCaEkpWsWx6px1dnc-hzWb0Bg&usqp=CAU' }} />
          </TouchableOpacity>
          <Text style={styles.imageText}> ertugul ghazi </Text>

          <TouchableOpacity style={styles.right}
            onPress={() => navigation.navigate('ThreeDotModal')}>
            <Iconicons name='ellipsis-vertical' size={30} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled>
          <Image style={styles.imagesrk}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSl6kFzkpyZjCaEkpWsWx6px1dnc-hzWb0Bg&usqp=CAU' }} />

          <Image style={styles.imagesrk}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4_Lo6kq1YIv9tr57f0DhBTLYdZSPStqVoA&usqp=CAU' }} />

          <Image style={styles.imagesrk}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYo_JZmxWZM7QpqupDXUpzZDiJIGHKuTvHBWHuwr9H0EmIh3JkMx8AQ4MT4ZFPv5mjT4&usqp=CAU' }} />
              <Modal visible={visible}
                animationType='slide'
                onRequestClose={() => setVisible(false)} >
                <View style={styles.Modal}>

                    <TouchableOpacity>
                        <View style={styles.ImageView}>
                            <Image style={styles.Image} source={require('./image/vijay.jpeg')} />
                            <Text style={styles.Text}>save to collection</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </Modal>
        </ScrollView>
        <View style={styles.nameIcon} >
          <TouchableOpacity  onPress={LikeValue} >
            <Iconicons name='heart-outline' size={33} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.nameIcons}
          onPress={() => navigation.navigate('RequestSent')}>
            <Iconicons name='chatbubble-outline' size={30} color={'grey'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.nameIcons}
          onPress={() => navigation.navigate('RequestSent')}>
            <Iconicons name='paper-plane' size={30} color={'grey'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.nameIconPlace}
          onPress={() =>setVisible(!visible)}>
            <Iconicons name='bookmark-outline' size={30} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.likes}>  likes</Text>
        </TouchableOpacity>

        <View style={styles.profile_detial}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/ertugrul__ghazi__fan/')}>
            <Text style={styles.namesrk}>ertugul ghazi</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.textcom}>
              it's best perfomance .i have seen {'\n'} it is ok
              srk is good looking on this patchure more read..
            </Text>
            <Text style={styles.views}> View all comments </Text>
          </View>
        </View>
      </View>

    </View>
  )
}
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  imageText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginLeft: 9
  },
  imageFlex: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  right: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  imagesrk: {
    width: width,
    height: 280,
    marginTop: 10,
    resizeMode: 'cover',
  },
  nameIcon: {
    width:width,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10
  },
  nameIcons: {
    marginLeft: 10
  },
  nameIconPlace: {
    marginLeft: 200,
  },
  Modal: {
    width: '100%',
    height: 40,
    backgroundColor:'grey'
},
ImageView:{
    flexDirection:'row',
     justifyContent:'space-between',
     position:'relative',
     bottom:0,
     left:0,
     right:0,
     backgroundColor:'white',
     width:'100%',
},
Image: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
   
},
Text: {
    fontSize: 17,
    color: 'red',
    marginTop:7
},
  likes: {
    fontSize: 16,
    color: 'black',
    marginTop: 8,
    marginStart: 10,
    fontWeight: '600'
  },

  namesrk: {
    fontSize: 18,
    marginTop: 3,
    color: 'black',
    fontWeight: '600',
    marginLeft: 12
  },
  textcom: {
    fontSize: 14,
    marginTop: 2,
    color: 'black',
    fontWeight: '500',
    marginLeft: 8,
    justifyContent: 'flex-start'

  },
  textcoms: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    marginLeft: 12
  },
  views: {
    fontSize: 15,
    marginTop: 8,
    color: 'black',
    fontWeight: '700',
    marginLeft: 12,
  },

  profile_detial: {

  }

})

export default StoriesPage