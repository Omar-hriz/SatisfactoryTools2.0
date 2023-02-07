import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';

const screenDimensions = Dimensions.get('screen');

export default function CustomButton(props) {
    return (
        <View style={myStyles.container}>
            <TouchableOpacity style={myStyles.buttoncontainer} onPress={() => {
                props.makeInvisible();
                props.event(props.uri);
            }
            }>
                <Image
                    source={{ uri: props.uri }}
                    style={myStyles.image}
                    resizeMode="contain"
                />
                <Text style={myStyles.First}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}
const myStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttoncontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: screenDimensions.height * 0.2,
        width: screenDimensions.width * 0.441,
    },
    image: {
        height: screenDimensions.height * 0.1,
        width: screenDimensions.width * 0.35,
    },
    First: {
        fontSize: screenDimensions.width * 0.056,
        fontWeight: "bold",
        color: '#F2B709',
    },
});