import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '@enums';
import {LeftRight, PlusICon} from '@assets/icons';
import {Spacer} from '@common/spacer';

const LoanHsitory = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={{
            width: wp(10),
            height: hp(5),
            backgroundColor: '#EBFAF5',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <LeftRight />
        </TouchableOpacity>
        <Spacer />
        <Text style={{color: '#00214E', fontSize: 13, fontWeight: 'semibold'}}>
          Loan History
        </Text>
        <Spacer />
        <Text style={{color: '#00214E', fontSize: 13, fontWeight: 'semibold'}}>
          55,000
        </Text>
        <Spacer />
        <Text style={{color: '#00214E', fontSize: 13, fontWeight: 'semibold'}}>
          36,600
        </Text>
        <Spacer />
        <Text style={{color: '#00214E', fontSize: 13, fontWeight: 'semibold'}}>
          88,000
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: wp(10),
            height: hp(5),
            backgroundColor: '#D9D9D9',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <PlusICon />
        </TouchableOpacity>
        <Spacer height={hp(4)} />
        <View
          style={{
            backgroundColor: '#FFDFDF',
            borderRadius: 10,
            width: wp(20),
          }}>
          <Text style={{color: '#B02929', textAlign: 'center'}}>rejected</Text>
        </View>
        <Spacer />
        <View
          style={{
            backgroundColor: '#EBFAF5',
            borderRadius: 10,
            width: wp(20),
          }}>
          <Text style={{color: '#0ABB85', textAlign: 'center'}}>clear</Text>
        </View>
        <Spacer />
        <View
          style={{
            backgroundColor: '#0ABB85',
            borderRadius: 10,
            width: wp(20),
          }}>
          <Text style={{color: '#FFFFFF', textAlign: 'center'}}>Disburse</Text>
        </View>
      </View>
    </View>
  );
};

export default LoanHsitory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: wp(5),
    borderRadius: 15,
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Centered shadow (applies evenly on all sides)
    shadowOpacity: 0.1, // Reduced shadow opacity (lighter shadow)
    shadowRadius: 1, // More spread out (higher value gives more spread)
    elevation: 4,
    justifyContent: 'space-between',
    // paddingHorizontal: 40,
    paddingVertical: wp(10),
  },
});
