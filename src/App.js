import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './screens/Main';
// import Join from './screens/Join';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Main"}
      >
        <Stack.Screen name="Main" component={Main} />
        {/* <Stack.Screen name="Join" component={Join} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
