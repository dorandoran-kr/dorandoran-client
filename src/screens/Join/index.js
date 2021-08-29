import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Login from './Login';
import Phone from './Phone';
import Signup from './Signup';

const Join = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"MyPage"}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Phone" component={Phone} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

export default Join;