import React from 'react';
import {SCREEN} from '@enums';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as ui from '@modules';
import {enableScreens} from 'react-native-screens';
import {
  FinanceTabIcon,
  HomeTabIcon,
  LocationTabIcon,
  ProfileTabIcon,
  ScanTabIcon,
} from '@common';
// import {HomeTabIcon, ProfileTabIcon} from '@common';
enableScreens();
// import {FinanceTab, HomeTab, LocationTab, ProfileTab} from '@assets/icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptionStyles = {
  headerShown: false,
  tabBarActiveTintColor: '#626262',
  tabBarInactiveTintColor: '#979797',
};

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREEN.Home} component={ui.HomeScreen} />
  </Stack.Navigator>
);
const LocationStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREEN.Location} component={ui.LocationScreen} />
  </Stack.Navigator>
);
const FinanceStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREEN.Finance} component={ui.FinanceScreen} />
    <Stack.Screen
      name={SCREEN.FinanacePayemnt}
      component={ui.FinancePaymentScreen}
    />
  </Stack.Navigator>
);
const ScanStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREEN.Scan} component={ui.ScanScreen} />
  </Stack.Navigator>
);
const ProfileStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREEN.Profile} component={ui.ProfileScreen} />
    <Stack.Screen
      name={SCREEN.ProfileDetails}
      component={ui.ProfileDetailsScreen}
    />
  </Stack.Navigator>
);

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyles}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <HomeTabIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationStack}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({color}) => <LocationTabIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Finance"
        component={FinanceStack}
        options={{
          tabBarLabel: 'Finance',
          tabBarIcon: ({color}) => <FinanceTabIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanStack}
        options={{
          tabBarLabel: 'Scan Qr',
          tabBarIcon: ({color}) => <ScanTabIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <ProfileTabIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
