import React from "react";
import { View, Platform, StatusBar } from 'react-native';

const Layout = ({ children }) => {
    return (
        <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} >
            {children}
        </View>
    );
};

export default Layout;