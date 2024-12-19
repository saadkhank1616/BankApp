import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScanCard, Spacer} from '@common';
import {BackArrow} from '@assets/icons';
import {useNavigation} from '@react-navigation/native';
import {hp, SCREEN, wp} from '@enums';

const InstantSignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.conatiner}>
      <Spacer height={hp(2)} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.header_text}>Refrel code</Text>
      </View>
      <Spacer height={hp(1)} />
      <Text style={styles.text}>heading starts with 24 </Text>
      <Spacer height={hp(10)} />
      <View style={styles.inner_container}>
        <ScanCard onPress={() => navigation.navigate(SCREEN.Scan)} />
        <Spacer height={hp(30)} />
        <TouchableOpacity>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InstantSignUp;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    gap: wp(3),
  },
  header_text: {
    fontSize: 20,
    color: '#00214E',
  },
  text: {
    fontSize: 9,
    width: wp(55),
    paddingLeft: 30,
  },
  inner_container: {
    alignItems: 'center',
  },
});
