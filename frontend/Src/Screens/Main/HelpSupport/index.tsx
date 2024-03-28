import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import LinearGradient from 'react-native-linear-gradient';
import Ionic from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import useThemeContext from '../../../Util/useThemeContext';


export type Props = {
  navigation: any;
};


const HelpSupport = (props: any) => {
  const { Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme } = useThemeContext();


  const [tab, setTab] = useState(1)
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [more, setMore] = useState(null)


  const HelpData = [
    {
      question: `Q. Lorem ipsum dolor sit amet?`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      question: `Q. Duis aute irure dolor in reprehenderit?`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      question: `Q. Excepteur sint occaecat cupidatat?`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      question: `Q. Quis nostrud exercitation ullamco?`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      question: `Q. Tempor incididunt ut labore et dolore?`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      question: `Q. Officia deserunt mollit anim id est?`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
  ]

  const expandItem = (val: any) => {
    if (more == val) {
      setMore(null)
    }
    else {
      setMore(val)
    }
  }

  return (
    <SafeAreaView style={[Styles.safeAreaContainer, { backgroundColor: Colors.background }]}>
      <StatusBar barStyle={colorTheme === 'dark' ? "light-content" : "dark-content"} />

      <View style={Styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>

            <View style={Styles.headerWrapper}>
              <Text style={[Styles.headText, { color: Colors.authTitleColor }]}>{`Help & Support`}</Text>
              <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                <Ionic
                  name={"close"}
                  size={28}
                  style={{ color: Colors.headerColor }} />
              </TouchableOpacity>
            </View>


            {/* Tabs */}
            <View style={[Styles.tabsContainer, { marginBottom: tab == 2 ? hp(5) : 0, borderColor: Colors.headerColor }]}>
              <TouchableOpacity onPress={() => { setTab(1) }}
                style={[Styles.tabsInnerWrap, { backgroundColor: tab == 1 ? Colors.headerColor : "transparent", borderColor: Colors.headerColor }]}>
                <Text style={[Styles.tabTitle, { color: tab == 1 ? Colors.white : Colors.headerColor }]}>{`Support`}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { setTab(2) }}
                style={[Styles.tabsRightWrap, { backgroundColor: tab == 2 ? Colors.headerColor : "transparent", borderColor: Colors.headerColor }]}>
                <Text style={[Styles.tabTitle, { color: tab == 2 ? Colors.white : Colors.headerColor }]}>{`FAQs`}</Text>
              </TouchableOpacity>
            </View>
            {/* Tabs End */}

            {
              tab == 1 ?
                <View style={Styles.dataContainer}>
                  <Text style={[Styles.toddText, {
                    color: Colors.authTitleColor
                  }]}>{`Fill up the form below and our team will get in touch within 24 hours.`}</Text>

                  {/* Full Name */}
                  <View style={[Styles.wrapper, { backgroundColor: Colors.white, borderColor: Colors.colorBorder }]}>
                    <TextInput style={[Styles.textInput, { color: Colors.inputColor }]}
                      value={firstName}
                      placeholder={"Enter Full Name"}
                      placeholderTextColor={"#858585"}
                      onChangeText={(value) => {
                        setFirstName(value)
                      }} />
                    <Image source={Images.person} style={Styles.iconStyle} />
                  </View>

                  {/* Enter Email */}
                  <View style={[Styles.wrapper, { backgroundColor: Colors.white, borderColor: Colors.colorBorder }]}>
                    <TextInput style={[Styles.textInput, { color: Colors.inputColor }]}
                      value={email}
                      placeholder={"Enter Email"}
                      placeholderTextColor={"#858585"}
                      onChangeText={(value) => {
                        setEmail(value)
                      }} />
                    <Image source={Images.mail} style={Styles.iconStyle} />
                  </View>

                  {/* Enter Message */}
                  <View style={[Styles.messageWrapper, { backgroundColor: Colors.white, borderColor: Colors.colorBorder }]}>
                    <View style={Styles.innerWrapper}>
                      <TextInput style={[Styles.textInput, { color: Colors.inputColor }]}
                        value={message}
                        placeholder={"Enter Message"}
                        placeholderTextColor={"#858585"}
                        onChangeText={(value) => {
                          setMessage(value)
                        }} />
                      <Image source={Images.chat} style={Styles.iconStyle} />
                    </View>
                  </View>

                  {/* Submit Button */}
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("BottomNavigation", {
                        screen: "HomeTab",
                      })
                    }}>
                    <LinearGradient colors={['#254A56', '#415F63']}
                      style={Styles.nextButton}>
                      <Text style={[Styles.nextText, { color: Colors.loginButtonColor }]}>{`Submit`}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                :
                HelpData?.map((item, keyID) => {
                  return (
                    <View key={keyID} style={[Styles.listContainer, {
                      backgroundColor: Colors.listColor,
                      borderBottomColor: Colors.listBorder
                    }]}>
                      <TouchableOpacity onPress={() => { expandItem(keyID) }}>
                        <View style={[Styles.listInner, {
                          marginBottom: more == keyID ? 0 : hp(2),
                        }]}>
                          <Text style={[Styles.listTitle, {
                            color: Colors.authTitleColor
                          }]}>{item?.question}</Text>
                          <Ionic
                            name={"add-circle-outline"}
                            size={24}
                            style={{ color: Colors.appColor }} />
                        </View>
                        {
                          more == keyID &&
                          <View style={Styles.expandContainer}>
                            <Text style={[Styles.termsDescription, {
                              color: Colors.termsColor,
                              marginBottom: more == keyID ? hp(2) : 0,
                            }]}>{item?.answer}</Text>
                          </View>
                        }
                      </TouchableOpacity>
                    </View>
                  )
                })

            }

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default HelpSupport;