import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';

import LocationInput from '../../molecules/map/LocationInput';

const styles = StyleSheet.create({
  map: { ...StyleSheet.absoluteFillObject },
  view: { ...StyleSheet.absoluteFillObject },
});

const Map = () => {
  const [srcMarker, setSrcMarker] = useState();
  const [dstMarker, setDstMarker] = useState();
  const [location, setLocation] = useState({
    latitude: 37.538316,
    longitude: 126.9251165,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const [srcAddress, srcCoordinate, srcAddressDetail, dstAddress, dstCoordinate, dstAddressDetail] =
    useSelector((state) => [
      state.map.srcAddress,
      state.map.srcCoordinate,
      state.map.srcAddressDetail,
      state.map.dstAddress,
      state.map.dstCoordinate,
      state.map.dstAddressDetail,
    ]);

  useEffect(() => {
    if (srcCoordinate.latitude !== '' && srcCoordinate.longitude !== '') {
      setSrcMarker(
        <Marker
          coordinate={{
            latitude: srcCoordinate.latitude,
            longitude: srcCoordinate.longitude,
          }}
          title={srcAddress}
          description={srcAddressDetail}
        />,
      );
      setLocation({
        ...location,
        latitude: srcCoordinate.latitude,
        longitude: srcCoordinate.longitude,
      });
    } else {
      setSrcMarker();
    }
  }, [srcAddress, srcCoordinate, srcAddressDetail]);

  useEffect(() => {
    if (dstCoordinate.latitude !== '' && dstCoordinate.longitude !== '') {
      setDstMarker(
        <Marker
          coordinate={{
            latitude: dstCoordinate.latitude,
            longitude: dstCoordinate.longitude,
          }}
          title={dstAddress}
          description={dstAddressDetail}
        />,
      );
      setLocation({
        ...location,
        latitude: dstCoordinate.latitude,
        longitude: dstCoordinate.longitude,
      });
    } else {
      setDstMarker();
    }
  }, [dstAddress, dstCoordinate, dstAddressDetail]);

  useEffect(() => {
    if (srcMarker && dstMarker) {
      setLocation({
        latitude: (srcCoordinate.latitude + dstCoordinate.latitude) / 2,
        longitude: (srcCoordinate.longitude + dstCoordinate.longitude) / 2,
        latitudeDelta: Math.abs(srcCoordinate.latitude - dstCoordinate.latitude) * 2,
        longitudeDelta: Math.abs(srcCoordinate.longitude - dstCoordinate.longitude) * 2,
      });
    }
  }, [srcMarker, dstMarker]);

  return (
    <View style={styles.view}>
      <MapView style={styles.map} region={location}>
        {srcMarker}
        {dstMarker}
      </MapView>
      <LocationInput />
    </View>
  );
};

export default Map;
