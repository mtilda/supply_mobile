import React, { useEffect, useState, useContext } from "react";

import Layout from "../shared/Layout.jsx"
import SupplyGrid from "./SupplyGrid"

import axios from "axios";

import SessionDataContext from "../context/SessionDataContext";

const Home = () => {
    const { sessionData, setSessionData } = useContext(SessionDataContext);
    const [ supplies, setSupplies ] = useState([]);
    const [ activity, setActivity ] = useState(true);


    // ON MOUNT
    // FETCH supplies in current group
    useEffect(() => {
        const makeAPICall = async () => {
            setActivity(true);
            try {
                const response = await axios({
                    url: `http://localhost:3000/groups/${sessionData.group.id}/supplies`,
                    method: "GET"
                });
                setSupplies(response.data);
            } catch (err) {
                console.error(err);
            }
            setActivity(false);
        };
        makeAPICall();
    },[]);

    const selectSupply = (index) => {
        const supply = supplies[index];
        if (supply) {
            setSessionData({ ...sessionData, supply: supply });
        }
        else {
            console.error("selected supply does not exist");
        }
    }

    return (
        <Layout>
            <SupplyGrid supplies={supplies} selectSupply={selectSupply} activity={activity} />
        </Layout>
    )
}

export default Home