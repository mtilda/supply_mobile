import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

const SupplyTile = ({ name, color, id, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[ styles.container, { backgroundColor: color,  } ]} >
            <Text style={styles.text}>{name}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 5,
        borderRadius: 5,
    },
    text: {
        lineHeight: 100,
        color: "#fff",
    }
})

export default SupplyTile;