import React, { useState, useEffect, useContext } from "react";
import { Text } from "react-native";

import axios from "axios";

import Layout from "../shared/Layout.jsx";
import EventFeed from "../shared/EventFeed.jsx";

import SessionDataContext from "../context/SessionDataContext";

const Activity = () => {
    const { sessionData, setSessionData } = useContext(SessionDataContext);
    const [ events, setEvents ] = useState([]);
    const [ activity, setActivity ] = useState(true);

    // ON MOUNT
    // FETCH supplies in current group
    useEffect(() => {
        const makeAPICall = async () => {
            setActivity(true);
            try {
                const response = await axios({
                    url: `https://mxk-supply-api.herokuapp.com/groups/${sessionData.group.id}/supplies/${sessionData.supply.id}/events`,
                    method: "GET"
                });
                setEvents(response.data);
            } catch (err) {
                console.error(err);
            }
            setActivity(false);
        };
        makeAPICall();
    },[]);

    return (
        <Layout>
            <EventFeed events={events} activity={activity} />
        </Layout>
    )
}

export default Activity