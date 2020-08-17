import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

import EventFeedItem from "./EventFeedItem";

const EventFeed = ({ events, activity }) => {
    
    return (
        <View>
            {
                activity ?
                    <ActivityIndicator />
                :
                    events[0]?
                        events.map( (event, index) => <EventFeedItem key={index} event={event} />)
                    :
                        <Text>There has been no activity in this supply</Text>
            }
        </View>
    );
}

export default EventFeed;