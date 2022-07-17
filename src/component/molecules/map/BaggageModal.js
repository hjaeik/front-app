import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import SaiBaggage from '../../atoms/common/SaiBaggage';

const BaggageModal = ({ visible, onClose, onOk }) => {
  const [box, setBox] = useState({ name: '', height: 0, width: 0, length: 0 });

  const handleChange = (value) => {
    setBox({ ...box, ...value });
  };

  return (
    <Modal
      isVisible={visible}
      hasBackdrop={true}
      backdropColor={'rgba(0,0,0,0.5)'}
      style={{ margin: 0 }}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
    >
      <View style={styles.bottomView}>
        <View style={styles.modalView}>
          <SaiBaggage onChange={handleChange} value={box} />
          <View style={styles.rows}>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={onClose}>
              <Text style={styles.textStyle}>취소</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={onOk}>
              <Text style={styles.textStyle}>확인</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  test: { backgroundColor: 'skyblue', height: 300 },
  bottomView: {
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    width: Dimensions.get('window').width,

    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 7,
    elevation: 2,
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sai_Text: {
    lineHeight: 25,
    color: 'dimgray',
  },
  rows: {
    flexDirection: 'row',
  },
});

export default BaggageModal;
