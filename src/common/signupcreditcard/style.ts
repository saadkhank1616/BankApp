import {hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      padding: wp(4),
      backgroundColor: 'white',
      borderRadius: 20,
      shadowColor: '#000', // Shadow color
      shadowOffset: {width: 0, height: 0}, // Centered shadow (applies evenly on all sides)
      shadowOpacity: 0.1, // Reduced shadow opacity (lighter shadow)
      shadowRadius: 12, // More spread out (higher value gives more spread)
      elevation: 7, // Lower elevation for a lighter shadow
      paddingVertical: wp(7),
    },
    card_con: {
      backgroundColor: '#F0F0F0',
      borderRadius: 30,
      height: hp(7),
      width: hp(7),
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: wp(6),
      fontWeight: '400',
      color: '#00214E',
    },
    disc: {
      fontSize: wp(3),
    },
  });
