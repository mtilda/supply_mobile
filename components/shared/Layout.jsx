import React from "react";
import { Dimensions, View, Platform, StatusBar } from 'react-native';
import { Text, Header } from 'react-native-elements';
import Octicons from "react-native-vector-icons/Octicons";

const groupTitle = "House", supplyTitle = "Groceries"

const Layout = ({ children }) => {

    const headerHeight = 60;

    return (
        <View style={
            {
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height,
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            }} >
            <Header containerStyle = {{ height: headerHeight }} >

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
                    {`${groupTitle} > ${supplyTitle}`}
                </Text>

                {/* rightComponent */}
                <Octicons name="sign-out" size={30} color="#fff" />

            </Header>
            <View style={{ height: Dimensions.get("window").height - headerHeight }}>
                {children}
            </View>
        </View>
    );
};

export default Layout;