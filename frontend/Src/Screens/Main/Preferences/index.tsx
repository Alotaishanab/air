import React, { useState } from 'react';
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

          <View style={styles.switchRow}>
            <Text style={{ ...styles.switchText, color: Colors.authTitleColor }}>SMS Notifications</Text>
            <Switch
              style={switchSize}
              thumbColor={getSwitchThumbColor(switches.mobileUpdates)}
              trackColor={switchTrackColor}
              value={switches.mobileUpdates}
              onValueChange={() => toggleSwitch('mobileUpdates')}
            />
          </View>

          <Text style={{ ...styles.sectionTitle, marginTop: 20, color: Colors.authTitleColor }}>
            Title Here
          </Text>
          <View style={styles.switchRow}>
            <Text style={{ ...styles.switchText, color: Colors.authTitleColor }}>Lorem Ipsum</Text>
            <View style={styles.loremIpsumContainer}>
              <Text style={{ ...styles.loremIpsumText, color: Colors.authTitleColor }}>Lorem Ipsum</Text>
              <Image style={styles.arrowRight} source={Images.arrowRight} />
            </View>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreferencesScreen;
