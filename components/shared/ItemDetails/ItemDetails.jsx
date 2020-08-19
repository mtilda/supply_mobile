import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

const ItemDetails = ({ item }) => {
    
    if(item.id) {
        const rate = Math.round(item.average_consumption_rate_per_day * item.average_get_time_delta * 10)/10;
        const time = Math.round(item.average_get_time_delta);

        return (
            <View style={styles.container}>
                <Text h2 style={styles.itemName} >{item.name}</Text>
                {!item.is_tracked ?
                    <Text style={[ styles.statusBar, styles.untracked ]} >
                        UNTRACKED
                    </Text>
                : item.is_depleted ?
                    <Text style={[ styles.statusBar, styles.depleted ]} >
                        DEPLETED
                    </Text>
                : item.is_running_out ?
                    <Text style={[ styles.statusBar, styles.almsotOut ]} >
                        ALMOST OUT
                    </Text>
                :
                    <Text style={[ styles.statusBar, styles.inStock ]} >
                        IN STOCK
                    </Text>
                }
                <Text style={styles.info}>{`You usually use ${rate} ${rate === 1 ? item.unit.singular : item.unit.plural} every ${time} days`}</Text>
            </View>
        );
    }
    else return <></>
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    itemName: {
        textTransform: "capitalize",
        textAlign: "center",
        borderBottomColor: "rgba(0.2, 0.2, 0.2, 0.5)",
        borderBottomWidth: 2,
    },
    statusBar: {
        width: "100%",
        textAlign: "center",
        padding: 5,
    },
    untracked: { backgroundColor: "grey" },
    depleted: { backgroundColor: "crimson" },
    almostOut: { backgroundColor: "orange" },
    inStock: { backgroundColor: "lightgreen" },
    info: {
        paddingTop: 10,
    },
});

export default ItemDetails;
