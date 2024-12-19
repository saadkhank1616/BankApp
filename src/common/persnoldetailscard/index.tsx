import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';

export const PersnolDetailsCard = ({icon, title}) => {
  return (
    <View style={styles().container}>
      <View style={styles().inner_con}>
        <Text style={styles().title}>{title}</Text>
      </View>
      <TouchableOpacity>{icon}</TouchableOpacity>
    </View>
  );
};
