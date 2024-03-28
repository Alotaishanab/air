import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Images from '../../../Styles/Images';
import getStyles from './Styles';
import useThemeContext from '../../../Util/useThemeContext';
import {launchImageLibrary} from 'react-native-image-picker';
import axiosInstance from '../../../../api/axiosInstance';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileModal = ({isVisible, onClose}) => {
  const {Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme} =
    useThemeContext();
  const styles = getStyles(Colors);

  // Initialize fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [paswrd, setpaswrd] = useState('');
  const [confirmpaswrd, setconfirmpaswrd] = useState('');
  const [profilePic, setProfilePic] = useState(Images.user1);

  const [profileData, setProfileData] = useState<any>(null);

  const fetchProfileData = async () => {
    try {
      // Retrieve user token from AsyncStorage
      const userToken = await AsyncStorage.getItem('userToken');

      if (!userToken) {
        throw new Error('User token not found');
      }

      const response = await axiosInstance.get('profile/', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.status === 200) {
        // Set profile data in state
        const {first_name, last_name, phone,password,confirm_password} = response.data;
        setFirstName(first_name);
        setLastName(last_name);
        setPhone(phone);
        setpaswrd(password);
        setconfirmpaswrd(confirm_password)
       
      } else {
        throw new Error('Failed to fetch profile data');
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
      // Handle error
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleSave = () => {
    alert(`Saved: ${firstName}, ${lastName}, ${email}, ${phone}`);
    onClose();
  };

  const handleEditProfile = async (): Promise<void> => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (!userToken) {
        throw new Error('User token not found');
      }


      const response = await axiosInstance.put(
        'profile/',
        {
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          password:paswrd,
          confirm_password:confirmpaswrd,

         
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      alert('Profile Data updated Succesfully');

      console.log('Profile updated:', response.data);
    } catch (error) {
      alert('Failed to update profile');
      console.error('Failed to update profile:', error);
    }
  };

  const handleProfilePicChange = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.errorCode) {
        console.error('ImagePicker Error: ', response.errorMessage);
      } else if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        console.log(response);

        const source = {uri: response.assets[0].uri};
        setProfilePic(source);
      }
    });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalView}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
            {/* <Image source={Images.cross} style={{ width: 24,height: 24}} /> */}
              <Ionic name="close" style={styles.crossIcon} size={28} />
            </TouchableOpacity>
            <Text
              style={[
                styles.modalTitle,
                {
                  color: Colors.authTitleColor,
                },
              ]}>
              Edit Profile
            </Text>
            <TouchableOpacity onPress={handleEditProfile}>
            {/* <Image source={Images.arrowRight} style={{ width: 28,height: 28}} /> */}
            
              <Ionic name="checkmark" style={styles.crossIcon} size={28} />
            </TouchableOpacity>
          </View>

          {/* Profile Picture */}
          <View style={styles.profilePicContainer}>
            {/* Profile Picture */}
            <TouchableOpacity
              onPress={handleProfilePicChange}
              style={styles.profilePicContainer}>
              <Image source={profilePic} style={styles.profilePic} />
            </TouchableOpacity>
          </View>

          {/* First Name */}
          <View style={styles.inputWrapper0}>
            <Text style={styles.inputTitle}>First Name</Text>
            <View style={styles.inputWrapper1}>
              <Image source={Images.person} style={styles.iconStyle} />
              <TextInput
                style={styles.textInput}
                title="First Name"
                value={firstName}
                onChangeText={setFirstName}
                placeholder="Enter First Name"
              />
            </View>
          </View>
          {/* Last Name */}
          <View style={styles.inputWrapper0}>
            <Text style={styles.inputTitle}>Last Name</Text>
            <View style={styles.inputWrapper1}>
              <Image source={Images.person} style={styles.iconStyle} />
              <TextInput
                style={styles.textInput}
                title="Last Name"
                value={lastName}
                onChangeText={setLastName}
                placeholder="Enter Last Name"
              />
            </View>
          </View>

          {/* phone */}
          <View style={styles.inputWrapper0}>
            <Text style={styles.inputTitle}>Mobile Phone</Text>
            <View style={styles.inputWrapper1}>
              <Image source={Images.ad_units} style={styles.iconStyle} />
              <TextInput
                style={styles.textInput}
                title="Phone"
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter Last Name"
              />
            </View>
          </View>
          {/* PASSWORD */}
          <View style={styles.inputWrapper0}>
            <Text style={styles.inputTitle}>New Password</Text>
            <View style={styles.inputWrapper1}>
              <Image source={Images.person} style={styles.iconStyle} />
              <TextInput
                style={styles.textInput}
                title="Password"
                value={paswrd}
                onChangeText={setpaswrd}
                placeholder="Enter New Password"
              />
            </View>
          </View>
          {/* CONFRIM PASSWORD */}
          <View style={styles.inputWrapper0}>
            <Text style={styles.inputTitle}>Confrim New Password</Text>
            <View style={styles.inputWrapper1}>
              <Image source={Images.person} style={styles.iconStyle} />
              <TextInput
                style={styles.textInput}
                title="confrimPassword"
                value={confirmpaswrd}
                onChangeText={setconfirmpaswrd}
                placeholder="Enter confrim Password"
              />
            </View>
          </View>
         

          
        </View>
      </View>
    </Modal>
  );
};

export default EditProfileModal;
