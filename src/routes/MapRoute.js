import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Map from '../component/templates/map/Map';
import PlaceSearch from '../component/templates/map/PlaceSearch';
import MapStepCalendar from '../component/templates/map/MapStepCalendar';

const Route = () => {
  const Stack = createStackNavigator();
  const TAB_NAV_OPTION = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={TAB_NAV_OPTION}>
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="PlaceSearch" component={PlaceSearch} />
      <Stack.Screen name="MapStepCalendar" component={MapStepCalendar} />
    </Stack.Navigator>
  );
};

export default Route;
