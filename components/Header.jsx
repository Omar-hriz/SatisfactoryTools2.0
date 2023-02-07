import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Dimensions } from 'react-native';


const screenDimensions = Dimensions.get('screen');
export default function Header(props) {
    const [isVisible, setIsVisible] = useState(false)

    return (

        <View style={[myStyles.container]}>

            <TouchableOpacity style={myStyles.buttonContainer} onPress={() => setIsVisible(true)}>

                <Image
                    style={[myStyles.menuButton]}
                    source={{ uri: "https://www.satisfactorytools.com/assets/images/icons/android-chrome-512x512.png" }}
                    resizeMode="contain"
                />

            </TouchableOpacity>

            <Modal visible={isVisible} transparent={true} animationType={"fade"}>

                <View style={myStyles.modalContainer}>

                    <TouchableOpacity onPress={() => setIsVisible(false)}>
                        <Image
                            style={myStyles.modalButton}
                            source={{ uri: "https://www.satisfactorytools.com/assets/images/icons/android-chrome-512x512.png" }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={props.moveHome}>
                        <Text style={myStyles.textButtonFirst}>Items List</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={props.RecepiePage}>
                        <Text style={myStyles.textButtonSecond}>Recepie Page</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
            <Text style={[myStyles.title]}>Satisfactory Tools</Text>
        </View>
    )
}
const myStyles = StyleSheet.create({
    title: {
        marginTop: screenDimensions.height * 0.04,
        fontSize: screenDimensions.width * 0.085,
        fontWeight: "bold",
        color: '#F2B709',
        flex: 3.2
    },
    textButtonFirst: {
        fontWeight: "bold",
        color: '#F2B709',
        fontSize: screenDimensions.width * 0.063,
        padding: 2.5
    },
    textButtonSecond: {
        fontWeight: "bold",
        color: '#F2B709',
        fontSize: screenDimensions.width * 0.051,
        padding: 2.5
    },
    container: {
        backgroundColor: "#413C2C",
        height: screenDimensions.height * 0.14,
        width: screenDimensions.width,
        flexDirection: "row",
        alignItems: 'center',
    },
    menuButton: {
        marginTop: screenDimensions.height * 0.04,
        height: screenDimensions.height * 0.15,
        width: screenDimensions.width * 0.15,
        marginLeft: screenDimensions.width * 0.06,
    },
    modalButton: {
        height: screenDimensions.height * 0.10,
        width: screenDimensions.width * 0.15,
        margin: screenDimensions.width * 0.015,
    },
    buttonContainer: {
        flex: 1
    },
    modalContainer: {
        backgroundColor: "#413C2C",
        height: "100%",
        width: "30%",
        alignItems: 'center',
    }
});