import React, { useEffect, useState, useContext } from "react";

import Layout from "../shared/Layout.jsx"
import SupplyGrid from "./SupplyGrid"

import axios from "axios";

import SessionDataContext from "../context/SessionDataContext";

const Home = () => {
    const { sessionData, setSessionData } = useContext(SessionDataContext);
    const [ supplies, setSupplies ] = useState([]);
    const [ activity, setActivity ] = useState(true);

    useEffect(() => {
        const makeAPICall = async () => {
            setActivity(true);
            try {
                const response = await axios({
                    url: `http://localhost:3000/groups/1/supplies`,
                    method: "GET"
                });
                setSupplies(response.data);
            } catch (err) {
                console.error(err);
            }
            setActivity(false);
        };
        makeAPICall();
    },[])

    return (
        <Layout>
            <SupplyGrid supplies={supplies} activity={activity} />
        </Layout>
    )
}

export default Home