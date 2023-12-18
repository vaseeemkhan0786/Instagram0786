// import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
// import React, { useState } from 'react'
// import Modal from "react-native-modal";

// const SaveModal = () => {
//     const [visible, setVisible] = useState(true);
//     const[click,setClick] =useState(false)
//     useState( ()=>{
//       setTimeout( ()=>{
//         setVisible(false);
//       },2000) 
//     },)
//     return (
//         <View>
//             {/* <Modal isVisible={visible}
//                 animationIn={'bounceInRight'}
//                 animationInTiming={1500}
//                 onBackButtonPress={() => setVisible(false)} >
//                 <View style={styles.Modal}>

//                     <TouchableOpacity>
//                         <View style={styles.ImageView}>
//                             <Image style={styles.Image} source={require('./image/vijay.jpeg')} />
//                             <Text style={styles.Text}>save to collection</Text>
//                         </View>
//                     </TouchableOpacity>

//                 </View>
//             </Modal> */}
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     Modal: {
//         width: '100%',
//         height: 40,
//     },
//     ImageView:{
//         flexDirection:'row',
//          justifyContent:'space-between',
//          position:'relative',
//          bottom:0,
//          left:0,
//          right:0,
//          backgroundColor:'white',
//          width:'100%',
//     },
//     Image: {
//         width: 40,
//         height: 40,
//         resizeMode: 'cover',
       
//     },
//     Text: {
//         fontSize: 17,
//         color: 'red',
//         marginTop:7
//     }
// })

// export default SaveModal;