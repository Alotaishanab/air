import React, {useState, useEffect} from 'react';
import {CalendarList, Calendar} from 'react-native-calendars';
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import getStyles from './Styles';
import useThemeContext from '../../../Util/useThemeContext';
import axiosInstance from '../../../../api/axiosInstance';
import Images from '../../../Styles/Images';
import {Dimensions, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MapView from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewAppointQuickPlan = ({ route }) => {
  const { startTime, endTime } = route.params;
  const {Colors} = useThemeContext();
  const styles = getStyles(Colors);

  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  // Initialize fields////
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [region, setRegion] = useState(null);

  const goBack = () => {
    navigation.goBack();
  };

  console.log(startTime , endTime);
  
  const handleSave = async () => {
    const data = {
      Title: title,
      Add_Address: address,
      type: 'event',
      Date: '2024-03-01',
      start_time: startTime,
      end_time: endTime,
    };

   
    
    try {
      // Retrieve user token from AsyncStorage
      const userToken = await AsyncStorage.getItem('userToken');
      if (!userToken) {
        throw new Error('User token not found');
      }

      console.log(userToken);
      // Include user token in the request headers
      const response = await axiosInstance.post('QuickPlan/', data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      // alert('Quick plan Event Added Successfully');
      navigation.goBack();

      // console.log('Saved:', JSON.stringify(response.data, null, 2));
      setTitle('');
      setAddress('');
    } catch (error) {
      console.error('Error saving Quick plan event:', error);
    }
  };

  return (
    <View style={styles.modalView}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Ionic name="close" style={styles.crossIcon} size={28} />
            {/* <Image source={Images.cross} style={{width: 24, height: 24}} /> */}
          </TouchableOpacity>
          <Text style={[styles.modalTitle, {color: Colors.authTitleColor}]}>
            Add New Appointment
          </Text>
          <TouchableOpacity onPress={handleSave}>
            <Ionic name="checkmark" style={styles.crossIcon} size={28} />
            {/* <Image source={Images.arrowRight} style={{width: 24, height: 24}} /> */}
          </TouchableOpacity>
        </View>

        {/* Title Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.textInput, {color: Colors.authTitleColor}]}
            value={title}
            onChangeText={setTitle}
            placeholder="Enter Appointment title"
            placeholderTextColor={Colors.authTitleColor}
          />
        </View>

        {/* Map View */}
        <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825, // Replace with your desired region
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
      }}
      // Enable user location
      showsUserLocation={true}
      // Add additional MapView configuration here if needed
    />
  </View>

        {/* Address Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.textInput, {color: Colors.authTitleColor}]}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter Address"
            placeholderTextColor={Colors.authTitleColor}
          />
        </View>
      </View>
    </View>
  );
};

export default NewAppointQuickPlan;
