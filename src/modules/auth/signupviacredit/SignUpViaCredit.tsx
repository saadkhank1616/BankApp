import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, SignUpCard2, Spacer} from '@common';
import {BackArrow} from '@assets/icons';
import {hp, SCREEN, wp} from '@enums';
import {useNavigation} from '@react-navigation/native';

const SignUpViaCredit = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Spacer height={hp(2)} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.header_text}>Sign Up Via Credit</Text>
      </View>
      <Spacer height={hp(1)} />
      <Text style={styles.text}>
        Sign up for sade, secure and instant banikng with paynow
      </Text>
      <Spacer height={hp(10)} />
      <View style={styles.inner_con}>
        <SignUpCard2 />
        <Spacer height={hp(20)} />
        <Button
          title="proceed"
          onPress={() => navigation.navigate(SCREEN.SignUpCongrats)}
        />
      </View>
    </View>
  );
};

export default SignUpViaCredit;

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
  text: {
    fontSize: 9,
    width: wp(55),
    paddingLeft: 30,
  },
  inner_con: {
    alignItems: 'center',
  },
});
