import React from "react"
import { StyleSheet, View } from "react-native"
import { Text } from "react-native-elements";

import { prettyDateTimeFromSQL } from "../../util/DateTime";

const EventFeedItem = ({ event }) => {
    const plural = event.delta == 1 ? event.item.unit.singular : event.item.unit.plural;

    return (
        <View style={styles.container}>
            <View style={[styles.scarf, { backgroundColor:
                    event.event_type === "GET" ?            "lightgreen"
                :   event.event_type === "DEPLETE" ?        "crimson"
                :   event.event_type === "NEAR_DEPLETED" ?  "orange"
                :   event.event_type === "START" ?          "aquamarine"
                :   event.event_type === "STOP" ?           "mediumvioletred"
                :                                           "purple"
            }]}/>

            <View style={styles.card} >
                <Text style={[ styles.name ]} >{`${event.user.name}`}</Text>
                {
                    event.event_type === "GET" ?
                        <Text style={[ styles.message ]} >{`Picked up `}<Text style={{fontWeight: "bold"}}>{`${event.delta} ${plural ? plural + " of " : ""}${event.item.name}`}
                        </Text></Text>

                    : event.event_type === "DEPLETE" ?
                        <Text style={[ styles.message ]} >{`We ran out of `}<Text style={{fontWeight: "bold"}}>{`${event.item.name}`}</Text></Text>

                    : event.event_type === "NEAR_DEPLETED" ?
                        <Text style={[ styles.message ]} >{`We're nearly out of `}<Text style={{fontWeight: "bold"}}>{`${event.item.name}`}</Text></Text>
                    
                    : event.event_type === "START" ?
                        <Text style={[ styles.message ]} >{`Started tracking `}<Text style={{fontWeight: "bold"}}>{`${event.item.name}`}</Text></Text>
                    
                    : event.event_type === "STOP" ?
                        <Text style={[ styles.message ]} >{`Stopped tracking `}<Text style={{fontWeight: "bold"}}>{`${event.item.name}`}</Text></Text>
                
                    :
                        <>
                            <Text style={[ styles.message ]} >{`Did something unexpected`}</Text>
                            {console.error(`unexpected event type: ${event.event_type}`)}
                        </>
                }
                <Text style={[ styles.date ]} >{prettyDateTimeFromSQL(event.date_time)}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "rgba( 0.2, 0.2, 0.2, 0.5 )",
        paddingHorizontal: 10,
    },
    scarf: {
        width: 20,
    },
    card: {
        flex: 1,
        padding: 10,
    },
    name: {
        fontWeight: "bold",
    },
    message: {

    },
});

export default EventFeedItem;
