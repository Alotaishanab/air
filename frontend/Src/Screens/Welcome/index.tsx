import React, { useEffect } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import useThemeContext from '../../Util/useThemeContext';


export type Props = {
  navigation: any;
};


const Welcome = (props: any) => {
  const { Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme } = useThemeContext();



  return (
    <ImageBackground source={colorTheme === 'dark' ? Images.welcomeDark : Images.welcomeLight} style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={colorTheme === 'dark' ? "light-content" : "dark-content"} />
        <View style={Styles.mainContainer}>

          <View style={Styles.headerEmpty} />
          {/* Header Data */}
          <View style={Styles.headerContainer}>
            <Text style={[Styles.welcomeText, {
              color: Colors.headerColor
            }]}>{`Welcome`}</Text>

            <Text style={Styles.appNameText}>
              <Text style={[Styles.appNameText, { color: Colors.appColor }]}>
                {"App"}
              </Text>
              <Text style={[Styles.appNameText, { color: Colors.nameColor }]}>
                {"Name"}
              </Text>
            </Text>
          </View>


          {/* Bottom Data */}
          <View style={Styles.bottomContainer}>
            <View style={Styles.bottomInner}>
              <Text style={[Styles.descriptionText, { color: Colors.desColor }]}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            </View>

            <TouchableOpacity onPress={() => { props.navigation.navigate("Login") }}
              style={Styles.nextWrapper}>
              <Image source={Images.moveRight} style={Styles.nextIcon} />
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default Welcome;