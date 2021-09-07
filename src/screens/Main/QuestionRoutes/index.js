import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Question from './Question';
import Select from './Select';
import End from './End';

const Stack = createStackNavigator();

const QuestionRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"Select"}
    >
      <Stack.Screen name="Select" component={Select} />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="End" component={End} />
    </Stack.Navigator>
  )
}

export default QuestionRoutes;