import React from 'react';
import { Dimensions } from 'react-native';
import ScrollPicker from './ScrollPicker';
import { hourData, minuteData } from '../../../utils/Calendar';

const SaiTimePicker = ({ initialTime, selectTimeFunc }) => {
  let result = [hourData[0], minuteData[0]];
  let selectedHourIndex = 0;
  let selectedMinuteIndex = 0;
  if (initialTime) {
    const temp = initialTime.split(':');
    selectedHourIndex = hourData.indexOf(temp[0]);
    selectedMinuteIndex = minuteData.indexOf(temp[1]);
    result = [hourData[selectedHourIndex], minuteData[selectedMinuteIndex]];
  }

  const selectTime = (flag, index) => {
    if (flag === 'H') {
      result[0] = hourData[index];
    } else {
      result[1] = minuteData[index];
    }
    if (selectTimeFunc) {
      selectTimeFunc(result[0] + ':' + result[1]);
    }
  };

  return (
    <>
      <ScrollPicker
        selectedIndex={selectedHourIndex}
        wrapperHeight={250}
        wrapperWidth={Dimensions.get('window').width / 2}
        data={hourData}
        onSelect={(index) => selectTime('H', index)}
      />
      <ScrollPicker
        selectedIndex={selectedMinuteIndex}
        wrapperHeight={250}
        wrapperWidth={Dimensions.get('window').width / 2}
        data={minuteData}
        onSelect={(index) => selectTime('M', index)}
      />
    </>
  );
};

export default SaiTimePicker;
