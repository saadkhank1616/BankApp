import {wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      padding: wp(4),
      paddingHorizontal: wp(30),
      backgroundColor: '#E9F2FF',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      // width: 100,
    },
    text: {
      fontWeight: '500',
    },
  });
