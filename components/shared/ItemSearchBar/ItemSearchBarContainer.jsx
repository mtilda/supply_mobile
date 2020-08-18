import React, { useState, useContext } from "react"
import { View } from "react-native"

import SessionDataContext from "../../context/SessionDataContext";

import ItemSearchBar from "./ItemSearchBar.jsx";

const ItemSearchBarContainer = () => {
    const { sessionData, setSessionData } = useContext(SessionDataContext);
    const [ query, setQuery ] = useState("");

    const handleChange = (value) => {
        setQuery(value);
    }

    const handleSearch = async () => {
        
        axios.get(`https://mxk-supply-api.herokuapp.com/groups/${sessionData.group.id}/supplies/${sessionData.supply.id}/items/${sessionData.item.id}`)
        .then( (response) => {
            setSessionData({ sessionData, item: response.data })
            // setQuery("");
        })
        .catch((error) => console.error(error));
    }

    return <ItemSearchBar query={query} handleChange={handleChange} handleSearch={handleSearch} />
}

export default ItemSearchBarContainer
