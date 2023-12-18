import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import { forSlideRight } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';


const Notification = () => {
    const [follow, setFollow] = useState(false);
    const [follow2, setFollow2] = useState(false);
    const [follow3, setFollow3] = useState(false);
    const [follow4, setFollow4] = useState(false);
    const [follow5, setFollow5] = useState(false);
    const [follow6, setFollow6] = useState(false);
    const [count, setCount] = useState(false);
    const [count2, setCount2] = useState(false);
    const [count3, setCount3] = useState(false);
    const [count4, setCount4] = useState(false);
    const [count5, setCount5] = useState(false);
    const [count6, setCount6] = useState(false);
    const[visible,setVisible]=useState(true);

    const Follow = () => {
        if (count != true) {
            setFollow(true)
            setCount(true)
        }
        else {
            setFollow(false),
                setCount(false)
        }
    }

    const Follow2 = () => {
        if (count2 != true) {
            setFollow2(true),
            setCount2(true)
        }
        else {
            setFollow2(false),
                setCount2(false)
        }
    }

    const Follow3 = () => {
        if (count3 != true) {
            setFollow3(true),
            setCount3(true)
        }
        else {
            setFollow3(false),
                setCount3(false)
        }
    }

    const Follow4 = () => {
        if (count4 != true) {
            setFollow4(true)
            setCount4(true)
        }
        else {
            setFollow4(false),
                setCount4(false)
        }
    }

    const Follow5 = () => {
        if (count5 != true) {
            setFollow5(true)
            setCount5(true)
        }
        else {
            setFollow5(false),
                setCount5(false)
        }
    }

    const Follow6 = () => {
        if (count6 != true) {
            setFollow6(true)
            setCount6(true)
        }
        else {
            setFollow6(false),
                setCount6(false)
        }
    }
    return (
        <View>
            {/* <Modal  animationIn={'slideInRight'}
            isVisible={visible} 
            onBackButtonPress={()=>setVisible(false)}>
            <View style={styles.modal}> */}
            <Text style={styles.New}>New</Text>
            <View style={styles.touchView}>
                <TouchableOpacity>
                    <Image style={styles.image}
                        source={require('./image/ertugul.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.RSA}>RSA Gorwal,from your{'\n'} 
                    contacts is on Instagram {'\n'} 
                    as saukatali5200.</Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={Follow}
                style={[styles.touchableOpacity,{backgroundColor:count?'grey':'blue'}]}>
                    <Text style={[styles.follow,{color:count?'black':'white'}]}>{!follow?'Follow':'Following'}</Text>
                </TouchableOpacity>
            </View>
             <View style={styles.touchView}>
                <TouchableOpacity>
                    <Image style={styles.image}
                        source={require('./image/akbar.jpeg')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.RSA}>AKBAR OWAISI,from your{'\n'} 
                    contacts is on Instagram {'\n'} 
                    as akbarowaisi1100.</Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={Follow2}
                style={[styles.touchableOpacity,{backgroundColor:count2?'grey':'blue'}]}>
                    <Text style={[styles.follow,{color:count2?'black':'white'}]}>{!follow2?'Follow':'Following'}</Text>
                </TouchableOpacity>
            </View>
             <View style={styles.touchView}>
                <TouchableOpacity>
                    <Image style={styles.image}
                        source={require('./image/ayesha.jpeg')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.RSA}>AYESHA TAKIZA,from your{'\n'} 
                    contacts is on Instagram {'\n'} 
                    as ayeshatakiza3292.</Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={Follow3}
                style={[styles.touchableOpacity,{backgroundColor:count3?'grey':'blue'}]}>
                    <Text style={[styles.follow,{color:count3?'black':'white'}]}>{!follow3?'Follow':'Following'}</Text>
                </TouchableOpacity>
            </View>
             <View style={styles.touchView}>
                <TouchableOpacity>
                    <Image style={styles.image}
                        source={require('./image/solid.jpeg')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.RSA}>SUORYA,from your{'\n'} 
                    contacts is on Instagram {'\n'} 
                    as sOURYAkhan2463.</Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={Follow4}
                style={[styles.touchableOpacity,{backgroundColor:count4?'grey':'blue'}]}>
                    <Text style={[styles.follow,{color:count4?'black':'white'}]}>{!follow4?'Follow':'Following'}</Text>
                </TouchableOpacity>
            </View>
             <View style={styles.touchView}>
                <TouchableOpacity>
                    <Image style={styles.image}
                        source={require('./image/srk1.webp')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.RSA}>SRK KHAN,from your{'\n'} 
                    contacts is on Instagram {'\n'} 
                    as shahrukhkhan3553.</Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={Follow5}
                style={[styles.touchableOpacity,{backgroundColor:count5?'grey':'blue'}]}>
                    <Text style={[styles.follow,{color:count5?'black':'white'}]}>{!follow5?'Follow':'Following'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.touchView}>
                <TouchableOpacity>
                    <Image style={styles.image}
                        source={require('./image/sachin.jpeg')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.RSA}>SACHIN TENDULKAR,{'\n'} 
                    contacts is on Instagram {'\n'} 
                    as sachintendulkar53.</Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={Follow6}
                style={[styles.touchableOpacity,{backgroundColor:count6?'grey':'blue'}]}>
                    <Text style={[styles.follow,{color:count6?'black':'white'}]}>{!follow6?'Follow':'Following'}</Text>
                </TouchableOpacity>
            </View>
            </View>
        //     </Modal>
        // </View>
    )
}
const{width,height}=Dimensions.get('window')
const styles = StyleSheet.create({
    modal:{
        width:width,
        height:height,
        backgroundColor:'#fff',
        margin:0,
        padding:0,
    },
    New:{
      fontSize:20,
      marginLeft:10,

    },
    image: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
        borderRadius: 25,
        marginTop:2
    },
    touchView: {
        width:width,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginLeft: 11,
        marginTop: 10,
        flexWrap:'wrap'
    },
    RSA:{
    color:'black',
    marginLeft:8,
    },
    touchableOpacity: {
        width: 100,
        margin:2,
        marginBottom:5,
        borderRadius:10,
    },
    follow: {
        fontSize: 18,
        textAlign: 'center',
        marginTop:8,
    }
})

export default Notification;
