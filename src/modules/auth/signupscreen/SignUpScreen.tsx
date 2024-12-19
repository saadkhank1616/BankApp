import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackArrow, SignUpCard, SignUPInstant} from '@assets/icons';
import {SignUpCreditCard, Spacer} from '@common';
import {hp, SCREEN, wp} from '@enums';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Spacer height={hp(2)} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.header_text}>Sign Up</Text>
      </View>
      <Spacer height={hp(1)} />
      <Text style={styles.text}>
        Sign up for sade, secure and instant banikng with paynow
      </Text>
      <Spacer height={hp(5)} />
      <View style={styles.inner_con}>
        <SignUpCreditCard
          icon={<SignUpCard />}
          heading="Sign Up Via Credit"
          Discription="description text here for sign up ho ahead sign up right now signupsample text lorem impsum text for example"
          onPress={() => navigation.navigate(SCREEN.SignUpConfirm)}
        />
        <Spacer height={hp(5)} />
        <SignUpCreditCard
          icon={<SignUPInstant />}
          heading="Instant Sign Up"
          Discription="description text here for sign up ho ahead sign up right now signupsample text lorem impsum text for example"
          onPress={() => navigation.navigate(SCREEN.InstantSignup)}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
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
  header_disc: {
    // paddingLeft: 30,
    // width: wp(70),
  },
  inner_con: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 9,
    width: wp(55),
    paddingLeft: 30,
  },
});
