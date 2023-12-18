import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BioData = () => {
    return (
        <View>
            <View style={styles.nameBio}>
                <Text style={styles.nameCapture}>capture the moment with a friend</Text>
                <Text style={styles.nameCreate}>create yout first post</Text>
            </View>

            <View style={styles.nameFes}>
                <Text style={styles.nameYour}>Complete your profile </Text>
                <Text style={styles.nameComplete}>1 of 4 Complete</Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.nameProfile}>
                    <View style={styles.icon}>
                        <Ionicons name='person-circle' size={30} color={'white'} />
                    </View>
                    <Text style={styles.nameAdd}>Add Profile photo</Text>
                    <Text style={styles.nameChoose}>Choose a profile photo to repesent yourself on Instagram</Text>
                    <TouchableOpacity style={styles.touch}>
                        <Text style={styles.addtouch}>Add photo</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.nameProfile}>
                    <View style={styles.icon}>
                        <Ionicons name='chatbubble-outline' size={30} color={'grey'} />
                    </View>
                    <Text style={styles.nameAdd}> Add bio</Text>
                    <Text style={styles.nameChoose}>tell your followers a lttile bit about yourself </Text>
                    <TouchableOpacity style={styles.touch}>
                        <Text style={styles.addtouch}>Add bio</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.nameProfile}>
                    <View style={styles.icon}>
                        <Octicons name='people' size={30} color={'grey'} />
                    </View>
                    <Text style={styles.nameAdd}>Find people to follow</Text>
                    <Text style={styles.nameChoose}> Follow people and interests you care about </Text>
                    <TouchableOpacity style={styles.touch}>
                        <Text style={styles.addtouch}>Find people</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.nameProfile}>
                    <View style={styles.icon}>
                        <Octicons name='person' size={30} color={'grey'} />
                    </View>
                    <Text style={styles.nameAdd}>Add your name</Text>
                    <Text style={styles.nameChoose}>Add your full name so your friends know it's you </Text>
                    <TouchableOpacity style={styles.touch}>
                        <Text style={styles.addtouch}>Edit name</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    nameBio: {
        marginTop: 20,
    },
    nameCapture: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '900',
        color: 'black'
    },
    nameCreate: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
        color: 'blue'
    },
    nameFes: {
        marginTop: 17
    },
    nameYour: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: '600',
        color: 'black'
    },
    nameComplete: {
        fontSize: 14,
        marginLeft: 5,
        fontWeight: '400'
    },
    nameProfile: {
        marginLeft: 13,
        width: 220,
        height: 190,
        borderWidth: 0.4,
        borderColor: 'Grey',
        borderRadius: 5,
        marginTop: 8,
    },
    nameAdd: {
        fontSize: 17,
        fontWeight: '700',
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
    },
    nameChoose: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 10,
        fontWeight: '400'
    },
    icon:{ 
        marginTop:35,
        width:50,
        height:50,
        borderRadius:50,
        borderWidth:1.5,
        borderColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:80,
    },
    addtouch:{
        fontSize:17,
        color:'white', 
    },
    touch:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
        borderRadius:4,
    }
})
export default BioData

