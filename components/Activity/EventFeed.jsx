import React from 'react';
import { ActivityIndicator, ScrollView, View, Text } from 'react-native';

import EventFeedItem from "./EventFeedItem";

const EventFeed = ({ events, units, activity }) => {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            {
                activity ?
                    <ActivityIndicator />
                : events[0]? units[0]?
                    <ScrollView>
                        { events.map( (event, index) => <EventFeedItem key={index} event={event} /> ) }
                    </ScrollView>
                :
                    <Text>Failed to fetch units</Text>
                : units[0]?
                    <Text>There has been no activity in this supply</Text>
                :
                    <Text>Unable to fetch data from server</Text>
            }
        </View>
    );
}

export default EventFeed;