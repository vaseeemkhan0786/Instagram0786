import { StyleSheet, Text, View ,Dimensions, TouchableOpacity,Image,ScrollView } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";

const RequestSent = () => {
    const[visible,setVisible]= useState(true)
  return (
         <View>
        <Modal isVisible={visible}
        animationIn={'bounceInDown'}
        animationInTiming={1000}
        onBackButtonPress={()=>setVisible(false)}
         onPointerUp={()=>setVisible(false)}
         onBackdropPress={()=>setVisible(false)}
        >
         <View style={styles.Modal}>
            <Text style={{fontSize:20,textAlign:'center'}}> sent</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.ModalImage}>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://cdn.britannica.com/06/200006-131-ABB681CF/Leonardo-da-Vinci-Italian-Renaissance-Florence-Engraving-1500.jpg?w=840&h=460&c=crop'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjApq29dPr6_3mJxQgB2OvcDesYobxTvlY0gl_Pky9FUkc1vvxVpNgLnsyDPKwfUy4BXc&usqp=CAU'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc21ddvUhvyS70U1yuHs-SjfMt5PqJco3b1-sP4k6icawXkKxChDRjKH82OOHPocrjD88&usqp=CAU'}} />
                </TouchableOpacity>
            </View>
            <View style={styles.ModalImage}>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://external-preview.redd.it/TESwPK-cO8mk8pvtyG03boUtVcrZmFKFG0XqfzIwWyM.jpg?auto=webp&s=ce9105aa5c1d9c89199126c12d665b9037f11d9d'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFCUTO4Nn4hxk2cMO6zkJ8XtesBQAfxXRXw&usqp=CAU'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTM-MJQh5hizb7xHc4wKtj55KVBFyf9fz2g&usqp=CAU'}} />
                </TouchableOpacity>
            </View>
            <View style={styles.ModalImage}>
                <TouchableOpacity>
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYeQBEZ9teTU2nRk-nW4Hb77dhXAX5rHb7-XWxVA6blTXJ1O6e7WUp_UG-ABtWkR2ExM&usqp=CAU'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbu0upAF5pdX6Jh88b1RePd3j_5y9A3Fcvc9EWQ6iI38v140pzizem05ActFFaG0lx4A&usqp=CAU'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{uri:'https://i.pinimg.com/originals/ca/e2/40/cae24095d9d7837349b5e1575eb7922a.jpg'}} />
                </TouchableOpacity>
            </View>
            <View style={styles.ModalImage}>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLSwvyE3533HaL3I2W1RL9bFVj-zeU_CTclw&usqp=CAU'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://cdn.thecoolist.com/wp-content/uploads/2022/03/Ronaldo-Rightly-Deserves-to-be-Classed-Among-Footballs-Living-Legends.png'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://img.freepik.com/premium-photo/portrait-handsome-young-man_53876-38137.jpg'}} />
                </TouchableOpacity>
            </View>
            <View style={styles.ModalImage}>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://i.pinimg.com/736x/c8/ff/88/c8ff88ba5d7c2844bfbeaaa0837d1de5.jpg'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://t3.ftcdn.net/jpg/02/11/85/38/360_F_211853826_fykEscofGvoemrJJl8ube7w0O2tccR17.jpg'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://img.freepik.com/premium-photo/portrait-cheerful-young-man-white-tshirt-white-background-guy-is-standing-looking-camera-smiling_168410-2324.jpg'}} />
                </TouchableOpacity>
            </View>
            <View style={styles.ModalImage}>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://t3.ftcdn.net/jpg/03/05/77/64/360_F_305776453_t7SUl48g63zLsyODxd60aj6EcWR9avVK.jpg'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://img.freepik.com/premium-photo/portrait-cheerful-young-man-white-tshirt-white-background-guy-is-standing-looking-camera-smiling_168410-2324.jpg'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5b4zsQBAC45bZrMp4YCFlPWyUi9gePF3KNWIDY1KD9vLP76o_0trozv32RZQpf3WAow&usqp=CAU'}} />
                </TouchableOpacity>
            </View>
            <View style={styles.ModalImage}>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfVyQrzD4qwbLCjnQdPGgXekSbUywoEw3Eg&usqp=CAU'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1h8gQASLaM3DjpFp8DO1JWhPFLF0NpsacNw&usqp=CAU'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.Image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAp6txnYQp0zm2TdVyM42aWRUh7UsN9mAdA&usqp=CAU'}} />
                </TouchableOpacity>
            </View>
            </ScrollView>
         </View>
        </Modal>
         </View> 
  
  )
}
const{width,height}=Dimensions.get('window')
const styles = StyleSheet.create({
    Modal:{
        width:width,
        height:'65%',
        backgroundColor:'white',
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
    },
    ModalImage:{
        width:width,
        flexDirection:'row',
        marginTop:8,
    },
    Image:{
        width:115,
        height:130,
        borderRadius:2,
        marginLeft:7
    }
})

export default RequestSent

