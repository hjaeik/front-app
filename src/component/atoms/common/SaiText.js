import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default ({ text }) => {
  return (
    <View style={styles.sai_View}>
      <Text style={styles.sai_Text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sai_View: {
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 4,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  sai_Text: {
    lineHeight: 25,
    color: 'dimgray',
  },
});
