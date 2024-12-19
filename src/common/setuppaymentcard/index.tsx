import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RightArrowIcon} from '@assets/icons';
import {styles} from './style';

export const SetUpPaymentCard = ({
  title,
  icon,
  price,
  borderColor,
  onPress,
}) => {
  return (
    <View style={styles({borderColor}).container}>
      <View style={styles({}).small_con}>
        <View style={styles({}).bankcard}>{icon}</View>
        <View>
          <Text style={styles({}).title}>{title}</Text>
          <Text style={styles({}).price}>$ {price}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles({}).arrow_con} onPress={onPress}>
        <RightArrowIcon />
      </TouchableOpacity>
    </View>
  );
};
