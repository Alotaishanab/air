import React, { useState, useEffect } from 'react';
import { CalendarList, Calendar } from 'react-native-calendars';
import { Modal, View, TouchableOpacity, Text, TextInput,Image } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import getStyles from './Styles';
import useThemeContext from '../../../Util/useThemeContext';
import axiosInstance from '../../../../api/axiosInstance';
import { Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';
import Images from '../../../Styles/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddAppointments = ({ isVisible, onClose }) => {
  const { Colors } = useThemeContext();
  const styles = getStyles(Colors);

 
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;


  // Initialize fields
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [region, setRegion] = useState(null);


  const handleSave = async () => {
    // Prepare data for the API request
    const data = {
      Title: title,
      Add_Address: address,
      Date: selectedDate,
      Time: time,
    };
  
    try {
      // Retrieve user token from AsyncStorage
      const userToken = await AsyncStorage.getItem('userToken');
      if (!userToken) {
        throw new Error('User token not found');
      }
  
      // Include user token in the request headers
      const response = await axiosInstance.post('AddAppointment/', data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
  
      // Alert the user that the appointment was saved successfully
      alert('New Appointment Added Successfully');
  
      // Handle any additional logic such as clearing form fields or closing modals
      console.log('Saved:', JSON.stringify(response.data, null, 2));
      setTitle('');
      setSelectedDate('');
      setTime('');
      setAddress('');
      onClose(); // Close modal or perform other necessary actions
    } catch (error) {
      // Handle error if the request fails
      console.error('Error saving appointment:', error);
    }
  };
  

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Image source={Images.cross} style={{ width: 24,height: 24}} />          
            </TouchableOpacity >
              <Text style={[styles.modalTitle, { color: Colors.authTitleColor }]}>
              New Appointment 
            </Text>
            <TouchableOpacity onPress={handleSave}>
              <Image source={Images.arrowRight} style={{ width: 24,height: 24}} /> 
            </TouchableOpacity>
          </View>

    {/* Title Input */}
  <View style={styles.inputWrapper}>
    <TextInput
      style={[styles.textInput, { color: Colors.authTitleColor }]}
      value={title}
      onChangeText={setTitle}
      placeholder="Enter appointment title"
      placeholderTextColor={Colors.authTitleColor}
    />
  </View>

    {/* Date Input */}
<View style={styles.inputWrapper}>
  <Calendar
    // Horizontal and paging enabled
    horizontal={true}
    pagingEnabled={true}
    calendarWidth={Dimensions.get('window').width }
    firstDay={1}
    style={{
      width:screenWidth*0.9,
    }}
    onDayPress={(day) => {
      setSelectedDate(day.dateString);
    }}
    pastScrollRange={0}
    futureScrollRange={24}
    scrollEnabled={true}
    showScrollIndicator={true}
    markedDates={{
      [selectedDate]: {
        selected: true,
        marked: true,
        selectedColor: Colors.accent,
      },
    }}
    theme={{
      backgroundColor: Colors.background,
      calendarBackground: Colors.background,
      todayTextColor: Colors.accent,
      dayTextColor: Colors.authTitleColor,
      textDisabledColor: Colors.textDisabled,
      textDisabledColor: "#a9a9a9",
      dotColor: Colors.accent,
      selectedDotColor: '#ffffff',
      arrowColor: Colors.accent,
      monthTextColor: Colors.authTitleColor,
      textDayFontFamily: 'Lexend-Deca',
      textMonthFontFamily: 'Lexend-Deca',
      textDayHeaderFontFamily: 'Lexend-Deca',
      textDayFontSize: 16,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16,
      arrowStyle: {
        // Adjust the size of the arrows here
        width: 50,
        height: 50,
      },
    }}
  />
</View>

    {/* Time Input */}
    <View style={styles.inputWrapper}>
      <TextInput
        style={[styles.textInput, { color: Colors.authTitleColor }]}
        value={time}
        onChangeText={setTime}
        placeholder="Enter time (HH:MM)"
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
              style={[styles.textInput, { color: Colors.authTitleColor }]}
              value={address}
              onChangeText={setAddress}
              placeholder="Enter Address"
              placeholderTextColor={Colors.authTitleColor}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddAppointments;