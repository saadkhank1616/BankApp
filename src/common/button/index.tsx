import React from 'react';
import {Text, TouchableOpacity, GestureResponderEvent} from 'react-native';
import {styles} from './style';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles().container} onPress={onPress}>
      <Text style={styles().text}>{title}</Text>
    </TouchableOpacity>
  );
};
