import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Record from './Record';
import Start from './Start';
import Explain from './Explain';
import End from './End';

const Stack = createStackNavigator();

const RecordRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"Start"}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Explain" component={Explain} />
      <Stack.Screen name="Record" component={Record} />
      <Stack.Screen name="End" component={End} />
    </Stack.Navigator>
  )
}

export default RecordRoutes;