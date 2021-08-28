import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../components/theme";

import Home from "./Home";
import Audio from "./Audio";
import Category from "./Category";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          height: 80,
          shadowColor: "#000",
          shadowOpacity: 0.30,
          shadowRadius: 3,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="camera"
              size={24}
              color={focused ? COLORS.green : COLORS.lightGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Audio"
        component={Audio}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="camera"
              size={24}
              color={focused ? COLORS.green : COLORS.lightGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="camera"
              size={24}
              color={focused ? COLORS.green : COLORS.lightGray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
