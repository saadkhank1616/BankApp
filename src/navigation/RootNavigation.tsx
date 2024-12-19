import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNaviagtion';
import {useState} from 'react';
import {SCREEN} from '@enums';
import * as ui from '@modules';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {ModalProvider} from '@contexts/ModalProvider';
enableScreens();

const Stack = createNativeStackNavigator();
const screenOptionStyle = {headerShown: false};

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      //   initialRouteName={SCREEN.REGESTRATION}
      screenOptions={screenOptionStyle}>
      {/* <Stack.Screen name={SCREEN.Splash} component={ui.SplashScreen} /> */}
      <Stack.Screen name={SCREEN.Landing} component={ui.LandingScreen} />
      <Stack.Screen name={SCREEN.LogIn} component={ui.LoginScreen} />
      <Stack.Screen name={SCREEN.SignUp} component={ui.SignUpScreen} />
      <Stack.Screen
        name={SCREEN.SignUpConfirm}
        component={ui.SignUpCreditConfirmScreen}
      />
      <Stack.Screen
        name={SCREEN.SignUpViaCredit}
        component={ui.SignUpViaCredit}
      />
      <Stack.Screen
        name={SCREEN.SignUpCongrats}
        component={ui.SignUpCongratsScreen}
      />
      <Stack.Screen name={SCREEN.InstantSignup} component={ui.InstantSignUp} />
      <Stack.Screen
        name={SCREEN.InstantCongrats}
        component={ui.InstantCongratsScreen}
      />
      <Stack.Screen name={SCREEN.Scan} component={ui.ScanScreen} />
    </Stack.Navigator>
  );
};

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Bottom_Tab"
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Bottom_Tab" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};

export const RootNavigation = () => {
  const [user, setUser] = useState(true);
  return (
    <ModalProvider>
      <NavigationContainer>
        {user ? <AppNavigation /> : <AuthNavigation />}
        {/* <AppNavigation /> */}
      </NavigationContainer>
    </ModalProvider>
  );
};
