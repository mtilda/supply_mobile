import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import  { SearchBar } from "react-native-elements";
import axios from "axios";

import SessionDataContext from "../../context/SessionDataContext";

import ItemSearchBar from "./ItemSearchBar.jsx";

const ItemSearchBarContainer = () => {
    const { sessionData, setSessionData } = useContext(SessionDataContext);
    const [ query, setQuery ] = useState("");
    const [ message, setMessage ] = useState({content: "", error: false});

    // ON MOUNT or CHANGE of group, supply
    // FETCH items in current group, supply
    useEffect( () => {
        axios({
            url: `https://mxk-supply-api.herokuapp.com/groups/${sessionData.group.id}/supplies/${sessionData.supply.id}/items`,
            method: "GET"
        })
        .then( (response) => {
            console.log("FETCH ITEMS", response.data)
            setSessionData({ ...sessionData, items: response.data })
        })
        .catch((error) => console.error(error));
    },[sessionData.group, sessionData.supply]);

    useEffect( () => {
        const item = sessionData.items.find( (item) => item.name === query )
        if( query.length > 0 ) {
            if( item && item.id ) {
                setMessage({content: "searching...", error: false});
                axios({
                    url: `https://mxk-supply-api.herokuapp.com/groups/${sessionData.group.id}/supplies/${sessionData.supplies.id}/items/${item.id}`,
                    method: "GET"
                })
                .then( (response) => {
                    setSessionData({ ...sessionData, item: response.data });
                    setMessage({content: "", error: false});
                })
                .catch((error) => setMessage({content: error, error: true}));
            } else {
                setMessage({content: "item not found", error: true})
            }
        } else {
            setSessionData({ ...sessionData, item: {} });
        }
    },[query])

    const handleChange = (value) => {
        setQuery(value);
    }

    const handleCancel = async () => {
        setQuery("");
    }

    return <ItemSearchBar query={query} message={message} handleChange={handleChange} handleCancel={handleCancel} />
}

export default ItemSearchBarContainer
