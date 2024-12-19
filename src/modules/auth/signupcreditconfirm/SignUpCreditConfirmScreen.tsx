import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SignUpCardIcon} from '@assets/icons';
import {Button, Spacer} from '@common';
import {hp, SCREEN, wp} from '@enums';
import {useNavigation} from '@react-navigation/native';

const SignUpCreditConfirmScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Spacer height={hp(6)} />
      <View>
        <SignUpCardIcon />
      </View>
      <Spacer height={hp(2)} />
      <Text style={styles.heading}>Sign Up Via Credit</Text>
      <Spacer height={hp(1)} />
      <Pressable>
        <Text style={styles.text}>Sign Up Instantly</Text>
      </Pressable>
      <Spacer height={hp(10)} />
      <Button
        title="Get Started"
        onPress={() => navigation.navigate(SCREEN.SignUpViaCredit)}
      />
    </View>
  );
};

export default SignUpCreditConfirmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  heading: {
    fontSize: wp(8),
    color: '#00214E',
    fontWeight: 'bold',
  },
  text: {
    color: '#00214E',
    fontWeight: '400',
  },
});
