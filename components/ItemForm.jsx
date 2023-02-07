import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native';

const screenDimensions = Dimensions.get('screen');

export default function ItemForm(props) {
  return (
    <View style = {myStyles.container}>
      <Text style = {myStyles.h1}>ItemForm</Text>

      <Text style = {myStyles.h2}>Donner la discription</Text>
      <TextInput  
      placeholder="put a discription here" 
      style = {myStyles.input}
      value = {props.discription}
      onChangeText = {props.handlediscriptionChange}
      />
    </View>
  )
}
const myStyles = StyleSheet.create({
    h1: {
        fontSize:40,
        fontWeight:"bold",
        color: '#F2B709',
        alignItems: 'center',
        justifyContent: 'center'
    },
    h2: {
      fontSize:20,
      fontWeight:"bold",
      color: '#F2B709',
      alignItems: 'center',
      justifyContent: 'center'
  },
  input: {    
      height: screenDimensions.height * 0.05,
        width: screenDimensions.width * 0.9,
        margin: 10,
        borderWidth: 2,
        padding: 10,
        borderColor: '#AF3314',
        color: "#F2B709",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#AF3314"},
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#DBDBD6",
      },
    });