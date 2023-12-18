import React, { useEffect, useState } from 'react'
import {
  View, Text, TouchableOpacity, Image,
  StyleSheet, ScrollView, Modal
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BioData from './BioData';
import Contact from './Contact';

const Profile = ({ navigation })=>{
   
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0)
  const [follow, setFollow] = useState('Follow');
  const [data, setData] = useState(false);
  const [data2, setData2] = useState(false);
  const [data3, setData3] = useState(false);
  const [data4, setData4] = useState(false);
  const [click,setClick] = useState(false);

  const Follow = () => {
    if (data != true) {

      setFollow(follow);
      setCount2(count + 1);
      setData(true);
      setData2(true);
      setData3(true);
      setData4(true);
    } else {
      setFollow(follow);
      setCount2(count);
      setData(false);
      setData2(false);
      setData3(false);
      setData4(false);
    }
  }
  if(click==false){
    width:'50%'
  }else{

  }

 if( click==true){AntHalfdesign:{
    borderColor: 'black'
    borderBottomWidth:1
   paddingLeft:70
   marginRight:13
  }}else{ AntHalf:{
    borderColor: 'black'
    borderBottomWidth:1
    paddingRight:70
    marginLeft:13
  }}
  
  return (
    <View>
      <View style={styles.Addview}>
        <TouchableOpacity>
          <Text style={styles.roll}>vaseemkhan6376</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginRight: 90 }}>

          <Ionicons name='chevron-up' size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginRight: 5 }}>
          <MaterialCommunityIcons name='plus-box-outline' size={32} />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginRight: 6, }} onPress={() => navigation.navigate('ManuModal')}>
          <MaterialCommunityIcons name='menu' size={35} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.mantext}> find people you know  </Text>
        <Text style={styles.manPic}>connect with people you know by syncing your connects </Text>
        <TouchableOpacity >
          <Text style={styles.manbtn}> Try it </Text>
        </TouchableOpacity>

        <View style={styles.manview}>
          <TouchableOpacity >
            <Image style={styles.picture}
              source={require('./image/228.jpg')} />
            <Text style={styles.text}> Vaseemkhan </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.manposttext}> {count}</Text>
            <Text style={styles.manpost}> Posts </Text>
          </TouchableOpacity>

          <TouchableOpacity >
            <Text style={styles.manposttext}> {count2}</Text>
            <Text style={styles.manfollow}> followers </Text>
          </TouchableOpacity>

          <TouchableOpacity >
            <Text style={styles.manposttext}> {count3} </Text>
            <Text style={styles.manfollowing}> Following </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 8, }} >
          <TouchableOpacity style={styles.Edit}>
            <Text style={styles.EditText}> Edit profile </Text>
          </TouchableOpacity >

          <TouchableOpacity style={styles.Edit}>
            <Text style={styles.EditText}> Share profile </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Edits}>
            <AntDesign name='contacts' color={'black'} size={37} />
          </TouchableOpacity>
        </View >

        <View style={styles.dis}>
          <Text style={styles.discover}> Discover people .</Text>

          <TouchableOpacity>
            <Text style={styles.see}>See all</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 160 }}>
            <Ionicons name='close-outline' size={28} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.followView}>
            <TouchableOpacity style={styles.close}>
              <Ionicons name='close-outline' size={25} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={styles.sty}
                source={require('./image/asad-owaisi.jpg')} />
              <Text style={styles.suman}> Suman D-v-i.. </Text>
              <Text style={styles.suman}> suggestion for you </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.followUp} onPress={Follow}>
              <Text style={[styles.follow, { backgroundColor: data ? 'grey' : 'blue' }]}>{follow}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.followView}>
            <TouchableOpacity style={styles.close}>
              <Ionicons name='close-outline' size={25} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={styles.sty}
                source={require('./image/alluarjun.webp')} />
              <Text style={styles.suman}> allu arjun</Text>
              <Text style={styles.suman}> follow by sarkar2110 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.followUp} onPress={Follow}>
              <Text style={[styles.follow, { backgroundColor: data2? 'grey' : 'blue' }]}>{follow}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.followView}>
            <TouchableOpacity style={styles.close}>
              <Ionicons name='close-outline' size={25} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={styles.sty}
                source={require('./image/mr.feshu.jpg')} />
              <Text style={styles.suman}> mr. feshu</Text>
              <Text style={styles.suman}> follow by kamil6376 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.followUp} onPress={Follow}>
              <Text style={[styles.follow, { backgroundColor: data3 ? 'grey' : 'blue' }]}>{follow}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.followView}>
            <TouchableOpacity style={styles.close}>
              <Ionicons name='close-outline' size={25} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={styles.sty}
                source={require('./image/srk2.jpg')} />
              <Text style={styles.suman}> Sahrukh khan </Text>
              <Text style={styles.suman}> follow by vk23 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.followUp} onPress={Follow}>
              <Text style={[styles.follow, { backgroundColor: data4 ? 'grey' : 'blue' }]}>{follow}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>


        <View style={styles.Ant}>
        <View style={styles.AntHalf}>
          <TouchableOpacity style={styles.Antdesign} onPress={()=>setClick(false)}>
            <MaterialCommunityIcons name='table-large' color={'black'} size={40} />
          </TouchableOpacity>
          </View>

          <View style={styles.AntHalfdesign}>
          <TouchableOpacity style={styles.Antdesignback} onPress={()=>setClick(true)}>
            <AntDesign name='contacts' color={'black'} size={40} />
          </TouchableOpacity>
          </View>
        </View>
        {click==true? <Contact/>:<BioData/>}
         {/* <BioData />  */}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  manPic: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 20,
    textAlign: 'center',
    color: 'black'
  },
  picture: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    aspectRatio: 1,
    borderRadius: 90,
    marginLeft: 15,
    marginTop: 5,
    borderWidth: 2,
  },
  mantext: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '900',
    color: 'black',
    marginTop: 2
  },
  manbtn: {
    fontSize: 18,
    marginHorizontal: 25,
    backgroundColor: 'blue',
    color: 'white',
    padding: 8,
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 5
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
    color: 'black',
    fontWeight: '400',
    marginLeft: 6,
  },
  manpost: {
    fontSize: 19,
    fontWeight: '300',
    color: 'black',
    marginLeft: 1,
  },
  manfollow: {
    fontSize: 21,
    fontWeight: '300',
    marginLeft: 5,
    color: 'black'
  },
  manfollowing: {
    fontSize: 18,
    fontWeight: '300',
    marginLeft: 8,
    color: 'black'
  },
  manview: {
    flexDirection: 'row',
    marginTop: 5,
  },
  manposttext: {
    marginTop: 30,
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    marginLeft: 8,
  },
  Edit: {
    backgroundColor: 'grey',
    width: '40%',
    borderRadius: 8,
    padding: 6,
    marginLeft: 10,
  },
  Edits: {
    marginLeft: 8,
    backgroundColor: 'grey',
    borderRadius: 7,
  },
  EditText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
  dis: {
    flexDirection: 'row',
    marginLeft: 12,
    marginTop: 16,
  },
  discover: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black'
  },
  see: {
    fontSize: 19,
    fontWeight: '500',
    color: 'blue'
  },
  follow: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,
    padding: 5,
  },
  followUp: {
    borderRadius: 10,
    padding: 7,
    marginHorizontal: 10,
    marginTop: 14,
  },
  close: {
    marginLeft: 150

  },
  followView: {
    width: 180,
    height: 240,
    marginLeft: 10,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  suman: {
    fontSize: 16,
    textAlign: 'center'
  },
  sty: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginLeft: 35,

  },
  Ant: {
    flexDirection: 'row',
    alignItems:'baseline',
    justifyContent:'space-between',
    marginTop:15,
  
  },
  Antdesign: {
    marginLeft:60,
    marginBottom:20,
  },
  Addview: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  Antdesignback: {
    marginTop:5,
    marginRight:60,
    marginBottom:20,
  },
  roll: {
    fontSize: 20,
    color: 'black'
  }
})


export default Profile;