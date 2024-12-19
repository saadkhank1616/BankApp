import {TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {CardTop} from '@assets/images';

export const SignUpCard2 = () => {
  return (
    <View style={styles().container}>
      <View style={styles().header}>
        <CardTop />
      </View>
      <View>
        <View style={styles().inner_container}>
          <View style={styles().left_con}>
            <TextInput placeholder="last 4 digit" style={styles().digit} />
            <View style={styles().underline}></View>
          </View>
          <View style={styles().empty_container}>
            <TextInput placeholder="Expiry" style={styles().digit} />
            <TextInput style={styles().circle} />
          </View>
        </View>
      </View>
    </View>
  );
};
