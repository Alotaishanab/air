import React, { useState, useEffect } from 'react';
import { Calendar, CalendarList } from 'react-native-calendars';
import { Modal, View, TouchableOpacity, Text, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import getStyles from './Styles';
import useThemeContext from '../../../Util/useThemeContext';
import axiosInstance from '../../../../api/axiosInstance';
import MapView, { Marker } from 'react-native-maps';
import Images from '../../../Styles/Images';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AddAppointments = ({ isVisible, onClose }) => {
  const { Colors } = useThemeContext();
  const styles = getStyles(Colors);

  // Initialize fields
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (address) {
      searchLocation();
    }
  }, [address]);

  const searchLocation = async () => {
    try {
      // Replace YOUR_API_KEY with your actual Google Maps Geocoding API key
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyDw4oZC-w_viSxpA5v2KXTBEmZDWCD9shM`);
      const result = response.data.results[0];
      if (result) {
        const { location } = result.geometry;
        setRegion({
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
        setMarker({
          latitude: location.lat,
          longitude: location.lng,
        });
      }
    } catch (error) {
      console.error('Error searching for location:', error);
    }
  };


  const handleSave = async () => {
    // Prepare data for the API request
    const data = { Title: title, Add_Address: address, Date: selectedDate, Time: time };

    try {
      // Retrieve user token from AsyncStorage
      const userToken = await AsyncStorage.getItem('userToken');
      if (!userToken) throw new Error('User token not found');

      // Include user token in the request headers
      const response = await axiosInstance.post('AddAppointment/', data, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      // Alert the user that the appointment was saved successfully
      alert('New Appointment Added Successfully');
      setTitle('');
      setSelectedDate('');
      setTime('');
      setAddress('');
      onClose(); // Close modal or perform other necessary actions
    } catch (error) {
      console.error('Error saving appointment:', error);
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalView}>
        <ScrollView style={{ width: '100%' }}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity onPress={onClose}>
                <Image source={Images.cross} style={{ width: 24, height: 24 }} />
              </TouchableOpacity>
              <Text style={[styles.modalTitle, { color: Colors.authTitleColor }]}>New Appointment</Text>
              <TouchableOpacity onPress={handleSave}>
                <Image source={Images.checkmark} style={{ width: 24, height: 24 }} />
              </TouchableOpacity>
            </View>
  
            {/* Map View */}
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              showsUserLocation={true}
            />
  
            {/* Title Input */}
            <TextInput
              style={[styles.textInput, { color: Colors.authTitleColor }]}
              value={title}
              onChangeText={setTitle}
              placeholder="Appointment Title"
              placeholderTextColor={Colors.placeholderColor}
            />
  
            {/* Date Picker */}
            <Calendar
              onDayPress={(day) => setSelectedDate(day.dateString)}
              markedDates={{ [selectedDate]: { selected: true, marked: true } }}
              theme={{
                todayTextColor: Colors.accent,
                textDayFontFamily: 'Lexend-Deca',
                textMonthFontFamily: 'Lexend-Deca',
                textDayHeaderFontFamily: 'Lexend-Deca',
              }}
            />
  
            {/* Time Input */}
            <TextInput
              style={[styles.textInput, { color: Colors.authTitleColor }]}
              value={time}
              onChangeText={setTime}
              placeholder="Time (HH:MM)"
              placeholderTextColor={Colors.placeholderColor}
            />
  
            {/* Address Input */}
            <TextInput
              style={[styles.textInput, { color: Colors.authTitleColor }]}
              value={address}
              onChangeText={setAddress}
              placeholder="Address"
              placeholderTextColor={Colors.placeholderColor}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );  
};

export default AddAppointments;
