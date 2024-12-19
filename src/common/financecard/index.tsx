import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RightArrowIcon} from '@assets/icons';
import {styles} from './style';

export const FinanceCard = ({title, icon}) => {
  return (
    <View style={styles().container}>
      <View style={styles().small_con}>
        <View style={styles().bankcard}>{icon}</View>
        <View>
          <Text style={styles().heading}>{title}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles().arrow_con}>
        <RightArrowIcon />
      </TouchableOpacity>
    </View>
  );
};
