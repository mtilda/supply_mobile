import React from "react";
import { View, Platform, StatusBar } from 'react-native';
import { Text, Header } from 'react-native-elements';
import Octicons from "react-native-vector-icons/Octicons";

const groupTitle = "House", supplyTitle = "Groceries"

const Layout = ({ children }) => {
    return (
        <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} >
            <Header containerStyle = {{ height: 60 }} >

                {/* leftComponent */}
                <></>

                {/* centerComponent */}
                <Text
                    adjustsFontSizeToFit
                    minimumFontScale={0.5}
                    numberOfLines={1}
                    style={{
                        // fontSize: 20,
                        fontWeight: 800,
                        color: "#fff"
                    }}
                >
                    {`${groupTitle} > ${supplyTitle}`}
                </Text>

                {/* rightComponent */}
                <Octicons name="sign-out" size={30} color="#fff" />

            </Header>
            {children}
        </View>
    );
};

export default Layout;