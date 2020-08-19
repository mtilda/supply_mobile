import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text } from "react-native-elements";

import Octicons from "react-native-vector-icons/Octicons";

const ItemSearchBar = ({ query, message, handleChange, handleSearch }) => (
    <View style={styles.container}>
        <Input
            placeholder = "item"
            onChangeText = { (text) => handleChange(text) }
            value = { query }
            rightIcon = {
                <Octicons name="search" size={20} color="black" onPress={() => handleSearch()} />
            }
            onSubmitEditing={() => handleSearch()}
            autoCapitalize="none"
        />
        <Text style={[styles.message, { color: message.error ? "red" : "black" }]}>{message.content}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    message: {
        paddingHorizontal: 10,
        height: 5,
    }
})

export default ItemSearchBar;