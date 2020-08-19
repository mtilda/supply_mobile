import React from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { Button, ButtonGroup, Input, Text } from "react-native-elements";

const EventCreateForm = ({ item, eventTypeIndex, handleEventTypeIndexChange, handleSubmit, activity }) => {

    const eventTypeIndexButtons = [
        "GOT MORE",
        "RAN OUT",
        "ALMOST OUT",
        "START TRACKING",
        "STOP TRACKING"
    ];

    const buttonColors = ["lightgreen","crimson","orange","aquamarine","mediumvioletred"];

    const disabledEventTypeIndexButtons = [
    ]

    return activity ?
        <ActivityIndicator /> :
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    { item && item.unit ?
                        <>
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
                            <ButtonGroup
                                onPress={(selection) => {
                                    handleEventTypeIndexChange(selection);
                                }}
                                selectedIndex={eventTypeIndex}
                                buttons={eventTypeIndexButtons}
                                disabled={disabledEventTypeIndexButtons}
                                vertical={true}
                                containerStyle={styles.buttonGroupContainer}
                                buttonStyle={styles.buttonGroupButton}
                                selectedButtonStyle={{backgroundColor: buttonColors[eventTypeIndex]}}
                                disabledStyle={styles.buttonGroupDisabled}
                            />
                            { eventTypeIndex===0?
                                <Input
                                    label="How much?"
                                />
                            :<></>}
                            <Button
                                title="Submit"
                                onPress={handleSubmit}
                            />
                        </>
                    :
                        <Text>Use the search bar to find an item</Text>
                    }
                </View>
            </ScrollView>
        </View>
    ;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "80%",
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
    depleted: { backgroundColor: "tomato" },
    almostOut: { backgroundColor: "coral" },
    inStock: { backgroundColor: "#00FA9A" },
    buttonGroupContainer: {
        height: 300,
    },
    buttonGroupDisabled: {
        backgroundColor: "lightgrey",
    },
});

export default EventCreateForm;