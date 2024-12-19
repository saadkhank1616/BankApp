import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from 'react-native';
import {styles} from './style';
import {Spacer} from '@common/spacer';
import {hp} from '@enums';

interface SignUpCreditCardProps {
  icon: React.ReactNode; // Icon component
  heading: string; // Heading text
  Discription: string; // Description text
  onPress?: (event: GestureResponderEvent) => void; // Optional onPress handler
}

export const SignUpCreditCard: React.FC<SignUpCreditCardProps> = ({
  icon,
  heading,
  Discription,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles().container} onPress={onPress}>
      <View style={styles().card_con}>{icon}</View>
      <Spacer height={hp(2)} />
      <Text style={styles().heading}>{heading}</Text>
      <Spacer />
      <Text style={styles().disc}>{Discription}</Text>
    </TouchableOpacity>
  );
};
