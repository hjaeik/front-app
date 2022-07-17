import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Map from '../component/templates/map/Map';
import PlaceSearch from '../component/templates/map/PlaceSearch';
import MapStepCalendar from '../component/templates/map/MapStepCalendar';
import MapStepBaggages from '../component/templates/map/MapStepBaggages';

const Route = () => {
  const Stack = createStackNavigator();
  const TAB_NAV_OPTION = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={TAB_NAV_OPTION}>
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="PlaceSearch" component={PlaceSearch} />
      <Stack.Screen
        name="MapStepCalendar"
        component={MapStepCalendar}
        options={{
          title: '정보 입력(날짜 입력)',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1F96F4', // 가운데 정렬
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="MapStepBaggages"
        component={MapStepBaggages}
        options={{
          title: '정보 입력(짐 추가)',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1F96F4', // 가운데 정렬
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Route;
