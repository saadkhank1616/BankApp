import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {RightArrowIcon} from '@assets/icons';

export const ProfileCard = ({icon, title, onPress}) => {
  return (
    <View style={styles().container}>
      <View style={styles().inner_con}>
        <View>{icon}</View>
        <Text style={styles().title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <RightArrowIcon />
      </TouchableOpacity>
    </View>
  );
};
