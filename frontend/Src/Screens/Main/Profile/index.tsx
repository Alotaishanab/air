import React, { useState, useEffect } from 'react';
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
import Styles from './Styles';
import Images from '../../../Styles/Images';
import LinearGradient from 'react-native-linear-gradient';
import Ionic from 'react-native-vector-icons/Ionicons';
import useThemeContext from '../../../Util/useThemeContext';
import EditProfileModal from '../../Auth/EditProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';



export type Props = {
  navigation: any;
};


const Profile = (props: any) => {
  const { Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme } = useThemeContext();
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Initialize with empty data
  const [userDetails, setUserDetails] = useState({
    first_name: '', 
    email: '',
    phone: '',
  });

  // Fetch user data 
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = await AsyncStorage.getItem('userDetails');
        console.log('User data from storage:', userData); // Check the retrieved data
        if (userData !== null) {
          const userDetails = JSON.parse(userData);
          console.log('Parsed user details:', userDetails); // Verify the structure
          setUserDetails(userDetails);
        }
      } catch (error) {
        console.log('Error retrieving user data:', error);
      }
    };

    fetchUserDetails();
  }, []);


  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const changeMode = () => {
    if (colorTheme === 'dark') {
      setColorTheme('light')
    }
    else {
      setColorTheme('dark')
    }
  }
  return (
    <SafeAreaView style={[Styles.safeAreaContainer, { backgroundColor: Colors.background }]}>
      <StatusBar barStyle={colorTheme === 'dark' ? "light-content" : "dark-content"} />
      <View style={Styles.mainContainer}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>

            <View style={Styles.headerContainer}>
              <View style={Styles.empty} />
              <Image source={Images.user1} style={Styles.userIcon} />
              <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                <Image source={Images.cross} style={Styles.crossIcon} />
              </TouchableOpacity>
            </View>

            <View style={Styles.dataContainer}>
              <Text style={[Styles.toddText, {
                color: Colors.authTitleColor
              }]}>{userDetails.first_name}</Text>

              {/* Edit Button */}
              <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <LinearGradient colors={['#FCF7EE', '#FFFFFF']}
                  style={Styles.editWraapper}>
                  <Text style={[Styles.editTitle, {
                    color: Colors.appColor
                  }]}>{"Edit Profile"}</Text>
                </LinearGradient>
              </TouchableOpacity>
          

            <EditProfileModal
              isVisible={isModalVisible}
              onClose={handleCloseModal}
              />
            </View>

            {/* List Email */}
            <View style={[Styles.listContainer, {
              backgroundColor: Colors.listColor,
              borderBottomColor: Colors.listBorder
            }]}>
              <View style={Styles.listInner}>
                <Image source={Images.mail} style={Styles.iconStyle} />
                <View style={Styles.seperateWrap}>
                  <Text style={[Styles.listTitle, {
                    color: Colors.authTitleColor
                  }]}>{"Email"}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.headerColor
                  }]}>{userDetails.email}</Text>
                </View>
              </View>
            </View>

            

            {/* List Password */}

            <View style={[Styles.listContainer, {
              backgroundColor: Colors.listColor,
              borderBottomColor: Colors.listBorder
            }]}>
              <View style={Styles.listInner}>
                <Image source={Images.lock} style={Styles.iconStyle} />
                <View style={Styles.seperateWrap}>
                  <Text style={[Styles.listTitle, {
                    color: Colors.authTitleColor
                  }]}>{"Password"}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.headerColor
                  }]}>{"********"}</Text>
                </View>
              </View>
            </View>

            <View style={Styles.tabsDataContainer}>
              {/* Tabs First Row */}
              <View style={Styles.tabsContainer}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("VoiceManagement") }}>
                  <LinearGradient 
                  colors={[Colors.appColor, Colors.nameColor]}
                    style={Styles.tabWraapper}>
                    <Image source={Images.voiceRecording} style={Styles.tabsImage} />
                    <Text style={[Styles.tabTitle, {
                      color: Colors.white
                    }]}>{"Voice \nManagement"}</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { props.navigation.navigate("Preferences") }}>
                  <LinearGradient 
                  colors={[Colors.appColor, Colors.nameColor]}
                    style={Styles.tabWraapper}>
                    <Image source={Images.filters} style={Styles.tabsImage} />
                    <Text style={[Styles.tabTitle, {
                      color: Colors.white
                    }]}>{"Settings"}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              {/* Tabs Second Row */}
              <View style={Styles.tabsSecondContainer}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("About") }}>
                  <LinearGradient 
                  colors={[Colors.appColor, Colors.nameColor]}
                    style={Styles.tabWraapper}>
                    <Image source={Images.info} style={Styles.tabsImage} />
                    <Text style={[Styles.tabTitle, {
                      color: Colors.white
                    }]}>{"About"}</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { props.navigation.navigate("HelpSupport") }}>
                  <LinearGradient 
                    colors={[Colors.appColor, Colors.nameColor]}
                    style={Styles.tabWraapper}>
                    <Image source={Images.help} style={Styles.tabsImage} />
                    <Text style={[Styles.tabTitle, {
                      color: Colors.white
                    }]}>{"Help & Support"}</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>


          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Profile;