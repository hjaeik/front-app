import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../component/templates/Search';

const SearchRoute = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default SearchRoute;
