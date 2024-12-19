import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Header, PaymentCard, Spacer} from '@common';
import {
  BackArrow,
  EasyPisa,
  HBLBank,
  JazzCash,
  Paypro,
  SearchIcon,
} from '@assets/icons';
import {hp} from '@enums';

const FinancePaymentScreen = () => {
  return (
    <View style={styles.conatiner}>
      <Header title="Payment" icon={<BackArrow />} />
      <Spacer height={hp(2)} />
      <Text style={styles.text}>Connect with Bank Acount</Text>
      <Text style={styles.smalltext}>Search or select recipents bank</Text>
      <Spacer />
      <View style={styles.searchbar}>
        <TextInput placeholder="Search bank" />
        <SearchIcon />
      </View>
      <Spacer />
      <Text style={styles.banktext}>All Banks</Text>
      <Spacer height={hp(2)} />
      <PaymentCard icon={<EasyPisa />} title="EasyPisa" borderColor="#26B15D" />
      <Spacer height={hp(2)} />
      <PaymentCard icon={<JazzCash />} title="JazzCash" borderColor="#FCD110" />
      <Spacer height={hp(2)} />
      <PaymentCard
        icon={<HBLBank />}
        title="HBL Limited"
        borderColor="#26B15D"
      />
      <Spacer height={hp(2)} />
      <PaymentCard icon={<Paypro />} title="PayPro" borderColor="#EFA537" />
    </View>
  );
};

export default FinancePaymentScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'semibold',
  },
  smalltext: {
    fontSize: 13,
    color: '#A0A0A0',
  },
  searchbar: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#EEEEEE',
    borderRadius: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  banktext: {
    fontSize: 20,
    color: '#838383',
  },
});
