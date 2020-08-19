import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import axios from "axios";

import SessionDataContext from "../context/SessionDataContext";

import Layout from "../shared/Layout";
import ItemSearchBarContainer from "../shared/ItemSearchBar/ItemSearchBarContainer.jsx";
import EventCreateForm from "./EventCreateForm";

const EventCreate = ({ navigation }) => {
    const { sessionData, setSessionData } = useContext(SessionDataContext);
    const [ eventData, setEventData ] = useState({
        dateTime: new Date(),
        eventTypeIndex: null,
        delta: null,
    });
    const [ eventDataActivity, setEventDataActivity ] = useState(false);

    const eventTable = [
        "GET",
        "DEPLETE",
        "WARN",
        "START",
        "STOP"
    ]


    const handleEventTypeIndexChange = (index) => {
        setEventData({ ...eventData, eventTypeIndex: index })
    }

    // API requires { date_time, event_type, user_id },
    // and permits { delta }
    const handleSubmit = async () => {
        setEventDataActivity(true);
        // await axios({
        //     url: `https://mxk-supply-api.herokuapp.com/groups/${sessionData.group.id}/supplies/${sessionData.supply.id}/items/${sessionData.item.id}/events`,
        //     method: "POST",
        //     data: {
        //         date_time: eventData.dateTime,
        //         event_type: eventTable[eventData.eventTypeIndex],
        //         user_id: sessionData.user.id,
        //         delta: eventData.eventTypeIndex === 0 ? eventData.delta : null
        //     },
        // })
        // .then( (response) => {
        //     console.log(response);
        // })
        // .catch(console.error);
        setEventDataActivity(false)
      };

    return (
        <Layout>
            <ItemSearchBarContainer />
            <EventCreateForm
                item={sessionData.item}
                eventTypeIndex={eventData.eventTypeIndex}
                handleEventTypeIndexChange={handleEventTypeIndexChange}
                handleSubmit={handleSubmit}
                activity={eventDataActivity}
            />
        </Layout>
    );
}

export default EventCreate;