import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/Home';
import DetailedDay from '../../screens/DetailedDay';
import PastDays from '../../screens/PastDays';

const Stack = createStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailedDay"
        component={DetailedDay}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PastDays"
        component={PastDays}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
