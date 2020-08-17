import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

const SupplyTile = ({ index, name, color, selectSupply }) => (
    <TouchableOpacity onPress={() => selectSupply(index)}>
        <View style={[ styles.container, { backgroundColor: color,  } ]} >
            <Text style={styles.text}>{name}</Text>
        </View>
    </TouchableOpacity>
);

const tileSize = 125;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        width: tileSize,
        height: tileSize,
        margin: 5,
        borderRadius: 5,
    },
    text: {
        textAlign: "center",
        color: "#fff",
    }
})

export default SupplyTile;