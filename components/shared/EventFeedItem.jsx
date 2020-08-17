import React from "react"
import { View } from "react-native"
import { Text } from "react-native-elements";

const EventFeedItem = ({ event }) => (
    <View>
        <Text>{`${event.user.name}`}</Text>
        {
            event.event_type === "GET" ?

                <View>
                    <Text>{`picked up ${event.delta} ${
                        event.delta == 1 ?
                            event.item.unit.singular
                        :
                            event.item.unit.plural
                        } of ${event.item.name}`}</Text>
                </View>

            : event.event_type === "DEPLETE" ?

                <Text>{`${event.item.name} ran out`}</Text>

                : event.event_type === "NEAR_DEPLETED" ?

                <Text>{`${event.item.name} is almost out`}</Text>
            
            : event.event_type === "START" ?

                <Text>{`started tracking ${event.item.name}`}</Text>
            
            : event.event_type === "STOP" ?

                <Text>{`stopped tracking ${event.item.name}`}</Text>
        
            :
                <>
                    <Text>{`did something unexpected`}</Text>
                    {console.error(`unexpected event type: ${event.event_type}`)}
                </>
        }
    </View>
);

export default EventFeedItem;
