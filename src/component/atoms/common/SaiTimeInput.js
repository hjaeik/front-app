import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const SaiTimeInput = ({ onPress, selectedTime }) => {
  return (
    <View style={styles.sai_View}>
      <View style={styles.timeInput}>
        <Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={onPress}>
          <Ionicons name={'time-outline'} size={25} color={'black'} />
          <Text
            style={{
              marginLeft: 10,
              paddingLeft: 10,
              paddingRight: 10,
              marginTop: 5,
              marginBottom: 5,
              fontSize: 17,
              backgroundColor: '#e4e4e4',
              borderRadius: 5,
              padding: 5,
            }}
          >
            {selectedTime}
          </Text>
        </Pressable>
      </View>
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
  timeInput: {
    // backgroundColor: '#e4e4e4',
    // borderRadius: 5,
    // padding: 5,
  },
});

export default SaiTimeInput;
