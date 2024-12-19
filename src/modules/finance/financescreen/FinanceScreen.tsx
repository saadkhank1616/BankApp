import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FinanceCard, Header, SetUpPaymentCard, Spacer} from '@common';
import {hp, SCREEN} from '@enums';
import {
  BackArrow,
  PurpleRound,
  RegularPayment,
  UBLIcon,
  YellowAdditional,
} from '@assets/icons';
import {useNavigation} from '@react-navigation/native';

const FinanceScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Spacer /> */}
      <Header title="Finance" icon={<BackArrow />} />
      <Spacer height={hp(4)} />
      <Text style={styles.text}>Conected account</Text>
      <Spacer height={hp(2)} />
      <FinanceCard title="UBL" icon={<UBLIcon />} />
      <Spacer height={hp(4)} />
      <Text style={styles.text}>Set up a Payment</Text>
      <Spacer height={hp(3)} />
      <SetUpPaymentCard
        price="200"
        title="Regular payment"
        borderColor="#B3EBD9"
        icon={<RegularPayment />}
        onPress={() => navigation.navigate(SCREEN.FinanacePayemnt)}
      />
      <Spacer height={hp(2)} />
      <SetUpPaymentCard
        price="200"
        title="Round Ups"
        borderColor="#A181F9"
        icon={<PurpleRound />}
      />
      <Spacer height={hp(2)} />
      <SetUpPaymentCard
        price="200"
        title="Additional payments"
        borderColor="#F3B21F"
        icon={<YellowAdditional />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 13,
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'semibold',
  },
});

export default FinanceScreen;
