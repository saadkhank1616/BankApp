import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {RightArrowIcon} from '@assets/icons';

export const PaymentCard = ({icon, title, borderColor}) => {
  return (
    <View style={styles({borderColor}).container}>
      <View style={styles({}).inner_con}>
        <View style={styles({}).icon}>{icon}</View>
        <Text style={styles({}).title}>{title}</Text>
      </View>
      <TouchableOpacity>
        <RightArrowIcon />
      </TouchableOpacity>
    </View>
  );
};
