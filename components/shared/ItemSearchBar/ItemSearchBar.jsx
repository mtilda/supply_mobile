import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, SearchBar, Text } from "react-native-elements";

import Octicons from "react-native-vector-icons/Octicons";

const ItemSearchBar = ({ query, message, handleChange, handleCancel }) => (
    <View style={styles.container}>
        <SearchBar
            platform={"default"}
            placeHolder="search for an item...."
            value={query}
            onChangeText={handleChange}
            onCancel={handleCancel}
            searchIcon={
                <Octicons name="search" size={20} color="black" />
            }
            clearIcon={
                <Octicons name="x" size={30} color="rgba(0,0,0,0.5)" onPress={handleCancel} />
            }
            cancelIcon={<></>}
            // lightTheme={true}
            showCancel={false}
            // round={true}
            autoCapitalize="none"
            containerStyle={{ backgroundColor: "rgba(1,1,1,0)" }}
            inputContainerStyle={{ backgroundColor: "white" }}
            inputStyle={{ color: "black" }}
            leftIconContainerStyle={{ paddingLeft: 5 }}
            rightIconContainerStyle={{ paddingRight: 5 }}
        />
        {/* <Text style={[styles.message, { color: message.error ? "red" : "black" }]}>{message.content}</Text> */}
    </View>
);

const styles = StyleSheet.create({
    container: {
        // padding: 10,
    },
    message: {
        // paddingHorizontal: 10,
        // height: 5,
    }
})

export default ItemSearchBar;