import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackArrow} from '@assets/icons';
import {wp} from '@enums';
import {useNavigation} from '@react-navigation/native';

export const Header = ({title, icon}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {/* <Spacer /> */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {icon}
      </TouchableOpacity>
      <Text style={styles.header_text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    gap: wp(5),
    alignItems: 'center',
  },
  header_text: {
    fontSize: 35,
    color: '#00214E',
    fontWeight: 'semibold',
  },
});
