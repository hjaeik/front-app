import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import SaiTimePicker from '../../atoms/common/SaiTimePicker';

const TimeModal = ({ selectTime, visible, closeAction, changeAction }) => {
  return (
    <Modal
      isVisible={visible}
      hasBackdrop={true}
      backdropColor={`rgba(0,0,0,0.5)`}
      style={{ margin: 0 }}
      onBackdropPress={closeAction}
      onBackButtonPress={closeAction}
    >
      <View style={styles.bottomView}>
        <View style={styles.modalView}>
          <View style={styles.timePicker}>
            <SaiTimePicker initialTime={selectTime} selectTimeFunc={(time) => changeAction(time)} />
          </View>
          <Pressable style={[styles.button, styles.buttonClose]} onPress={closeAction}>
            <Text style={styles.textStyle}>확인</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  timePicker: {
    height: 250,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
  button: {
    borderRadius: 15,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TimeModal;
