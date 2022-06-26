import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Config from 'react-native-config';

const PlaceSearch = ({ route }) => {
  const navigation = useNavigation();
  const ref = useRef();
  const dipatch = useDispatch();

  const { placeholder, action } = route.params;

  useEffect(() => {
    Geocoder.init(Config.RN_GEOCODING_APIKEY, { language: 'ko' });
  }, []);

  const pressAction = (data, _) => {
    // 'details' is provided when fetchDetails = true
    Geocoder.from(data.description)
      .then((json) => {
        const geoLocation = json.results[0].geometry.location;
        dipatch({
          type: action,
          payload: {
            address: data.structured_formatting.main_text,
            addressDetail: data.description,
            coordinate: {
              latitude: geoLocation.lat,
              longitude: geoLocation.lng,
            },
          },
        });
        navigation.navigate('Map');
      })
      .catch((error) => console.warn(error));
  };

  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      ref={ref}
      fetchDetails={true}
      onPress={pressAction}
      styles={{ description: { fontSize: 12, color: 'gray' } }}
      onFail={(data) => {
        console.warn(data);
      }}
      query={{
        key: Config.RN_AUTOCOMPLETE_APIKEY,
        language: 'ko',
        components: 'country:kr',
        // types: 'address',
      }}
      requestUrl={{
        useOnPlatform: 'web', // or "all"
        url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
      }}
      enablePoweredByContainer={false}
    />
  );
};

export default PlaceSearch;
