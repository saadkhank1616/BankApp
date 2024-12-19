import {Spacer} from '@common/spacer';
import {hp} from '@enums';
import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';

export const CustomModal = ({visible, onClose, children}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Spacer height={hp(30)} />
        {/* <View style={styles.modalContainer}> */}
        <View style={styles.content}>{children}</View>
        {/* </View> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // marginTop: 100,
  },
  modalContainer: {
    // width: wp(90),
    backgroundColor: 'white',
    // borderRadius: 10,
    // padding: 40,
    // alignItems: 'center',
    shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  content: {
    // marginBottom: 20,
  },
});
