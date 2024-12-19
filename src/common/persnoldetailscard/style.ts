import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      padding: 25,
      backgroundColor: 'white',
      flexDirection: 'row',
      gap: 25,
      //   justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      // width: 350,
      paddingLeft: 20,
      //   borderWidth: 0.8,
      //   borderColor: borderColor,
      justifyContent: 'space-between',
      shadowColor: '#000', // Shadow color
      shadowOffset: {width: 0, height: 0}, // Centered shadow (applies evenly on all sides)
      shadowOpacity: 0.1, // Reduced shadow opacity (lighter shadow)
      shadowRadius: 12, // More spread out (higher value gives more spread)
      elevation: 7, //
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    inner_con: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  });
