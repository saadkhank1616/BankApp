import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CongratulaionsIcon} from '@assets/icons';
import {Button, Spacer} from '@common';
import {hp, wp} from '@enums';

const InstantCongratsScreen = () => {
  return (
    <View style={styles.container}>
      <Spacer height={hp(12)} />
      <View>
        <CongratulaionsIcon />
      </View>
      <Spacer />
      <Text style={styles.text}>Congratulations</Text>
      <Spacer height={hp(10)} />
      <Button title="Get Started" />
    </View>
  );
};

export default InstantCongratsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: wp(7.5),
    color: '#00214E',
  },
});
