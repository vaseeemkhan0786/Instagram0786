import { Dimensions, StyleSheet, Text, View,
     TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import Feather  from 'react-native-vector-icons/Feather'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import Octicons  from 'react-native-vector-icons/Octicons'
import FontAwesome  from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign  from 'react-native-vector-icons/AntDesign'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'


const ThreeDotModal = () => {
    
    const [visible, setVisible] = useState(true)
    return (
        <View>
            <Modal isVisible={visible} onBackButtonPress={()=>setVisible(false)}>
                <View style={styles.sheet}>
                    <View style={{width:50,borderBottomWidth:5,borderColor:'black',borderRadius:8,marginHorizontal:150,marginTop:5}}></View>
                    <View style={styles.IconsView}>
                        <View>
                    <TouchableOpacity >
                        <View style={styles.circle}>
                        <FontAwesome name='bookmark-o' size={30} />
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text style={styles.gallery}>  save </Text>
                        </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles. touchableOpacityGallery}>
                        <View style={styles.circle}>
                        <Feather name='refresh-ccw' size={30}/>
                        </View>
                        <Text style={styles.gallery}> remix</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles. touchableOpacityGallery}>
                        <View style={styles.circle}>
                        <MaterialCommunityIcons name='qrcode-scan' size={30} />
                        </View>
                        <Text style={styles.gallery}>Qr-code </Text>
                        </TouchableOpacity>
                        </View>

                        <View style={styles.addView}>
                        <TouchableOpacity >
                        <View style={styles. star}>
                        <Feather name='star' size={30}/>
                        <Text style={styles.starText}> Add to fevorities </Text>
                        </View> 
                    </TouchableOpacity>
                
                    <TouchableOpacity >
                    <View style={styles. star}>
                        <Octicons name='person' size={30}/>
                         <Text style={styles.starText}> Unfollow </Text>
                         </View>
                    </TouchableOpacity>
                    </View>
                   <View>
                   <TouchableOpacity >
                    <View style={styles. PostSeen}>
                        <AntDesign name='infocirlceo' size={27}/>
                         <Text style={styles.AboutText}>why you're seeing this post </Text>
                         </View>
                    </TouchableOpacity>
                   </View>

                   <View>
                   <TouchableOpacity >
                    <View style={styles. PostSeen}>
                        <Ionicons name='person-circle-outline' size={32}/>
                         <Text style={styles.AboutText}> About this account </Text>
                         </View>
                    </TouchableOpacity>
                   </View>

                   <View>
                   <TouchableOpacity >
                    <View style={styles. PostSeen}>
                        <MaterialIcons name='report-gmailerrorred' size={32} color={'red'}/>
                         <Text style={{fontSize:18,fontWeight:'400',color:'red',marginTop:4}}> Report </Text>
                         </View>
                    </TouchableOpacity>
                   </View>

                </View>
            </Modal>
        </View>
    )
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    sheet: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
         width: '100%',
        height: '60%',
        backgroundColor: 'white',
        borderRadius:8,
        padding:0,
        margin:0,
    },
    IconsView:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:50,
        marginBottom:15,

    },
    //  touchableOpacityGallery:{
    //       marginTop:8,
          
    //  },
    gallery: {
        fontSize: 15,
        color: 'black',
        fontWeight:'500',
        marginLeft:8
    },
    circle:{
        width:60,
        height:60,
        borderWidth:1,
        borderColor:'black',
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center'
    },

    // galleryImage:{
    //     width:30,
    //     height:30,
    //     resizeMode:'contain',
    //     marginTop:10
    // },
    addView:{
        borderTopWidth:0.2,
        borderBottomWidth:0.2,
        marginTop:10,
    },
 starText: {
        fontSize: 18,
        color: 'black',
        fontWeight:'400',
        marginLeft:10,
        marginTop:4
    },
    AboutText:{
        fontSize: 18,
        color: 'black',
        fontWeight:'400',
        marginLeft:10,
        marginTop:1
    },
    star:{
       flexDirection:'row',
       marginLeft:15,
       marginVertical:17,
    },
    PostSeen:{
        flexDirection:'row',
        marginLeft:15,
        marginVertical:8,
        
     }

})

export default ThreeDotModal;

