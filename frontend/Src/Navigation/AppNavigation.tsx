
import React from 'react';
import { Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';
import Metrics from '../Styles/Metrices';

import BottomNavigation from "./BottomNavigation";

import Welcome from "../Screens/Welcome";
import Login from "../Screens/Auth/Login";
import Register from "../Screens/Auth/Register";
import PasswordRecovery from "../Screens/Auth/PasswordRecovery";
import About from "../Screens/Main/About";
import HelpSupport from "../Screens/Main/HelpSupport";
import NewVoiceRecord from "../Screens/Main/NewVoiceRecord";
import QuickPlan from "../Screens/Main/QuickPlan";
import CalendarDetail from '../Screens/Main/CalendarDetail';
import Preferences from '../Screens/Main/Preferences';
import VoiceManagement from '../Screens/Main/VoiceManagement';
import ManageReservationScreen from '../Screens/Main/ManageReserVations';
import EditProfile from '../Screens/Auth/EditProfile'
import AddAppointments from '../Screens/Main/AddAppointments';

import NewEvent from '../Screens/Main/NewEvent';
import ManageEvents from '../Screens/Main/ManageEvents';

import NewAppointQuickPlan from '../Screens/Main/NewAppointQuickPlan';
import NewEventQuickPlan from '../Screens/Main/NewEventQuickPlan';
const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

type RootStackParamList = {
  Welcome: undefined,
  Login: undefined,
  Register: undefined,
  PasswordRecovery: undefined,
  BottomNavigation: undefined,
  About: undefined,
  HelpSupport: undefined,
  NewVoiceRecord: undefined,
  CalendarDetail: undefined,
  QuickPlan: undefined,
  DailyBrief: undefined,
  Preferences: undefined,
  VoiceManagement: undefined,
  ManageReservationScreen: undefined,
  ManageAppointments: undefined,
  EditProfile: undefined,
  NewAppointQuickPlan: undefined,
  AddAppointments: undefined,
  // RequestListDetail: undefined,
  // SubmitRequest: undefined,
  // SignedContract: undefined,
  // RequestDetail: undefined,
  // ProfileViewer: undefined,
  // Rate: undefined,
  // ComplaintSubmit: undefined,
};



enableScreens();


const RootStack = createStackNavigator<RootStackParamList>();


export const THEME_COLOR = '#0AAF60';

export const setNavigator = (nav: any) => {
  const navigator = nav;
};

export default function RootNavigator() {
  return (

    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'extend',
              }),
            },
          }),
          presentation: "transparentModal"
        }}>
        <RootStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <RootStack.Screen name='QuickPlan' component={QuickPlan} options={{ headerShown: false }} />
        <RootStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <RootStack.Screen name='Register' component={Register} options={{ headerShown: false }} />
        <RootStack.Screen name='PasswordRecovery' component={PasswordRecovery} options={{ headerShown: false }} />
        <RootStack.Screen name='BottomNavigation' component={BottomNavigation} options={{ headerShown: false }} />
        <RootStack.Screen name='About' component={About} options={{ headerShown: false }} />
        <RootStack.Screen name='HelpSupport' component={HelpSupport} options={{ headerShown: false }} />

        <RootStack.Screen name='NewVoiceRecord' component={NewVoiceRecord} options={{ headerShown: false }} />
        <RootStack.Screen name='CalendarDetail' component={CalendarDetail} options={{ headerShown: false }} />
        <RootStack.Screen name='Preferences' component={Preferences} options={{ headerShown: false }} />
        <RootStack.Screen name='VoiceManagement' component={VoiceManagement} options={{ headerShown: false }} />
        <RootStack.Screen name='ManageReservationScreen' component={ManageReservationScreen} options={{ headerShown: false }} />
        <RootStack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} /> 
        <RootStack.Screen name='NewAppointQuickPlan' component={NewAppointQuickPlan} options={{ headerShown: false }} /> 
        <RootStack.Screen name='NewEventQuickPlan' component={NewEventQuickPlan} options={{ headerShown: false }} /> 
        <RootStack.Screen name='AddAppointments' component={AddAppointments} options={{ headerShown: false }} /> 
        {/* <RootStack.Screen name='SubmitRequest' component={SubmitRequest} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='SignedContract' component={SignedContract} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='RequestDetail' component={RequestDetail} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='ProfileViewer' component={ProfileViewer} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='Rate' component={Rate} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='ComplaintSubmit' component={ComplaintSubmit} options={{ headerShown: false }} /> */}


        {/*   */}
      </RootStack.Navigator>
    </NavigationContainer>

  );
}

