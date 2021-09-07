import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Login from './Login';
import Password from './Password';
import Signup from './Signup';

const Join = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"Login"}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

export default Join;