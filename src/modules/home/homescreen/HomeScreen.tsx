import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {InfoIcon, ProfileIocn, RightArrow, SearchIcon} from '@assets/icons';
import {Barchart, Spacer} from '@common';
import {hp, wp} from '@enums';
import LoanHsitory from '@common/loanhistory';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Spacer />
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <ProfileIocn />
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: wp(2.5)}}>Hello</Text>
            <Text style={{fontSize: wp(4)}}>Saad Ullah</Text>
          </View>
        </View>
        <TouchableOpacity>
          <SearchIcon />
        </TouchableOpacity>
      </View>
      <Spacer />
      <View style={styles.right_con}>
        <View style={{marginLeft: 10}}>
          <InfoIcon />
        </View>
        <Text style={{fontSize: 12, marginLeft: 20, color: '#00214E'}}>
          Add your loans to unlock full features
        </Text>
        <TouchableOpacity style={styles.right_box}>
          <RightArrow />
        </TouchableOpacity>
      </View>
      <Spacer height={hp(3)} />
      <View style={styles.amount_con}>
        <Barchart />
      </View>
      <Spacer />
      <View>
        <LoanHsitory />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: wp(98),
    width: '100%',
    justifyContent: 'space-between',
  },
  right_con: {
    // paddingHorizontal: wp(3),
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Centered shadow (applies evenly on all sides)
    shadowOpacity: 0.1, // Reduced shadow opacity (lighter shadow)
    shadowRadius: 1, // More spread out (higher value gives more spread)
    elevation: 4,
  },
  right_box: {
    borderWidth: 1,
    padding: 8,
    borderColor: '#00214E',
    borderRadius: 6,
    marginLeft: 85,
  },
  amount_con: {
    backgroundColor: 'white',
    padding: wp(4),
    borderRadius: 15,
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Centered shadow (applies evenly on all sides)
    shadowOpacity: 0.1, // Reduced shadow opacity (lighter shadow)
    shadowRadius: 1, // More spread out (higher value gives more spread)
    elevation: 4,
  },
});
