import React from 'react';
import { StyleSheet, View } from 'react-native';

const SaiAddIcon = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.box1}>
        <View style={[styles.box2, { borderBottomWidth: 2, borderRightWidth: 2 }]} />
        <View style={[styles.box2, { borderRightWidth: 2, borderTopWidth: 2 }]} />
      </View>
      <View style={styles.box1}>
        <View style={[styles.box2, { borderBottomWidth: 2, borderLeftWidth: 2 }]} />
        <View style={[styles.box2, { borderTopWidth: 2, borderLeftWidth: 2 }]} />
      </View>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 100,
    borderStyle: 'dashed',
    borderColor: 'gray',
    borderRadius: 1,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box1: {
    width: '40%',
    height: '80%',
  },
  box2: {
    padding: 5,
    width: '100%',
    height: '50%',
    borderColor: 'gray',
  },
});
export default SaiAddIcon;
