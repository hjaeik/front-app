import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import My from '../component/templates/My';

const MyRoute = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="My" component={My} />
    </Stack.Navigator>
  );
};

export default MyRoute;
