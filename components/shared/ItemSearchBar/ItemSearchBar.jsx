import React from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";

import Octicons from "react-native-vector-icons/Octicons";

const ItemSearchBar = ({ query, handleChange, handleSearch }) => {
    return (
        <View>
            <Input
                placeholder = "item"
                onChangeText = { (text) => handleChange(text) }
                value = { query }
                rightIcon = {
                    <Octicons name="search" size={20} color="black" onPress={() => handleSearch()} />
                }
                onSubmitEditing={() => handleSearch()}
            />
        </View>
    );
}

export default ItemSearchBar;