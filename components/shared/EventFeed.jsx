import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

import EventFeedItem from "./EventFeedItem";

const EventFeed = ({ events, units, activity }) => {
    return (
        <View>
            {
                activity ?
                    <ActivityIndicator />
                :
                    events[0]?
                        units[0]?
                            events.map( (event, index) => <EventFeedItem key={index} event={event} /> )
                        :
                            <Text>Failed to fetch units</Text>
                    :
                        units[0]?
                            <Text>There has been no activity in this supply</Text>
                        :
                            <Text>Unable to fetch data from server</Text>
            }
        </View>
    );
}

export default EventFeed;