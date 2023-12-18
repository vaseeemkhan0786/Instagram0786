import { StyleSheet, Text, View, Image,
    TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const SearchTab = ({ navigation }) => {
    const [search, setSearch] = useState('');
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
                    <MaterialCommunityIcons name='video-plus-outline' size={45} />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginRight: 6, }} onPress={() => navigation.navigate('ManuModal')}>
                    <Feather name='edit' size={28} />
                </TouchableOpacity>
            </View>

            <View style={styles.InputView}>
                <View style={styles.searchView}>
                    <Ionicons name='search' size={25} />
                </View>
                <TextInput
                    style={styles.TextInput}
                    placeholder='serach'
                    value={search}
                    onChangeText={(search) => setSearch(search)} />
            </View>

            <View style={styles.Iconicon}>
            <Ionicons name='add-circle-outline' size={35}  />
                <TouchableOpacity >
                  <Image style={styles.IconImage} source={require('./image/user-id.webp')} />
                </TouchableOpacity>
            </View>
            <Text style={{marginLeft:33,}}>Your note</Text>
            <View style={styles.request}>
                <Text style={{fontSize:18,marginLeft:16,color:'black'}}>massage</Text>
                <TouchableOpacity>
                    <Text style={{fontSize:18,color:'blue',marginRight:16}}>Requests</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sentView}>
                <TouchableOpacity>
                    <Image style={styles.sentImage}
                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3gg3rbRr7rpvpYvr5viM9Bi1L3LglCYQ7w&usqp=CAU'}} />
                    
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft:10}}>
                <Text style={styles.sent}>vaseem77921</Text>
                    <Text style={styles.sent}>sent</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.sentView}>
                <TouchableOpacity>
                    <Image style={styles.sentImage}
                     source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjy6s7ColC8WuqhO-HkdS-Vrmg_mBY9wa-3w&usqp=CAU'}} />
                </TouchableOpacity>

                <TouchableOpacity  style={{marginLeft:10}}>
                <Text style={styles.sent}>shihabbhai24592</Text>
                    <Text style={styles.sent}>sent</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Addview: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    roll: {
        fontSize: 20,
        color: 'black'
    },
    InputView: {
        flexDirection: 'row',
        borderColor: '#000',
        marginTop: 13,
        width: '92%',
        height: 45,
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 14,
        backgroundColor: 'grey'
    },
    TextInput: {
        fontSize: 20,
    },
    searchView:{
        marginTop:8,
        marginLeft:8,
    },
    IconImage:{
        width:75,
        height:75,
        borderRadius:40,
    },
    Iconicon:{
        flexDirection:'row',
        marginTop:15,
        width:30,
        
    },
    request:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
    },
    sentImage:{
        width:40,
        height:40,
        borderRadius:20,
        resizeMode:'contain',
        
    },
    sentView:{
        flexDirection:'row',
        marginLeft:15,
        marginTop:15,
    },
    sent:{
        color:'black',
        fontSize:15,
    }
})


export default SearchTab;
