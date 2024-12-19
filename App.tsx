/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {RootNavigation} from '@navigation';
import {enableScreens} from 'react-native-screens';
enableScreens();

// import {
//   FinanceCard,
//   PaymentCard,
//   PersnolDetailsCard,
//   ProfileCard,
//   ScanCard,
//   SetUpPaymentCard,
//   Spacer,
//   Testing,
// } from '@common';
// import React, {useState} from 'react';
// import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import {hp} from '@enums/StyleGuide';
// import {Button} from '@common/button';
// import {SignUpCreditCard} from '@common/signupcreditcard';
// import {
//   EasyPisa,
//   EditIcon,
//   RegularPayment,
//   SignUpCard,
//   SignUPInstant,
//   UBLIcon,
//   UserProfile,
// } from '@assets/icons';
// import {SignUpCard2} from '@common/signupcard2';

// function App(): React.JSX.Element {
//   // const [isVisible, setIsVisible] = useState(false);
//   return (
//     <ScrollView>
//       <View style={styles.sectionContainer}>
//         <Text>welcome Rahim</Text>
//         <Spacer height={hp(1)} />
//         <Testing />
//         <Spacer height={hp(1)} />
//         {/* <OnBoarding1 /> */}
//         <Button title="Proceed" onPress={''} />
//         <Spacer height={hp(4)} />
//         <SignUpCreditCard
//           icon={<SignUpCard />}
//           heading="Sign Up Via Credit"
//           Discription="description text here for sign up ho ahead sign up right now signupsample text lorem impsum text for example"
//         />
//         <Spacer height={hp(4)} />
//         <SignUpCreditCard
//           icon={<SignUPInstant />}
//           heading="Instant Sign Up"
//           Discription="description text here for sign up ho ahead sign up right now signupsample text lorem impsum text for example"
//         />
//         <Spacer height={hp(4)} />
//         <SignUpCard2 />
//         <Spacer height={hp(4)} />
//         <ScanCard />
//         <Spacer height={hp(4)} />
//         <FinanceCard title="UBL Digital" icon={<UBLIcon />} />
//         <Spacer height={hp(4)} />
//         <SetUpPaymentCard
//           title="Regular payment"
//           price="200"
//           icon={<RegularPayment />}
//           borderColor="#B3EBD9" // Pass custom border color
//         />
//         <Spacer height={hp(4)} />
//         <PaymentCard
//           icon={<EasyPisa />}
//           title="EasyPisa"
//           borderColor="#26B15D"
//         />
//         <Spacer height={hp(4)} />
//         <ProfileCard icon={<UserProfile />} title="Persnol Details" />
//         <Spacer height={hp(4)} />
//         <PersnolDetailsCard title="Muhammad Ibraheem" icon={<EditIcon />} />
//         <Spacer height={hp(4)} />
//         {/* <CustomModal visible={isVisible} onClose={setIsVisible(false)}>
//           <View>hello</View>
//         </CustomModal> */}
//       </View>
//     </ScrollView>
//   );
// }

// const App = () => {
//   return (
//     <>
//       <RootNavigation />
//     </>
//   );
// };
const App = () => {
  return (
    <>
      <RootNavigation />
    </>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default App;
