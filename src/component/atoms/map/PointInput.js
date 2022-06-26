import React from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';

const PointInput = ({ placeholder, value, onPress }) => {
  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <TextInput
        style={styles.fromTo_TextInput}
        placeholder={placeholder}
        value={value}
        editable={false}
        selectTextOnFocus={false}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    width: '85%',
    height: '100%',
  },
  fromTo_TextInput: {
    color: 'black',
    width: '100%',
    height: '100%',
  },
});

export default PointInput;
