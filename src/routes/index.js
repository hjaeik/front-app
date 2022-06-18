import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MapRoute from './MapRoute';
import My from '../component/templates/My';
import Chat from '../component/templates/Chat';
import Search from '../component/templates/Search';

const Route = () => {
  const Tab = createBottomTabNavigator();
  const TAB_NAV_OPTION = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={TAB_NAV_OPTION}>
        <Tab.Screen name="map" component={MapRoute} />
        <Tab.Screen name="search" component={Search} />
        <Tab.Screen name="chat" component={Chat} />
        <Tab.Screen name="my" component={My} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Route;
