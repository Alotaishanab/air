import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionic from 'react-native-vector-icons/Ionicons';
import useThemeContext from '../../../Util/useThemeContext';




export type Props = {
  navigation: any;
};


const About = (props: any) => {
  const { Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme } = useThemeContext();

  const [tab, setTab] = useState(1)
  const [inner, setInner] = useState(1)

  return (
    <SafeAreaView style={[Styles.safeAreaContainer, { backgroundColor: Colors.background }]}>
      <StatusBar barStyle={colorTheme === 'dark' ? "light-content" : "dark-content"} />

      <View style={Styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>

            <View style={Styles.headerWrapper}>
              <Text style={[Styles.headText, { color: Colors.authTitleColor }]}>{`About`}</Text>
              <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
              <Image source={Images.cross} style={Styles.crossIcon} />
              </TouchableOpacity>
            </View>

            {/* Tabs */}
            <View style={[Styles.tabsContainer, { marginBottom: tab == 2 ? hp(3.5) : hp(5), borderColor: Colors.headerColor }]}>
              <TouchableOpacity onPress={() => { setTab(1) }}
                style={[Styles.tabsInnerWrap, { backgroundColor: tab == 1 ? Colors.headerColor : "transparent", borderColor: Colors.headerColor }]}>
                <Text style={[Styles.tabTitle, { color: tab == 1 ? Colors.white : Colors.headerColor }]}>{`About App`}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { setTab(2) }}
                style={[Styles.tabsRightWrap, { backgroundColor: tab == 2 ? Colors.headerColor : "transparent", borderColor: Colors.headerColor }]}>
                <Text style={[Styles.tabTitle, { color: tab == 2 ? Colors.white : Colors.headerColor }]}>{`Legal Info`}</Text>
              </TouchableOpacity>
            </View>
            {/* Tabs End */}

            {
              tab == 1 &&
              <View style={[Styles.listContainer, {
                backgroundColor: Colors.listColor,
                borderBottomColor: Colors.listBorder
              }]}>
                <View style={Styles.listInner}>
                  <Text style={[Styles.listTitle, {
                    color: Colors.authTitleColor
                  }]}>{"About App"}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.termsColor
                  }]}>{`AIRA is your AI assistant with a focus on emotional intelligence and user interaction. Designed to understand and adapt to your emotional state, AIRA makes every conversation more meaningful.`}</Text>
                </View>
              </View>
            }

            {
              tab == 1 &&
              <View style={[Styles.listContainer, {
                backgroundColor: Colors.listColor,
                borderBottomColor: Colors.listBorder
              }]}>
                <View style={Styles.listInner}>
                  <Text style={[Styles.listTitle, {
                    color: Colors.authTitleColor
                  }]}>{"Version"}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.termsColor
                  }]}>{`v1.0.0`}</Text>
                </View>
              </View>
            }
            {
              tab == 1 &&
              <View style={[Styles.listContainer, {
                backgroundColor: Colors.listColor,
                borderBottomColor: Colors.listBorder
              }]}>
                <View style={Styles.listInner}>
                  <Text style={[Styles.listTitle, {
                    color: Colors.authTitleColor
                  }]}>{"Developer Contact"}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.termsColor
                  }]}>{`Email: abdullah.alotaishan@kcl.ac.uk`}</Text>
                </View>
              </View>
            }
            {
              tab == 1 &&
              <View style={[Styles.listContainer, {
                backgroundColor: Colors.listColor,
                borderBottomColor: Colors.listBorder
              }]}>
                <View style={Styles.listInner}>
                  <Text style={[Styles.listTitle, {
                    color: Colors.authTitleColor
                  }]}>{"Acknowledgements"}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.termsColor
                  }]}>{`Special acknowledgment goes to Dr. Ian Kelly for his invaluable trust and constructive criticism throughout this project. His rigorous feedback and high standards have not only shaped the development of AIRA but also fostered a resilient spirit of innovation and determination within me. His guidance has been a cornerstone in transforming challenges into stepping stones for success.`}</Text>
                </View>
              </View>
            }

            {
              (tab == 2 && inner == 1) ? (
                <View style={Styles.flexDirection}>
                  <TouchableOpacity
                    style={[Styles.activeTabInnerMain, { borderBottomColor: Colors.authTitleColor }]}
                    onPress={() => setInner(1)}>
                    <Text style={[Styles.activeInnerTab, { color: Colors.authTitleColor }]}>{'Terms of service'}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setInner(2)}
                    style={[Styles.InactiveTabInnerMain, { borderBottomColor: Colors.infoColor }]}>
                    <Text style={[Styles.innerInActiveTab, { color: Colors.infoColor }]}>{'Privacy Policy'}</Text>
                  </TouchableOpacity>
                </View>
              ) :
                (tab == 2 && inner == 2) &&
                (
                  <View style={Styles.flexDirection}>
                    <TouchableOpacity
                      onPress={() => setInner(1)}
                      style={[Styles.InactiveTabInnerMain, { borderBottomColor: Colors.infoColor }]}>
                      <Text style={[Styles.innerInActiveTab, { color: Colors.infoColor }]}>{'Terms of service'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[Styles.activeTabInnerMain, { borderBottomColor: Colors.authTitleColor }]}
                      onPress={() => setInner(2)}>
                      <Text style={[Styles.activeInnerTab, { color: Colors.authTitleColor }]}>{'Privacy Policy'}</Text>
                    </TouchableOpacity>
                  </View>
                )}

