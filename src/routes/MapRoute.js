import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Map from '../component/templates/Map';

const Route = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

export default Route;
