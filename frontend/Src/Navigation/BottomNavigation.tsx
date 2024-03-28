import React from 'react';
import {
  View,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../Styles/Images';
import useThemeContext from '../Util/useThemeContext';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Home from "../Screens/Main/Home";
import Phone from "../Screens/Main/Phone"
import Calender from "../Screens/Main/Calender";
import Profile from "../Screens/Main/Profile";
import FaceInteraction from "../Screens/Main/FaceInteraction";



const widthScreen = Dimensions.get('window').width;

type BottomStackParamList = {
  HomeTab: undefined,
  Phone: undefined,
  AITab: undefined,
  CalenderTab: undefined,
  ProfileTab: undefined,
};
type HomeStackParamList = {
  Home: undefined,
};
type PhoneStackParamList = {
  Phone: undefined,
};
type CalenderStackParamList = {
  Calender: undefined,
};
type ProfileStackParamList = {
  Profile: undefined,
};

type AITabStackParamList = {
  FaceInteraction: undefined,
  // add other screens here if necessary
};



const navigationRef = React.createRef<any>();

export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}

const Tab = createBottomTabNavigator<BottomStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const PhoneStack = createStackNavigator<PhoneStackParamList>();
const CalenderStack = createStackNavigator<CalenderStackParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();
const AITabStack = createStackNavigator<AITabStackParamList>();


const CustomTabBarButton = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -10, // Raise the button above the tab bar
      justifyContent: 'center',
      alignItems: 'center',
      shadowOpacity: 0.3,
      shadowRadius: 4,
      shadowColor: '#000',
      shadowOffset: { height: 0, width: 0 },
      elevation: 5,
    }}
  >
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#34568B', 
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image source={Images.aiIcon} style={{ width: 30, height: 30 }} />
    </View>
  </TouchableOpacity>
);



export const HomeStacks = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

export const PhoneStacks = () => {
  return (
    <PhoneStack.Navigator initialRouteName="Phone"
      screenOptions={{
        headerShown: false,
      }}>
      <PhoneStack.Screen name="Phone" component={Phone} />



    </PhoneStack.Navigator>
  );
}

const CalenderStacks = () => {
  return (
    <CalenderStack.Navigator initialRouteName="Calender"
      screenOptions={{
        headerShown: false,
      }}>
      <CalenderStack.Screen name="Calender" component={Calender} />

    </CalenderStack.Navigator>
  )
}

const ProfileStacks = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} />

    </ProfileStack.Navigator>
  )
}


const AITabStacks = () => {
  return (
    <AITabStack.Navigator initialRouteName="FaceInteraction"
      screenOptions={{ headerShown: false }}>
      <AITabStack.Screen 
        name="FaceInteraction" 
        component={FaceInteraction}
        listeners={({ navigation, route }) => ({
          focus: () => navigation.setParams({ tabBarVisible: false }),
          blur: () => navigation.setParams({ tabBarVisible: true })
        })}
      />
      {/* ... other screens if any ... */}
    </AITabStack.Navigator>
  );
}




export const BottomTabView = (props: any) => {
  const { Colors } = useThemeContext();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: Colors.background,
          borderRadius: 0,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          borderTopWidth: 0,
          shadowOpacity: 0,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let iconName;

          // Determine the icon based on the route.name
          if (route.name === 'HomeTab') {
            iconName = Images.home;
          } else if (route.name === 'PhoneTab') {
            iconName = Images.phone;
          } else if (route.name === 'CalenderTab') {
            iconName = Images.calendar;
          } else if (route.name === 'ProfileTab') {
            iconName = Images.profile;
          } else if (route.name === 'AITab') {
            iconName = Images.aiIcon;
          }

          // Icon color logic: Black when not focused, blue when focused
          const iconColor = focused ? Colors.accent : '#000000'; // Use '#000000' for black

          return (
            <Image
              source={iconName}
              resizeMode="contain"
              style={{ width: 28, height: 28, tintColor: iconColor }}
            />
          );
        },
      })}
    >
      {/* Define your Tab Screens here without overriding the tabBarIcon in options */}
      <Tab.Screen name="HomeTab" component={HomeStacks} />
      <Tab.Screen name="PhoneTab" component={PhoneStacks} />
      <Tab.Screen name="AITab" component={AITabStacks} options={{ tabBarButton: (props) => <CustomTabBarButton {...props} /> }} />
      <Tab.Screen name="CalenderTab" component={CalenderStacks} />
      <Tab.Screen name="ProfileTab" component={ProfileStacks} />
    </Tab.Navigator>
  );
};


export default BottomTabView;
// <LinearGradient colors={['#608C96', '#709EA9']} style={{
//   height: hp(7.5), justifyContent: 'center',
//   width: widthScreen / 1.12,
//   alignSelf: "center",
//   borderRadius: 25,
//   marginBottom: hp(3),
//   alignItems: 'center'
// }} />