{
  tab == 2 && inner == 1 &&
    <ScrollView style={Styles.descriptionInner}>
      {/* Start of Terms of Service content */}
      <Text style={Styles.tcSectionTitle}>1. Acceptance of Terms</Text>
      <Text style={[Styles.listDes, {
                    color: Colors.termsColor }]}>
        By accessing or using the AIRA app, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.
      </Text>

      <Text style={Styles.tcSectionTitle}>2. Use License</Text>
      <Text style={[Styles.listDes, {
                    color: Colors.termsColor }]}>
        Permission is granted to temporarily download one copy of AIRA per device for personal, non-commercial transitory use only. This is the grant of a license, not a transfer of title, and under this license, you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained in AIRA; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server.
      </Text>

      <Text style={Styles.tcSectionTitle}>3. Disclaimer</Text>
      <Text style={[Styles.listDes, {
                    color: Colors.termsColor }]}>
        The materials on AIRA are provided "as is". AIRA makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </Text>

      <Text style={Styles.tcSectionTitle}>4. Limitations</Text>
      <Text style={[Styles.listDes, {
                    color: Colors.termsColor }]}>
        In no event shall AIRA or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AIRA's website, even if AIRA or an AIRA authorized representative has been notified orally or in writing of the possibility of such damage.
      </Text>

      <Text style={Styles.tcSectionTitle}>5. Accuracy of Materials</Text>
      <Text style={[Styles.listDes, {
                    color: Colors.termsColor }]}>
  The materials appearing on AIRA's website could include technical, typographical, or photographic errors. AIRA does not warrant that any of the materials on its website are accurate, complete, or current. AIRA may make changes to the materials contained on its website at any time without notice. However, AIRA does not commit to update the materials.
</Text>

<Text style={Styles.tcSectionTitle}>6. Links</Text>
<Text style={[Styles.listDes, {
                    color: Colors.termsColor }]}>
  AIRA has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AIRA of the site. Use of any such linked website is at the user's own risk.
</Text>

<Text style={Styles.tcSectionTitle}>7. Modifications</Text>
<Text style={[Styles.listDes, {
                    color: Colors.termsColor }]}>
  AIRA may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these terms of service.
</Text>

<Text style={Styles.tcSectionTitle}>8. Governing Law</Text>
<Text style={[Styles.listDes, {
                    color: Colors.termsColor }]}>
  These terms and conditions are governed by and construed in accordance with the laws of United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
</Text>

<Text style={Styles.tcSectionTitle}>9. User Conduct</Text>
<Text style={[Styles.listDes, {
                    color: Colors.termsColor }]}>
  Users of AIRA agree not to use the app for any purpose that is unlawful or prohibited by these Terms. You may not use AIRA in any manner that could damage, disable, overburden, or impair the app or interfere with any other party's use of the app.
</Text>

<Text style={Styles.tcSectionTitle}>10. User Data and Privacy</Text>
<Text style={[Styles.listDes, {
                    color: Colors.termsColor }]}>
  AIRA is committed to protecting your privacy and data. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your data.
</Text>
      
    
    </ScrollView>
}


          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default About;