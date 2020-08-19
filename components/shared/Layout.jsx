import React, { useContext } from "react";
import { Dimensions, View, Platform, StatusBar } from 'react-native';
import { Text, Header } from 'react-native-elements';
import Octicons from "react-native-vector-icons/Octicons";

import SessionDataContext from "../context/SessionDataContext";

const Layout = ({ children }) => {
    const { sessionData, setSessionData } = useContext(SessionDataContext);

    const headerHeight = 60;

    return (
        <View style={
            {
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height,
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            }} >
            <Header containerStyle = {{ height: headerHeight, backgroundColor: sessionData.supply.color || "#2B89DC" }} >

                {/* leftComponent */}
                <></>

                {/* centerComponent */}
                <Text
                    adjustsFontSizeToFit
                    minimumFontScale={0.5}
                    numberOfLines={1}
                    style={{
                        // fontSize: 20,
                        fontWeight: "bold",
                        color: "#fff"
                    }}
                >
                    {`${sessionData.group.name}${sessionData.supply.name ? " > " + sessionData.supply.name : ""}`}
                </Text>

                {/* rightComponent */}
                <Octicons name="sign-out" size={30} color="#fff" />

            </Header>
            <View style={{ height: Dimensions.get("window").height - headerHeight }}>
                {children}
                <View style={{height: 60}}/>
            </View>
        </View>
    );
};

export default Layout;