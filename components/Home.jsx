import ItemList from './ItemList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fire from '../Fire';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import ItemModal from './ItemModal';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';

export default function Home() {
    const [isVisible, setisVisible] = useState(false);
    const [uri, setUri] = useState("https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/b/be/Adaptive_Control_Unit.png/revision/latest?cb=20200216142819");
    const [items, setItems] = useState([]);
    const [myItem, setMyItem] = useState(null);

    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const base = new Fire();
        base.getItems(items => {
            setItems(items);
            const currentItem = items.find(item => item.uri == uri)
            setMyItem(currentItem);
            setLoading(false);
        });
    }, [uri]);
    return (
        <View style={{ flex: 1 }}>
            {loading && <ActivityIndicator />}
            {!loading && <View style={{ flex: 1 }}>
                <Header RecepiePage={() => navigation.navigate("RecepiePage")} moveHome={() => navigation.navigate("Home")} />
                <ItemList makeInvisible={() => setisVisible(true)} handleUriChange={newUri => setUri(newUri)} />
                <ItemModal item={myItem} isModalVisible={isVisible} onClose={() => setisVisible(false)} />
            </View>}
        </View>
    )
}