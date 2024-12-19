import {wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      // height: 60,
      // padding: 25,
      backgroundColor: 'white',
      // alignItems: 'center',
      borderRadius: 20,
      shadowColor: '#000', // Shadow color
      shadowOffset: {width: 0, height: 0}, // Centered shadow (applies evenly on all sides)
      shadowOpacity: 0.1, // Reduced shadow opacity (lighter shadow)
      shadowRadius: 12, // More spread out (higher value gives more spread)
      elevation: 7, // Lower e
    },
    header: {
      // backgroundColor: '',
      // padding: 15,
      // heigth: 60,
    },
    digit: {
      backgroundColor: '#F0F0F0',
      borderRadius: 8,
      // paddingHorizontal: 40,
      // marginHorizontal: 20,
      // alignSelf: 'flex-start',
      // justifyContent: 'flex-start',
      width: 130,
      paddingLeft: 10,
    },
    inner_container: {
      padding: wp(6),
      // alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 30,
    },
    circle: {
      backgroundColor: '#F0F0F0',
      borderRadius: 20,
      // paddingHorizontal: 60,
      // marginLeft: 60,
      width: 130,
    },
    underline: {
      borderWidth: 1,
      // paddingHorizontal: 30,
      width: 100,
    },
    empty_container: {
      // padding: 5,
      alignItems: 'center',
      // flexDirection: 'row',
      justifyContent: 'center',
      gap: 20,
    },
    left_con: {
      gap: 10,
    },
    right_con: {
      gap: 10,
    },
  });
