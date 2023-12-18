import {
    Dimensions, StyleSheet, Text,
    View, TouchableOpacity, Image
} from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";



const Modalfirst = () => {
    const [visible, setVisible] = useState(true)
    return (
        <View>
            <Modal isVisible={visible}
                onBackdropPress={() => setVisible(false)}>
                <View style={styles.sheet}>
                    <TouchableOpacity style={styles.touchableOpacityGallery}>
                        <Image style={styles.galleryImage} source={require('./image/gallery.png')} />
                        <Text style={styles.gallery}> Gallery </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchableOpacityGallery}>
                        <Image style={styles.galleryImage} source={require('./image/docs.png')} />
                        <Text style={styles.gallery}> Docs</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchableOpacityGallery}>
                        <Image style={styles.galleryImage} source={require('./image/email.png')} />
                        <Text style={styles.gallery}> Email </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchableOpacityGallery}>
                        <Image style={styles.galleryImage} source={require('./image/drive.jpeg')} />
                        <Text style={styles.gallery}> Drive </Text>
                    </TouchableOpacity>
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
        height: '30%',
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    touchableOpacityGallery: {
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 10
    },
    gallery: {
        fontSize: 20,
        color: 'black',
        marginLeft: 8,
        marginTop: 10,
        borderRadius: 7,
    },
    galleryImage: {
        width: 26,
        height: 27,
        marginTop: 10
    }

})

export default Modalfirst;

