import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

import SupplyTile from "./SupplyTile.jsx";

const SupplyGrid = ({ supplies, selectSupply, activity }) => (
    
    <View style={styles.vertical}>
        <View style={styles.container}>
            {
                activity ?
                    <ActivityIndicator />
                :
                    supplies[0]?
                        supplies.map( (supply, index) => <SupplyTile key={index} index={index} name={supply.name} color={supply.color} selectSupply={selectSupply} />)
                    :
                        <Text>You aren't tracking any supplies yet</Text> }
        </View>
    </View>
)

const styles = StyleSheet.create({
    vertical: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    container: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    }
})

export default SupplyGrid