import {wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      // padding: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'white',
      padding: wp(18),
      backgroundColor: 'white',
      borderRadius: 20,
      shadowColor: '#000', // Shadow color
      shadowOffset: {width: 0, height: 0}, // Centered shadow (applies evenly on all sides)
      shadowOpacity: 0.1, // Reduced shadow opacity (lighter shadow)
      shadowRadius: 12, // More spread out (higher value gives more spread)
      elevation: 7, // Lower elevation for a lighter shadow
      paddingVertical: wp(3),
      // paddingHorizontal: wp(18),
    },
    heading: {
      marginTop: 2,
      fontSize: 20,
      color: '#00214E',
    },
    text: {
      fontSize: 12,
      width: 200,
      textAlign: 'center',
      color: '#00214E',
    },
    button: {
      padding: 10,
      backgroundColor: '#00214E',
      borderRadius: 30,
      paddingHorizontal: 40,
    },
    btn_text: {
      color: 'white',
    },
  });
