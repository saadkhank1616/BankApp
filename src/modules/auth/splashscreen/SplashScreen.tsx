import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CircleLogo, Logo} from '@assets/icons';
import {hp, wp} from '@enums';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <CircleLogo />
      </View>
      <View>
        <Logo />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    marginBottom: hp(4),
    paddingLeft: wp(14),
  },
});
