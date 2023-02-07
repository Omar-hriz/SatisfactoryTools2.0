import { View, TextInput, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';
import Header from './Header';
import Fire from '../Fire';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const screenDimensions = Dimensions.get('screen');

export default function ItemList(props) {
    const navigation = useNavigation();
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const base = new Fire();
        base.getItems(items => {
            setItems(items);
            setFilteredItems(items);
            setLoading(false);
        })
    }, [])

    const handleFilter = (searchedItem) => {
        const newListItems = items.filter((item) => item.name.toLowerCase().includes(searchedItem.toLowerCase()));
        setFilteredItems(newListItems);
    }

    return (
        <View style={myStyles.container}>
            {props.handleUriChange == null && (
                <Header moveRecepiePage={() => navigation.navigate("RecepiePage")} moveHome={() => navigation.navigate("Home")} />
            )}
            <TextInput key="searchbar" placeholder='Rechercher' onChangeText={handleFilter} style={myStyles.input} />
            <ScrollView >
                <View style={myStyles.imageContainer}>
                    {filteredItems.map(item => (
                        <CustomButton key={item.id} makeInvisible={props.makeInvisible} event={props.handleUriChange} name={item.name} uri={item.uri} />
                    ))}
                </View>
            </ScrollView>

        </View>
    )
}
const myStyles = StyleSheet.create({
    input: {
        height: screenDimensions.height * 0.05,
        width: screenDimensions.width * 0.9,
        margin: 10,
        borderWidth: 2,
        textAlign: "center",
        borderColor: '#AF3314',
        color: "#F2B709",
        backgroundColor: "#AF3314",
        borderRadius: screenDimensions.height * 0.05,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#DBDBD6",
    },
    imageContainer: {
        flex: 1,
        zIndex: -1,
        flexDirection: "row",
        flexWrap: "wrap"
    }
});
