import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionic from 'react-native-vector-icons/Ionicons';
import useThemeContext from '../../../Util/useThemeContext';
import axiosInstance from '../../../../api/axiosInstance';
import {Switch} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Props = {
  navigation: any;
};

const API_ENDPOINT = 'http://172.20.10.2:8000/api/user/register/';

const Register = (props: any) => {
  const {Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme} =
    useThemeContext();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [co_password, setCo_Password] = useState('');
  const [tcAccepted, setTcAccepted] = useState(false);

  const handleSignup = async (): Promise<void> => {
    console.log('handleSignup started');
    if (password !== co_password) {
      alert('Passwords do not match.');
      return;
    }
  
    if (!tcAccepted) {
      alert('Please accept the terms and conditions to proceed.');
      return;
    }
  
    // Logging the request details
    console.log('Making request to:', API_ENDPOINT);
    console.log('Request data:', {
      email: email,
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      password: password,
      tc: tcAccepted,
    });
  
    try {
      const response = await axiosInstance.post('register/', {
        email: email,
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        password: password,
        tc: tcAccepted,
      });
  
      console.log('Response data:', response.data);
  
      if (response.data && response.data.token) {
        await AsyncStorage.setItem('userToken', response.data.token.access);
  
        if (response.data.user) {
          await AsyncStorage.setItem(
            'userDetails',
            JSON.stringify(response.data.user),
          );
        }
  
        props.navigation.navigate('Login');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.log('Error:', error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('Error data:', error.response.data);
          console.log('Status code:', error.response.status);
          console.log('Headers:', error.response.headers);
        } else {
          // The request was made but no response was received
          console.log('Error request:', error.request);
        }
      } else {
        // Error is not an AxiosError
        console.log('Non-Axios error:', error);
      }
      alert('Registration failed. Please try again.');
    }
  };
  
  

  return (
    <SafeAreaView
      style={[Styles.safeAreaContainer, {backgroundColor: Colors.background}]}>
      <StatusBar
        barStyle={colorTheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraHeight={130}
        extraScrollHeight={130}
        enableAutomaticScroll={Platform.OS === 'ios'}
        contentContainerStyle={Styles.areaContainer}>
        <View style={Styles.mainContainer}>
          <View style={Styles.headerEmpty} />

          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrapper}>
              <Text
                style={[
                  Styles.headText,
                  {color: Colors.authTitleColor},
                ]}>{`Signup`}</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.goBack();
                }}>
              </TouchableOpacity>
            </View>

            {/* First Name */}
            <View
              style={[
                Styles.wrapper,
                {
                  backgroundColor: Colors.white,
                  borderColor: Colors.colorBorder,
                },
              ]}>
              <TextInput
                style={[Styles.textInput, {color: Colors.inputColor}]}
                value={firstName}
                placeholder={'Enter First Name'}
                placeholderTextColor={'#858585'}
                onChangeText={value => {
                  setFirstName(value);
                }}
              />
              <Image source={Images.person} style={Styles.iconStyle} />
            </View>

            

            {/* Email */}
            <View
              style={[
                Styles.wrapper,
                {
                  backgroundColor: Colors.white,
                  borderColor: Colors.colorBorder,
                },
              ]}>
              <TextInput
                style={[Styles.textInput, {color: Colors.inputColor}]}
                value={email}
                placeholder={'Enter Email'}
                placeholderTextColor={'#858585'}
                onChangeText={value => {
                  setEmail(value);
                }}
              />
              <Image source={Images.mail} style={Styles.iconStyle} />
            </View>

            

            {/* Password */}
            <View
              style={[
                Styles.wrapper,
                {
                  backgroundColor: Colors.white,
                  borderColor: Colors.colorBorder,
                },
              ]}>
              <TextInput
                style={[Styles.textInput, {color: Colors.inputColor}]}
                value={password}
                placeholder={'Enter Password'}
                secureTextEntry={true}
                placeholderTextColor={'#858585'}
                onChangeText={value => {
                  setPassword(value);
                }}
              />
              <Image source={Images.lock} style={Styles.iconStyle} />
            </View>

            {/* Confirm Password */}
            <View
              style={[
                Styles.wrapper,
                {
                  backgroundColor: Colors.white,
                  borderColor: Colors.colorBorder,
                },
              ]}>
              <TextInput
                style={[Styles.textInput, {color: Colors.inputColor}]}
                value={co_password}
                placeholder={'Confirm Password'}
                secureTextEntry={true}
                placeholderTextColor={'#858585'}
                onChangeText={value => {
                  setCo_Password(value);
                }}
              />
              <Image source={Images.lock} style={Styles.iconStyle} />
            </View>

            <View style={Styles.tcContainer}>
              <Switch value={tcAccepted} onValueChange={setTcAccepted} />
              <Text style={Styles.tcText}>
                I agree to the Terms and Conditions
              </Text>
            </View>

            {/* Login Button */}
            <TouchableOpacity onPress={handleSignup}>
              <LinearGradient
                colors={[Colors.appColor, Colors.nameColor]}
                style={Styles.nextButton}>
                <Text
                  style={[Styles.nextText, { color: Colors.white }]}> 
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

        
            {/* Don't Have Account */}
            <View style={Styles.bottomInner}>
              <Text
                style={[
                  Styles.dontHaveText,
                  {color: Colors.dontHaveColor},
                ]}>{`Already have an account?`}</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Login');
                }}>
                <Text
                  style={[
                    Styles.registerAccount,
                    {color: Colors.authTitleColor},
                  ]}>{`Login`}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;
