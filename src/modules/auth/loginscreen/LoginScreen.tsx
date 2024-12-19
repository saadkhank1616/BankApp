import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Logo, SwipeUpIcon} from '@assets/icons';
import {Spacer} from '@common';
import {hp, SCREEN, wp} from '@enums';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  // develop branch
  return (
    <View style={styles.container}>
      <Spacer height={hp(20)} />
      <Logo />
      <Spacer height={hp(15)} />
      <TouchableOpacity onPress={() => navigation.navigate(SCREEN.SignUp)}>
        <SwipeUpIcon />
      </TouchableOpacity>
      <Spacer height={hp(3)} />
      <Text style={styles.text}>Swipe up to Login</Text>
      <Spacer height={hp(20)} />
      <View style={styles.more_text}>
        <Pressable>
          <Text style={styles.text}>More </Text>
        </Pressable>
        <Spacer width={wp(50)} />
        <Pressable>
          <Text style={styles.text}>Sign Up </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  more_text: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: wp(5),
    color: '#282460',
  },
});
