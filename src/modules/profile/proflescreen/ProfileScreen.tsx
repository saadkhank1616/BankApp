import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Header, ProfileCard, Spacer} from '@common';
import {
  AccountOpeningIcon,
  BankAccountIcon,
  InviteFriendsIcom,
  ProfileCamera,
  UserProfile,
} from '@assets/icons';
import {hp, SCREEN} from '@enums';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Spacer />
      <Header title="Profile" />
      <Spacer height={hp(4)} />
      <TouchableOpacity style={styles.profileicon}>
        <ProfileCamera />
      </TouchableOpacity>
      <Spacer height={hp(3)} />
      <ProfileCard
        icon={<UserProfile />}
        title="Persnol Details"
        onPress={() => navigation.navigate(SCREEN.ProfileDetails)}
      />
      <Spacer height={hp(3)} />
      <ProfileCard icon={<InviteFriendsIcom />} title="Bank Account Details" />
      <Spacer height={hp(3)} />
      <ProfileCard
        icon={<AccountOpeningIcon />}
        title="Account Openning Form"
      />
      <Spacer height={hp(3)} />
      <ProfileCard icon={<BankAccountIcon />} title="invite Friend to payNow" />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  profileicon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
