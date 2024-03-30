import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Images from '../../../Styles/Images';
import getStyles from './Styles';
import { useNavigation } from '@react-navigation/native';
import useThemeContext from '../../../Util/useThemeContext';
import axiosInstance from '../../../../api/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../../Auth/Login'
import { Alert } from 'react-native';

type PreferencesScreenProps = {};

type SwitchState = {
  notifications: boolean;
  emailUpdates: boolean;
  mobileUpdates: boolean,
  theme: boolean;
  footer: boolean;
};

const PreferencesScreen: React.FC<PreferencesScreenProps> = () => {
  const [switches, setSwitches] = useState<SwitchState>({
    notifications: false,
    emailUpdates: false,
    mobileUpdates: false,
    theme: true,
    footer: false,
  });

  // Add a useEffect to check if user info is being retrieved correctly
  useEffect(() => {
    const checkUserInfo = async () => {
      const userInfo = await getUserInfo();
      console.log('UserInfo on Preferences Screen:', userInfo);
    };
    checkUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const userInfoString = await AsyncStorage.getItem('userInfo');
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        return userInfo;
      }
      Alert.alert('Error', 'User data not found in AsyncStorage.');
      return null;
    } catch (error) {
      console.error('Error fetching user info:', error);
      Alert.alert('Error', 'An error occurred while fetching user info.');
      return null;
    }
  };

  const deleteAccount = async () => {
    try {
      const userInfo = await getUserInfo();
      if (!userInfo || !userInfo.id) {
        throw new Error('User ID not available');
      }

      const response = await axiosInstance.delete(`/delete_account/${userInfo.id}`);
      if (response.status === 204) {
        console.log('Account deleted successfully');
        await AsyncStorage.clear();
        navigation.navigate('Login'); // Ensure 'Login' is the correct route name
      }
    } catch (error) {
      console.error('Failed to delete account:', error);
      Alert.alert('Error', 'Failed to delete account. Please try again later.');
    }
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: deleteAccount, style: 'destructive' },
      ]
    );
  };

  
  

  const { Colors, colorTheme, setColorTheme } = useThemeContext();

  // Use getStyles function with current theme colors
  const styles = getStyles(Colors);

  const getSwitchThumbColor = (isActive: boolean) =>
    isActive ? Colors.white : Colors.background;

  const switchThumbColor = Platform.select({
    ios: getSwitchThumbColor(switches.theme),
    android: getSwitchThumbColor(switches.theme),
  });

  const switchTrackColor = {
    false: Colors.listBorder,
    true: Colors.appColor,
  };

  const switchSize = Platform.OS === 'ios' ? { transform: [{ scaleX: 0.65 }, { scaleY: 0.65 }] } : {};

  const navigation = useNavigation();

  const toggleSwitch = (switchName: keyof SwitchState) => {
    setSwitches((current) => ({ ...current, [switchName]: !current[switchName] }));
  };

  const toggleTheme = () => {
    const newTheme = colorTheme === 'light' ? 'dark' : 'light';
    setColorTheme(newTheme);
  };

  return (
    <SafeAreaView style={{ ...styles.safeArea, backgroundColor: Colors.background }}>
      <StatusBar barStyle={colorTheme === 'dark' ? "light-content" : "dark-content"} />
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={[styles.headerTitle, { color: Colors.authTitleColor }]}>Preferences</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Images.cross} style={styles.crossIcon} />
          </TouchableOpacity>
        </View>

        <Text style={{ ...styles.description, color: Colors.authTitleColor }}>
        Customize your AIRA experience right here in Preferences! Choose your ideal theme to match your style and set up notifications to stay updated. It's all about making AIRA work best for you.
        </Text>

        <View style={styles.section}>
          <Text style={{ ...styles.sectionTitle, color: Colors.authTitleColor }}>Notifications</Text>
          <View style={styles.switchRow}>
            <Text style={{ ...styles.switchText, color: Colors.authTitleColor }}>App Notifications</Text>
            <Switch
              style={switchSize}
              thumbColor={getSwitchThumbColor(switches.notifications)}
              trackColor={switchTrackColor}
              value={switches.notifications}
              onValueChange={() => toggleSwitch('notifications')}
            />
          </View>

          <View style={styles.switchRow}>
            <Text style={{ ...styles.switchText, color: Colors.authTitleColor }}>Email Notifications</Text>
            <Switch
              style={switchSize}
              thumbColor={getSwitchThumbColor(switches.emailUpdates)}
              trackColor={switchTrackColor}
              value={switches.emailUpdates}
              onValueChange={() => toggleSwitch('emailUpdates')}
            />
          </View>

          <Text style={{ ...styles.sectionTitle, marginTop: 27, color: Colors.authTitleColor }}>
            App Appearance
          </Text>
          <View style={styles.switchRowFooterMainContainer}>
            <View style={styles.switchRow2}>
              <Text style={{ ...styles.switchText, color: Colors.authTitleColor }}>Switch theme</Text>
              <Switch
                style={switchSize}
                thumbColor={getSwitchThumbColor(switches.footer)}
                trackColor={switchTrackColor}
                value={switches.footer}
                onValueChange={() => {
                  toggleSwitch('theme');
                  toggleTheme();
                }}
              />
            </View>
            <Text style={{ ...styles.description2, color: Colors.authTitleColor }}>
              Alternate between Dark and Light theme
            </Text>
          </View>
          <Text style={{ ...styles.sectionTitle, marginTop: 20, color: Colors.authTitleColor }}>
  Delete Account
</Text>
<TouchableOpacity onPress={handleDeleteAccount} style={styles.deleteAccountButton}>
  <Text style={styles.deleteAccountButtonText}>Delete Account</Text>
</TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreferencesScreen;
