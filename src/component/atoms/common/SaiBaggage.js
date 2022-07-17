import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const SaiBaggage = ({ onChange, value }) => {
  const { name, height, width, length } = value;

  return (
    <View style={{}}>
      <TextInput
        style={{ backgroundColor: '#e4e4e4' }}
        value={name}
        placeholder="물건명을 입력해주세요."
        onChangeText={(name) => {
          onChange({ name });
        }}
      />
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.baggage_out}>
            <Text style={{ fontSize: 17 }}>높이</Text>
          </View>
          <MultiSlider
            sliderLength={200}
            min={10}
            max={309}
            step={10}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            onValuesChange={(height) => {
              onChange({ height });
            }}
          />
          <View style={styles.baggageValue}>
            <Text style={{ fontSize: 17 }}>{height}</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.baggage_out}>
          <Text style={{ fontSize: 17 }}>가로</Text>
        </View>
        <MultiSlider
          sliderLength={200}
          min={10}
          max={309}
          step={10}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValuesChange={(width) => {
            onChange({ width });
          }}
        />
        <View style={styles.baggageValue}>
          <Text style={{ fontSize: 17 }}>{width}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.baggage_out}>
          <Text style={{ fontSize: 17 }}>세로</Text>
        </View>
        <MultiSlider
          sliderLength={200}
          min={10}
          max={309}
          step={10}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValuesChange={(length) => {
            onChange({ length });
          }}
        />
        <View style={styles.baggageValue}>
          <Text style={{ fontSize: 17 }}>{length}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baggage_out: {
    padding: 5,
    alignItems: 'center',
    width: 40,
    marginRight: 20,
  },
  baggageValue: {
    marginTop: 5,
    marginBottom: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    borderColor: 'gray',
    padding: 5,
    alignItems: 'center',
    width: 70,
    marginLeft: 5,
  },

  input: {
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,

    backgroundColor: 'gray',
    flex: 1,
  },
});

export default SaiBaggage;
