import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../component/templates/Chat';

const ChatRoute = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default ChatRoute;
