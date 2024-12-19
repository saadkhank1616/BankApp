import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Header, PersnolDetailsCard, Spacer} from '@common';
import {BackArrow, EditIcon, ProfileCamera} from '@assets/icons';
import {hp, wp} from '@enums';

const ProfileDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Spacer />
      <Header icon={<BackArrow />} title="Profile" />
      <Spacer height={hp(4)} />
      <TouchableOpacity style={styles.profileicon}>
        <ProfileCamera />
      </TouchableOpacity>
      <Spacer height={hp(3)} />
      <View>
        <Text style={styles.text}>Name</Text>
        <PersnolDetailsCard title="Saad Ullah Khan" icon={<EditIcon />} />
      </View>
      <Spacer />
      <View>
        <Text style={styles.text}>Login Name</Text>
        <PersnolDetailsCard title="Saad786" icon={<EditIcon />} />
      </View>
      <Spacer />
      <View>
        <Text style={styles.text}>Mobile Number</Text>
        <PersnolDetailsCard title="03400199579" icon={<EditIcon />} />
      </View>
      <Spacer />
      <View>
        <Text style={styles.text}>Email</Text>
        <PersnolDetailsCard
          title="saadkhank1616@gmail.com"
          icon={<EditIcon />}
        />
      </View>
      <Spacer height={hp(2)} />
      <Text style={styles.notetext}>
        Note: All comunication, includibg OPTs will be sent to your contact
        detail mentioned here.
      </Text>
    </View>
  );
};

export default ProfileDetailsScreen;

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
  text: {
    fontSize: 14,
    color: '#00214E',
    fontWeight: 'semibold',
  },
  notetext: {
    width: wp(55),
    color: '#595778',
    fontSize: 10,
  },
});
