import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home";
import Join from "./Join";
import Category from "./Category";
import AudioList from "./AudioList";
import AudioScreen from "./Audio";
import RecordRoutes from "./RecordRoutes";
import QuestionRoutes from "./QuestionRoutes";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarVisible: false,
        }}
      />

      <Tab.Screen
        name="Record"
        component={RecordRoutes}
        options={{
          tabBarVisible: false,
        }}
      />
      <Tab.Screen 
        name="Category" 
        component={Category} 
        options={{
          tabBarVisible: false,
        }}
      />
      <Tab.Screen 
        name="Join" 
        component={Join} 
        options={{
          tabBarVisible: false,
        }}
      />
      <Tab.Screen 
        name="AudioList" 
        component={AudioList} 
        options={{
          tabBarVisible: false,
        }}
      />
      <Tab.Screen 
        name="QuestionRoutes" 
        component={QuestionRoutes} 
        options={{
          tabBarVisible: false,
        }}
      />
      <Tab.Screen 
        name="AudioScreen" 
        component={AudioScreen} 
        options={{
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
