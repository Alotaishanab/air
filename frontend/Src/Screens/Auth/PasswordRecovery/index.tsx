import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  TextInput
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionic from 'react-native-vector-icons/Ionicons';
import useThemeContext from '../../../Util/useThemeContext';



export type Props = {
  navigation: any;
};


const PasswordRecovery = (props: any) => {
  const { Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme } = useThemeContext();


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [clickPass, setClickPass] = useState(false)
  const [remberMe, setRememberMe] = useState(false);


  return (
    <SafeAreaView style={[Styles.safeAreaContainer, { backgroundColor: Colors.background }]}>
      <StatusBar barStyle={colorTheme === 'dark' ? "light-content" : "dark-content"} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
        enableOnAndroid={true} extraHeight={130} extraScrollHeight={130}
        enableAutomaticScroll={(Platform.OS === 'ios')}
        contentContainerStyle={Styles.areaContainer}>
        <View style={Styles.mainContainer}>

          <View style={Styles.headerEmpty} />

          <View style={Styles.headerContainer}>

            <View style={Styles.headerWrapper}>
              <Text style={[Styles.headText, { color: Colors.authTitleColor }]}>{`Recover Password`}</Text>
              <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                <Ionic
                  name={"close"}
                  size={28}
                  style={{ color: Colors.headerColor }} />
              </TouchableOpacity>
            </View>

            <View style={Styles.bottomInner}>
              <Text style={Styles.descriptionText}>
                <Text style={[Styles.descriptionText, { color: Colors.headerColor }]}>{`Recovery code has been sent to your mobile number ending `}</Text>
                <Text style={[Styles.registerAccount, { color: Colors.pinColor }]}>{`2314.`}</Text>
                <Text style={[Styles.descriptionText, { color: Colors.headerColor }]}>{` Please enter the 4 digit code below to recover your password.`}</Text>
              </Text>
            </View>

            {/* Email */}
            <View style={[Styles.wrapper, { backgroundColor: Colors.white, borderColor: Colors.colorBorder }]}>
              <TextInput style={[Styles.textInput, { color: Colors.inputColor }]}
                value={email}
                placeholder={"Enter 4 Digit Code"}
                placeholderTextColor={"#858585"}
                onChangeText={(value) => {
                  setEmail(value)
                }} />
              <Image source={Images.keyboard} style={Styles.iconStyle} />
            </View>

            {/* Login Button */}
            <TouchableOpacity
            // onPress={() => {
            //   props.navigation.navigate("DrawerStack", {
            //     screen: "BottomNavigation",
            //     params: {
            //       screen: "HomeTab"
            //     }
            //   })
            // }}
            >
              <LinearGradient colors={['#254A56', '#415F63']}
                style={Styles.nextButton}>
                <Text style={[Styles.nextText, { color: Colors.loginButtonColor }]}>{`Confirm`}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={Styles.bottomEmpty} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default PasswordRecovery;