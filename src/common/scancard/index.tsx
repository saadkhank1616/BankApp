import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScanCardIcon} from '@assets/icons';
import {styles} from './style';
import {Spacer} from '@common/spacer';
import {hp} from '@enums';

export const ScanCard = ({onPress}) => {
  return (
    <View style={styles().container}>
      <ScanCardIcon />
      <Text style={styles().heading}>Scan Qr</Text>
      <Spacer />
      <Text style={styles().text}>
        Did someone help you signup for mobile banking? Scan their QR below
      </Text>
      <Spacer height={hp(2)} />
      <TouchableOpacity style={styles().button} onPress={onPress}>
        <Text style={styles().btn_text}>Scan Now</Text>
      </TouchableOpacity>
    </View>
  );
};
