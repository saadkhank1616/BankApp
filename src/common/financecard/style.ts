import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      //   gap: 20,
      borderRadius: 10,
      //   paddingHorizontal: 80,
      //   width: 100,
      //   alignSelf: 'flex-start',
      justifyContent: 'space-between',
      // width: 350,
      shadowColor: '#000', // Shadow color
      shadowOffset: {width: 0, height: 0}, // Centered shadow (applies evenly on all sides)
      shadowOpacity: 0.1, // Reduced shadow opacity (lighter shadow)
      shadowRadius: 12, // More spread out (higher value gives more spread)
      elevation: 7, //
    },
    bankcard: {
      alignItems: 'center',
      backgroundColor: '#2B7AE3',
      paddingVertical: 14,
      justifyContent: 'center',
      paddingHorizontal: 8,
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
    heading: {
      fontWeight: 'bold',
    },
  });
