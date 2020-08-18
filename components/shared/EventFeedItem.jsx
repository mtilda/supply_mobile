import React from "react"
import { StyleSheet, View } from "react-native"
import { Text } from "react-native-elements";

import { prettyDateTimeFromSQL } from "../../util/DateTime";

const EventFeedItem = ({ event }) => (
    <View style={[ styles.container, {backgroundColor:
            event.event_type === "GET" ?            "green"
        :   event.event_type === "DEPLETE" ?        "red"
        :   event.event_type === "NEAR_DEPLETED" ?  "yellow"
        :   event.event_type === "START" ?          "orange"
        :   event.event_type === "STOP" ?           "teal"
        :                                           "purple"
    }]}>
        <Text style={[ styles.name ]} >{`${event.user.name}`}</Text>
        {
            event.event_type === "GET" ?
                <Text style={[ styles.message ]} >{`picked up ${event.delta} ${
                    event.delta == 1 ?
                        event.item.unit.singular
                    :
                        event.item.unit.plural
                    } of ${event.item.name}`}
                </Text>

            : event.event_type === "DEPLETE" ?
                <Text style={[ styles.message ]} >{`we ran out of ${event.item.name}`}</Text>

            : event.event_type === "NEAR_DEPLETED" ?
                <Text style={[ styles.message ]} >{`we're nearly out of ${event.item.name}`}</Text>
            
            : event.event_type === "START" ?
                <Text style={[ styles.message ]} >{`started tracking ${event.item.name}`}</Text>
            
            : event.event_type === "STOP" ?
                <Text style={[ styles.message ]} >{`stopped tracking ${event.item.name}`}</Text>
        
            :
                <>
                    <Text style={[ styles.message ]} >{`did something unexpected`}</Text>
                    {console.error(`unexpected event type: ${event.event_type}`)}
                </>
        }
        <Text style={[ styles.date ]} >{prettyDateTimeFromSQL(event.date_time)}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderBottomColor: "rgba( 0.2, 0.2, 0.2, 0.5 )",
    },
    name: {

    },
    message: {

    },
});

export default EventFeedItem;
