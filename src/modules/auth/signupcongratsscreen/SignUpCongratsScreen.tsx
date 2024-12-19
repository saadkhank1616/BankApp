import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CongratulaionsIcon} from '@assets/icons';
import {Button, Spacer} from '@common';
import {hp, wp} from '@enums';

const SignUpCongratsScreen = () => {
  return (
    <View style={styles.container}>
      <Spacer height={hp(6)} />
      <View>
        <CongratulaionsIcon />
      </View>
      <Text style={styles.text}>Congratulations</Text>
      <Spacer height={hp(10)} />
      <Button title="Get Started" />
    </View>
  );
};

export default SignUpCongratsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    fontSize: wp(8),
    color: '#00214E',
    // fontWeight: 'bold',
  },
});
