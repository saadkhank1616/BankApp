import {StyleSheet} from 'react-native';

export const styles = ({borderColor}) =>
  StyleSheet.create({
    container: {
      padding: 15,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      justifyContent: 'space-between',
      // width: 350,
      borderWidth: 0.8,
      borderColor: borderColor || 'white',
      // shadowColor: '#000', // Shadow color
      // shadowOffset: {width: 0, height: 0}, // Centered shadow (applies evenly on all sides)
      // shadowOpacity: 0.1, // Reduced shadow opacity (lighter shadow)
      // shadowRadius: 12, // More spread out (higher value gives more spread)
      // elevation: 7, // Lower e
    },
    bankcard: {
      alignItems: 'center',
      //   backgroundColor: '#2B7AE3',
      //   paddingVertical: 14,
      justifyContent: 'center',
      //   paddingHorizontal: 8,
      borderRadius: 8,
    },
    arrow_con: {
      //   marginRight: 20,
    },
    small_con: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },
    title: {
      fontWeight: 'bold',
    },
    price: {
      color: '#A0A0A0',
      fontWeight: '700',
    },
  });
