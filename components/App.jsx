import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Home from "./Home.jsx";
import Activity from "./Activity.jsx";
import Inventory from "./Inventory.jsx";
import ItemCreate from "./ItemCreate.jsx";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
            
            size = 40;

            let iconName;

            switch(route.name) {
              case "Supplies":
                iconName = "buromobelexperte"
              break;
              case "Activity":
                iconName = "list";
              break;
              case "Inventory":
                iconName = "shopping-cart";
              break;
              case "New Item":
                iconName = "plus-square";
              break;
              default:
              break;
            }

            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          showLabel: false,
          style: { height: 70 },
        }}
      >
        <Tab.Screen name="Supplies" component={Home} options={{ size: 10 }} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Inventory" component={Inventory} />
        <Tab.Screen name="New Item" component={ItemCreate} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}