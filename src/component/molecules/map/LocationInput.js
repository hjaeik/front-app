import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import PointInput from '../../atoms/map/PointInput';
import { SET_SRC_POINT, SET_DST_POINT } from '../../../redux/map/map';

const LocationInput = () => {
  const navigation = useNavigation();

  const [srcAddress, dstAddress] = useSelector((state) => [
    state.map.srcAddress,
    state.map.dstAddress,
  ]);

  return (
    <View style={styles.fromTo_View}>
      <View style={styles.fromTo_InnerView}>
        <View style={styles.circleWrapper}>
          <View style={[styles.circle, { borderColor: 'green' }]} />
        </View>
        <PointInput
          placeholder="출발지를 입력하세요."
          value={srcAddress}
          onPress={() => {
            navigation.navigate('PlaceSearch', {
              placeholder: '출발지를 입력하세요.',
              action: SET_SRC_POINT,
              value: srcAddress,
            });
          }}
        />
      </View>
      <View style={styles.fromTo_InnerView}>
        <View style={styles.circleWrapper}>
          <View style={[styles.circle, { borderColor: 'red' }]} />
        </View>
        <PointInput
          placeholder="목적지를 입력하세요."
          value={dstAddress}
          onPress={() => {
            navigation.navigate('PlaceSearch', {
              placeholder: '목적지를 입력하세요.',
              action: SET_DST_POINT,
            });
          }}
        />
      </View>
      <Button
        title="next"
        onPress={() => {
          navigation.navigate('MapStepCalendar');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fromTo_View: {
    position: 'absolute',
    width: '80%',
    left: '10%',
    bottom: '3%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    borderColor: 'gainsboro',
    borderWidth: 0.3,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  fromTo_InnerView: {
    backgroundColor: 'rgba(228, 228, 228, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(228, 228, 228, 0.9)',
  },
  circleWrapper: {
    width: 30,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  circle: {
    borderWidth: 3,
    borderRadius: 10,
    opacity: 0.9,
  },
});

export default LocationInput;
