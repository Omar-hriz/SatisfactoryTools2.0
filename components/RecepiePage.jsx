import { View, StyleSheet, Modal, TextInput, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react';
import React from 'react'
import Header from './Header';
import Fire from '../Fire';
import { Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import FoodTable from './RecepieTable';
import ItemList from './ItemList';

const screenDimensions = Dimensions.get('screen');

export default function RecepiePage({ navigation }) {
    const [isListVisible, setisListVisible] = useState(false);
    const [Items, setItems] = useState([]);
    const [uri, setUri] = useState("https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/b/be/Adaptive_Control_Unit.png/revision/latest?cb=20200216142819");
    const [myItems, setMyItems] = useState(null);
    const [speed, setSpeed] = useState(100)
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState([]);

    useEffect(() => {
        const base = new Fire();
        base.getItems(items => {
            setItems(items);
            const currentItems = items.find(items => items.uri == uri)
            setMyItems(currentItems);  
            setLoading(false);      
        });
    }, [uri]);
    
    return (

        <View style={{ flex: 1 }} >

            {loading && <ActivityIndicator />}
            {!loading && <View style={myStyles.container}>
                <Header moveRecepiePage={() => navigation.navigate("RecepiePage")} moveHome={() => navigation.navigate("Home")} />

                <TouchableOpacity style={myStyles.buttoncontainer} onPress={() => setisListVisible(true)}>
                    <Image
                        source={{ uri: uri }}
                        style={myStyles.image}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <Modal visible={isListVisible}>
                    <ItemList makeInvisible={() => setisListVisible(false)} handleUriChange={newUri => setUri(newUri)} />
                </Modal>

                <View>
                    <TextInput style={myStyles.input} onChangeText={newSpeed => setSpeed(newSpeed)}/>
                </View>


            </View>}


        </View>

    )
}



const myStyles = StyleSheet.create({
    title: {
        marginTop: screenDimensions.height * 0.005,
        fontSize: screenDimensions.width * 0.14,
        fontWeight: "bold",
        color: '#F2B709',
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#DBDBD6",
        flex: 1
    },
    image: {
        height: screenDimensions.height * 0.15,
        width: screenDimensions.width * 0.9,

    },
    textContainer: {
        width: screenDimensions.width,
    },
    calculate: {
        margin: 10,
        borderWidth: 2,
        padding: 10,
        color: "#AF3314",
        borderRadius: screenDimensions.height * 0.05,
        height: screenDimensions.height * 0.05,
        width: screenDimensions.width * 0.35,
    },
    buttoncontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        height: screenDimensions.height * 0.15,
        width: screenDimensions.width * 0.5,
    },
    input: {
        height: screenDimensions.height * 0.05,
        width: screenDimensions.width * 0.35,
        margin: 10,
        borderWidth: 2,
        padding: 10,
        borderColor: '#AF3314',
        color: "#F2B709",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#AF3314",
        borderRadius: screenDimensions.height * 0.05,
    },
});


function calcData(cr, foods, level) {
    var affinityNeeded = cr.a0 + (cr.a1 * level);
    var foodConsumption = cr.foodBase * cr.foodMult;
    var returnDatas = [];
    foods.forEach(food => {
        var tamingMult = 4;
        var foodMaxRaw = affinityNeeded / food.affinity / tamingMult;
        var foodMax = Math.ceil(foodMaxRaw/3);
        var foodSecondsPer = food.value / foodConsumption;
        var foodSeconds = Math.ceil(foodMax * foodSecondsPer);
        var returnData = { uri: food.uri, name: food.name, max: foodMax, seconds: foodSeconds };
        returnDatas.push(returnData);
    })
    return returnDatas;
}
