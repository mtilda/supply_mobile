import React, { useState, useEffect, useContext } from "react";
import { Text } from "react-native";

import axios from "axios";

import Layout from "../shared/Layout.jsx";
import EventFeed from "../shared/EventFeed.jsx";

import SessionDataContext from "../context/SessionDataContext";

const Activity = () => {
    const { sessionData, setSessionData } = useContext(SessionDataContext);
    const [ events, setEvents ] = useState([]);
    const [ eventsActivity, setEventsActivity ] = useState(true);
    const [ units, setUnits ] = useState([]);
    const [ unitsActivity, setUnitsActivity ] = useState(true);

    // ON MOUNT
    // FETCH units
    useEffect(() => {
        const makeAPICall = async () => {
            setUnitsActivity(true);
            try {
                const response = await axios({
                    url: `https://mxk-supply-api.herokuapp.com/units`,
                    method: "GET"
                });
                setUnits(response.data);
            } catch (err) {
                console.error(err);
            }
            setUnitsActivity(false);
        };
        makeAPICall();
    },[]);

    // ON MOUNT
    // FETCH events in current supply
    useEffect(() => {
        const makeAPICall = async () => {
            setEventsActivity(true);
            try {
                const response = await axios({
                    url: `https://mxk-supply-api.herokuapp.com/groups/${sessionData.group.id}/supplies/${sessionData.supply.id}/events`,
                    method: "GET"
                });
                setEvents(response.data);
            } catch (err) {
                console.error(err);
            }
            setEventsActivity(false);
        };
        makeAPICall();
    },[sessionData.supply.id]);

    return (
        <Layout>
            <EventFeed events={events} units={units} activity={eventsActivity && unitsActivity} />
        </Layout>
    )
}

export default Activity