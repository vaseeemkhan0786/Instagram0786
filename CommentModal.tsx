import {
    Dimensions, StyleSheet, Text, View,
    TouchableOpacity, Image,TextInput
} from 'react-native'
import React, { useState } from 'react';
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Iconicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const CommentModal = () => {
    const [visible, setVisible] = useState(true);
    const [count, setCount] = useState(false);
    const [comment,setComment] =useState('');
    return (
        <View>
            <Modal isVisible={visible}
                onBackButtonPress={() => setVisible(false)}
                onBackdropPress={() => setVisible(false)}
                onSwipeCancel={() => setVisible(false)}
              >
                <View style={styles.sheet}>
                    <View style={styles.EmptyView}></View>
                        <View style={styles.CommentView}>
                            <Text style={{ fontSize: 20, color: 'black', marginLeft: 100, fontWeight: '500' }}> comments</Text>
                            <TouchableOpacity style={styles.touchableOpacityGallery}>
                                <AntDesign name='infocirlceo' size={27} />
                            </TouchableOpacity>
                        </View>

                    <View style={styles.commentsetup}>
                        <TouchableOpacity style={styles.touchableOpacityGallery}>
                            <Image style={styles.galleryImage} source={require('./image/best.jpeg')} />
                            <View style={styles.person}>
                                <Text style={styles.gallery}> best person </Text>
                                <Text> aa raha hoo</Text>
                                <Text>reply </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hart}>
                            <Iconicons name='heart-outline' size={33} />
                            <Text></Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.viewReply}>view 3 more replies</Text>
                    </TouchableOpacity>

                    <View style={styles.commentsetup}>
                        <TouchableOpacity style={styles.touchableOpacityGallery}>
                            <Image style={styles.galleryImage} source={require('./image/ayesha.jpeg')} />
                            <View style={styles.person}>
                                <Text style={styles.gallery}> ayesha takiza</Text>
                                <Text> aa raha hoo</Text>
                                <Text>reply </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.hart}>
                            <Iconicons name='heart-outline' size={33}  />
                            <Text></Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.viewReply}>view 3 more replies</Text>
                    </TouchableOpacity>

                    <View style={styles.commentsetup}>
                        <TouchableOpacity style={styles.touchableOpacityGallery}>
                            <Image style={styles.galleryImage} source={require('./image/bhuvan.jpeg')} />
                            <View style={styles.person}>
                                <Text style={styles.gallery}> dhuvan khan</Text>
                                <Text> aa raha hoo</Text>
                                <Text>reply </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hart}>
                        <Iconicons name='heart-outline' size={33}  />
                            <Text></Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.viewReply}>view 3 more replies</Text>
                    </TouchableOpacity>

                    <View>
                        <TouchableOpacity><Text></Text></TouchableOpacity>
                        <TouchableOpacity><Text></Text></TouchableOpacity>
                        <TouchableOpacity><Text></Text></TouchableOpacity>
                        <TouchableOpacity><Text></Text></TouchableOpacity>
                        <TouchableOpacity><Text></Text></TouchableOpacity>
                        <TouchableOpacity><Text></Text></TouchableOpacity>
                        <TouchableOpacity><Text></Text></TouchableOpacity>
                        <TouchableOpacity><Text></Text></TouchableOpacity>
                        <TouchableOpacity><Text></Text></TouchableOpacity>
                    </View>
                    <View style={styles.textInputView}>
                    <Image style={styles.personImage} source={require('./image/person.jpeg')}/>
                    <TextInput style={styles.textInput} placeholder='Add comment for srkbees..' value={comment} onChangeText={(comment)=> setComment(comment)}/>
                    <TouchableOpacity>
                        <View style={styles.gif}>
                  <MaterialIcons name='gif' size={23} color={'grey'} />
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
        margin: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    EmptyView: {
        width: 50,
        borderBottomWidth: 5,
        borderColor: 'black',
        borderRadius: 8,
        marginHorizontal: 150,
        marginTop: 5
    },
    touchableOpacityGallery: {
        flexDirection: 'row',
        marginLeft: 10
    },
    CommentView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10,

    },
    gallery: {
        fontSize: 20,
        color: 'black',
        marginLeft: 8,
        marginTop: 10,
        borderRadius: 7,
    },
    galleryImage: {
        width: 50,
        height: 50,
        marginTop: 10,
        borderRadius: 50,
    },
    commentsetup: {
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent:'flex-start',
       
    },
    hart: {
        marginTop:10,
        marginLeft:90,
        marginRight:10,

       
    },
    personImage: {
         width:35,
         height:35,
         borderRadius:35,
         marginTop:5
    },
    viewReply:{
        marginLeft:70
    },
    textInputView:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        flexDirection:'row',
        marginHorizontal:13,
    },
    gif:{
        width:25,
        height:25,
        borderColor:'black',
        borderWidth:2,
        borderRadius:5,
        marginTop:10,
        marginLeft:50
    },
    textInput:{
        fontSize:15,
        color:'grey',
        marginLeft:15
        
    }

})

export default CommentModal;

