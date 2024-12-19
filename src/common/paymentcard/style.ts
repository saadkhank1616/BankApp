import {hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = ({borderColor}) =>
  StyleSheet.create({
    container: {
      padding: 15,
      backgroundColor: 'white',
      flexDirection: 'row',
      gap: 25,
      //   justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      // width: 350,
      paddingLeft: 15,
      borderWidth: 0.8,
      borderColor: borderColor,
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    inner_con: {
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'center',
      gap: 20,
    },
    icon: {
      // backgroundColor: 'red',
      width: wp(10),
      height: hp(5),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
