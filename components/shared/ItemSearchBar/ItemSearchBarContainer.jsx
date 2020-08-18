import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import axios from "axios";

import SessionDataContext from "../../context/SessionDataContext";

import ItemSearchBar from "./ItemSearchBar.jsx";

const ItemSearchBarContainer = () => {
    const { sessionData, setSessionData } = useContext(SessionDataContext);
    const [ query, setQuery ] = useState("");

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

    const handleChange = (value) => {
        setQuery(value);
    }

    // FIND item matching the current search query
    // FETCH that item's data
    const handleSearch = async () => {
        // console.log(sessionData.items);
        const item = sessionData.items.find( (item) => item.name === query )
        console.log(item);
        console.log(item.id);
        if( item ) {
            axios({
                url: `https://mxk-supply-api.herokuapp.com/groups/${sessionData.group.id}/supplies/${sessionData.supplies.id}/items/${item.id}`,
                method: "GET"
            })
            .then( (response) => {
                console.log(response.data);
                setSessionData({ ...sessionData, item: response.data });
                // setQuery("");
            })
            .catch((error) => console.error(error));
        } else {
            console.error("item not found")
        }
    }

    return <ItemSearchBar query={query} handleChange={handleChange} handleSearch={handleSearch} />
}

export default ItemSearchBarContainer
