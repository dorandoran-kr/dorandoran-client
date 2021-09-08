import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../components/theme";

import Home from "./Home";
import AudioCopy from "./AudioCopy";
// import Record from "./Record";
import RecordRoutes from "./RecordRoutes";
import Category from "./Category";
import Join from "./Join";
import QuestionRoutes from "./QuestionRoutes";

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
          shadowOpacity: 0.3,
          shadowRadius: 3,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
      }}
      initialRouteName="Join"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarVisible: false,
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
        name="AudioCopy"
        component={AudioCopy}
        options={{
          tabBarVisible: false,
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
        name="Record"
        component={RecordRoutes}
        options={{
          tabBarVisible: false,
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
          tabBarVisible: false,
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
        name="Join" 
        component={Join} 
        options={{
          tabBarVisible: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="camera"
              size={24}
              color={focused ? COLORS.green : COLORS.lightGray}
            />
          ),
        }}
      />
      <Tab.Screen name="QuestionRoutes" component={QuestionRoutes} />
    </Tab.Navigator>
  );
};

export default Main;
