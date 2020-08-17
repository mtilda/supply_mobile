import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

const SupplyTile = ({ name, color, index, selectSupply }) => (
    <TouchableOpacity onPress={() => selectSupply(index)}>
        <View style={[ styles.container, { backgroundColor: color,  } ]} >
            <Text style={styles.text}>{name}</Text>
        </View>
    </TouchableOpacity>
);

const tileSize = 125;

const styles = StyleSheet.create({
    container: {
        width: tileSize,
        height: tileSize,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 5,
        borderRadius: 5,
    },
    text: {
        lineHeight: tileSize,
        color: "#fff",
    }
})

export default SupplyTile;