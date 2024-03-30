import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  TextInput,
  ScrollView
} from 'react-native';
import getStyles from './Styles';
import Images from '../../../Styles/Images';
import LinearGradient from 'react-native-linear-gradient';
import Ionic from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import useThemeContext from '../../../Util/useThemeContext';
import { useNavigation } from '@react-navigation/native';


export type Props = {
  navigation: any;
};


const VoiceManagement = (props: any) => {
  const { Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme } = useThemeContext();
  const navigation = useNavigation();

  const styles = getStyles(Colors);


  const voiceData = [
    {
      date: `16-10-2023`,
      time: `11.24`
    },
    {
      date: `16-10-2023`,
      time: `02.17`
    },
    {
      date: `14-10-2023`,
      time: `12.19`
    },
    {
      date: `12-10-2023`,
      time: `09.16`
    },
    {
      date: `10-10-2023`,
      time: `06.34`
    }
  ]

  return (
    <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: Colors.background }]}>
      <StatusBar barStyle={colorTheme === 'dark' ? "light-content" : "dark-content"} />
      <View style={styles.mainContainer}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollContainer}>

            <View style={styles.headerWrapper}>
              <Text style={[styles.headerTitle, {
                color: Colors.authTitleColor
              }]}>{`Voice Clone Management`}</Text>
              <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                <Image source={Images.cross} style={styles.crossIcon} />
              </TouchableOpacity>
            </View>

            {/* New Record Button */}
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("NewVoiceRecord")
              }}>
              <LinearGradient colors={['#254A56', '#415F63']}
                style={styles.nextButton}>
                <Text style={[styles.nextText, { color: Colors.loginButtonColor }]}>{`Create new clone`}</Text>
              </LinearGradient>
            </TouchableOpacity>


            {/* List Data */}
            {
              voiceData?.map((item, keyID) => {
                return (
                  <View key={keyID} style={[styles.listContainer, {
                    backgroundColor: Colors.listColor,
                    borderBottomColor: Colors.listBorder
                  }]}>
                    <View style={styles.listInner}>
                      <View style={styles.listLeftWrap}>
                        <Image source={Images.play} style={styles.crossIcon} />
                        <View style={styles.seperateWrap}>
                          <Text style={[styles.listTitle, {
                            color: Colors.authTitleColor
                          }]}>{item?.date}</Text>
                          <Text style={[styles.listDes, {
                            color: Colors.headerColor
                          }]}>{item?.time}</Text>
                        </View>
                      </View>
                      {/* Button */}
                      <TouchableOpacity>
                        <LinearGradient colors={['#FCF7EE', '#FFFFFF']}
                          style={styles.editWraapper}>
                          <Text style={[styles.editTitle, {
                            color: Colors.appColor
                          }]}>{"Select"}</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
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

export default VoiceManagement;