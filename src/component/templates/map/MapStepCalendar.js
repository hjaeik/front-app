import React, { useState } from 'react';
import { Button, ScrollView, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

import SaiText from '../../atoms/common/SaiText';
import { koLocale } from '../../../utils/Calendar';
import TimeModal from '../../molecules/map/TimeModal';
import SaiTimeInput from '../../atoms/common/SaiTimeInput';

const MapStepCalendar = () => {
  const [markDate, setMarkDate] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState('00:00');
  const minDate = moment().format('YYYY-MM-DD');
  const maxDate = moment().add(3, 'M').format('YYYY-MM-DD');
  const navigation = useNavigation();

  LocaleConfig.locales.KR = koLocale;
  LocaleConfig.defaultLocale = 'KR';

  const selectDate = (date) => {
    if (markDate[date]) {
      let dates = { ...markDate };
      delete dates[date];
      setMarkDate(dates);
    } else {
      setMarkDate({
        ...markDate,
        [date]: { selected: true },
      });
    }
  };
  const dayPress = (day) => selectDate(day.dateString);

  const closeModal = () => {
    setModalVisible(false);
  };
  const openModal = () => {
    setModalVisible(true);
  };
  const selectTime = (time) => {
    setSelectedTime(time);
  };

  return (
    <View>
      <ScrollView>
        <SaiText
          text={'운송 가능한 날짜, 시간을 입력해주세요.\n날짜 및 시간은 추후 입력 가능합니다.'}
        />
        <Calendar
          markedDates={markDate}
          minDate={minDate}
          maxDate={maxDate}
          monthFormat={'yyyy MMMM'}
          onDayPress={dayPress}
        />
        <SaiTimeInput selectedTime={selectedTime} onPress={openModal} />
        <Button
          title="다음"
          onPress={() => {
            navigation.navigate('MapStepCalendar');
          }}
        />
      </ScrollView>
      <TimeModal
        selectTime={selectedTime}
        visible={modalVisible}
        closeAction={closeModal}
        changeAction={selectTime}
      />
    </View>
  );
};

export default MapStepCalendar;
