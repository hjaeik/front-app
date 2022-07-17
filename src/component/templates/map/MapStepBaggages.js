import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import SaiText from '../../atoms/common/SaiText';
import SaiAddIcon from '../../atoms/common/SaiAddIcon';
import BaggageModal from '../../molecules/map/BaggageModal';

const MapStepBaggages = () => {
  const baggages = useSelector((state) => state.map.baggages);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleOk = (baggage, index) => {
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <View style={styles.stepBaggageView}>
        <TouchableOpacity onPress={handleOpenModal} activeOpacity={0.1}>
          <SaiAddIcon />
        </TouchableOpacity>
      </View>
      {baggages.length < 1 ? (
        <SaiText text={'운송할 물건의 정보를 입력해 주세요.'} />
      ) : (
        baggages.map((baggage) => <SaiText text={baggage.name + ' ' + baggage.height} />)
      )}
      <Button title="NEXT" />
      <BaggageModal visible={modalVisible} onClose={handleCloseModal} onOk={handleOk} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  test: { backgroundColor: 'skyblue', height: 300 },
  stepBaggageView: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapStepBaggages;
