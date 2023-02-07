import { View, Text, Modal, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AddButton from './AddButton'
import ItemForm from './ItemForm';
import { useState } from 'react';
import CustomButton from './CustomButton';

export default function ItemModal(props) {
    const [name, setName] = useState("")
    const [discription, setDiscription] = useState("")
    return (
        <Modal visible={props.isModalVisible}>
            <View style={myStyles.container}>

                {props.item.des == "" && (
                    <ItemForm
                        handleNameChange={newName => setName(newName)}
                        handlediscriptionChange={newDiscription => setDiscription(newDiscription)}
                        name={name}
                        discription={discription}
                    />
                )}

                {props.item.des != "" && (
                    <Text style={myStyles.h2}>{props.item.des}</Text>

                )}
                {props.item.des == "" && (
                    <AddButton content="Add Des" onPress={() => console.log(name + " that " + discription)} />
                )}

                <AddButton content="Close" onPress={props.onClose} />

                <CustomButton name={props.item.name} uri={props.item.uri} />

            </View>
        </Modal>
    )
}
const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#DBDBD6",
    },
    h2: {
        fontSize:20,
        fontWeight:"bold",
        color: '#F2B709',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
