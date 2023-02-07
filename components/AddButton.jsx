import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

const screenDimensions = Dimensions.get('screen');

export default function AddButton(props) {
    return (

        <TouchableOpacity onPress={props.onPress} style={buttonStyle.default}>
            <Text style={buttonStyle.title}>{props.content}</Text>
        </TouchableOpacity>

    )
}
const buttonStyle = StyleSheet.create({
    default: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderWidth: 2,
        padding: 10,
        backgroundColor: "#AF3314",
        borderColor: '#AF3314'
    },
    title: {
        fontSize: screenDimensions.width * 0.06,
        fontWeight: "bold",
        color: '#F2B709',
    },
});
