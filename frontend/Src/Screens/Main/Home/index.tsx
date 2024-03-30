import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Images from '../../../Styles/Images';
import useThemeContext from '../../../Util/useThemeContext';
import getStyles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { PermissionsAndroid } from 'react-native';
import axiosInstance from '../../../../api/axiosInstance';
import AddAppointments from '../AddAppointments';
import Phone from '../Phone'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

type Appointment = {
  id: string;
  Title: string;
  Add_Address: string;  
  Date: string;     
  Time: string;     
};

type ToDoItem = {
  id: string;
  title: string;
};

const DailyBrief: React.FC = () => {
  const { Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme } = useThemeContext();
  const [activeSegment, setActiveSegment] = useState('news'); // 'news' or 'traffic'
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherData, setWeatherData] = useState<any>(null);
  const [city, setCity] = useState<string>('NEW YORK'); 

  const [currentCity, setCurrentCity] = useState(null);

  const navigation = useNavigation();
  const styles = getStyles(Colors);

  
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  
  useEffect(() => {
    if (city.trim() !== '') {
      fetchWeatherData();
    }
  }, [city]);

  
  const renderAppointmentItem = ({ item }) => {
    // Standardize the date and time format for parsing
    const datePart = item.Date.replace(/–/g, '-'); // Replace en dash with a regular dash if present
    const timePart = item.Time.split(':'); // Split the time string to ensure correct format
  
    // Construct the ISO string with standardized date and correct time format (HH:MM)
    const appointmentDateTime = `${datePart}T${timePart[0]}:${timePart[1]}:00.000Z`;
  
    // Parse the date and time from the item
    const appointmentDate = new Date(appointmentDateTime);
  
    // Check if the date is valid
    if (isNaN(appointmentDate)) {
      console.error('Invalid date or time format:', item);
      return null; // Do not render this item if the date is invalid
    }
  
    // Format the date and time
    const formattedDate = appointmentDate.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    const formattedTime = appointmentDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).replace(/ /g, '').toLowerCase(); // Remove any spaces and convert AM/PM to lowercase
  
    return (
      <View style={styles.appointmentItem}>
        <Text style={[styles.appointmentName, { color: Colors.authTitleColor }]}>{item.Title}</Text>
        <View style={styles.appointmentDetailsContainer}>
          <Image source={Images.location} style={styles.appointmentIcon} />
          <Text style={styles.appointmentDetails}>{` ${item.Add_Address}`}</Text>
        </View>
        <View style={styles.appointmentDetailsContainer}>
          <Image source={Images.time} style={styles.appointmentIcon} />
          <Text style={styles.appointmentDetails}>{`${formattedDate} at ${formattedTime}`}</Text>
        </View>
      </View>
    );
  }
  
  // Add this function to handle navigation to the AddAppointment screen
  const navigateToAddAppointment = () => {
    navigation.navigate('AddAppointments');
  };

  const ToDoListItem = ({ title, address, isFirst, isLast }) => {
    const { Colors } = useThemeContext();
    const styles = getStyles(Colors);
  
    const borderStyle = {
      borderTopWidth: isFirst ? 0 : StyleSheet.hairlineWidth,
      borderBottomWidth: isLast ? 0 : StyleSheet.hairlineWidth,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    };
  
    return (
      <View style={[styles.todoItem, borderStyle]}>
        <View style={styles.todoLeftContainer}>
          <Image style={styles.todoIcon} source={Images.todoItem} />
            <Text style={[styles.todoText, { color: Colors.authTitleColor }]}>{title}</Text>
        </View>
        <View style={styles.todoLeftContainer}>
        <TouchableOpacity style={styles.markCompleteButton}>
          <Text style={styles.markCompleteButtonText}>Mark Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowIcon}>
        <Image
          style={{...styles.todoIcon, marginRight: 0, width: 24, height: 24}}
          source={Images.arrowRight}
        />
        </TouchableOpacity>
      </View>
    </View>
    );    
  };
  

  const filterUpcomingItems = (items) => {
    const now = new Date();
    // Log the current time for debugging
    console.log("Current time:", now);
  
    return items
      .map(item => {
        // Ensure proper date and time format for comparison
        const itemDateTime = new Date(`${item.Date}T${item.Time}`);
        return { ...item, itemDateTime };
      })
      .filter(item => item.itemDateTime >= now) // Only keep future appointments
      .sort((a, b) => a.itemDateTime - b.itemDateTime) // Sort by nearest date first
      .slice(0, 3); // Optionally limit to first three upcoming items
  };
  

  const getSegmentTextStyle = (segment: string) => {
    return [
      styles.segmentButtonText,
      activeSegment === segment
        ? styles.segmentButtonTextActive
        : styles.segmentButtonTextInactive,
    ];
  };

  const fetchDataFromAPI = async () => {
    try {
      // Retrieve user token from AsyncStorage
      const userToken = await AsyncStorage.getItem('userToken');
      if (!userToken) {
        throw new Error('User token not found');
      }
  
      // Include user token in the request headers
      const response = await axiosInstance.get('AddAppointment/', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
  
      // Apply filter immediately after fetching
      const upcomingAppointments = filterUpcomingItems(response.data || []);
      setAppointments(upcomingAppointments);
  
      // Log the filtered appointments for debugging
      console.log("Filtered appointments:", upcomingAppointments);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };
  
  
  // Modify the useEffect hook
  useEffect(() => {
    fetchDataFromAPI();
    const intervalId = setInterval(fetchDataFromAPI, 3000); // refresh every minute
  
    // Return a cleanup function that clears the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Note: The dependencies array is left empty to only run on mount/unmount
  


  return (
    <SafeAreaView style={[styles.container, { backgroundColor: Colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={[styles.headerTitle, {
            color: Colors.authTitleColor
          }]}>{"Daily Brief"}</Text>
        </View>


        <View style={styles.weatherContainer}>
      {weatherData ? (
        <>
          <Text style={[styles.wetherTitle, {
              color: Colors.authTitleColor
            }]} >{weatherData.name}</Text>
          <Text style={[styles.weatherTemprature, {
              color: Colors.authTitleColor
            }]}>Temperature: {weatherData.main.temp}°F</Text>
          <Text style={[styles.weathercondition, {
              color: Colors.authTitleColor
            }]}>Condition : {weatherData.weather[0].description}</Text>
          <Image source={{ uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png` }} style={styles.wetherImage} />
        </>
      ) : (
        <Text style={[styles.wetherTitle, {
          color: Colors.authTitleColor
        }]}>No weather data available</Text>
      )}
    </View>
        

    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: Colors.authTitleColor }]}>
            {"Your Upcoming Appointments"}
          </Text>
          <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate('Phone')}>
            <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
      </View>

        {appointments.length === 0 ? (
          // Display the "Add New" button if there are no appointments
        <TouchableOpacity style={styles.addNewButton} onPress={navigateToAddAppointment}>
          <Text style={styles.addNewButtonText}>Add New</Text>
        </TouchableOpacity>
      ) : (
        // Render the FlatList if there are appointments
        <FlatList
          horizontal
          data={appointments}
          renderItem={renderAppointmentItem}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          style={styles.appointmentsList}
          contentContainerStyle={{
            paddingBottom: 5,
            paddingRight: 20,
            paddingLeft: 20,
            paddingTop: 10,
          }}
        />
      )}
    </View>


        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, {
              color: Colors.authTitleColor
            }]}>{"Your To Do List"}</Text>
          </View>

          {filterUpcomingItems(appointments).length === 0 ? (
    // Display the "Add New" button if there are no ToDo items
    <TouchableOpacity style={styles.addNewButton} onPress={navigateToAddAppointment}>
      <Text style={styles.addNewButtonText}>Add New</Text>
    </TouchableOpacity>
  ) : (
    <View style={{ marginTop: 15 }}>
      {filterUpcomingItems(appointments)
        .map((item, index, arr) => (
          <ToDoListItem
            key={item.id.toString()}
            title={item.Title} 
            address={item.Add_Address} 
            isFirst={index === 0}
            isLast={index === arr.length - 1}
          />
      ))}
    </View>
  )}


        </View>

        <View style={styles.segmentControlContainer}>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              activeSegment === 'news' && styles.segmentButtonActive,
            ]}
            onPress={() => setActiveSegment('news')}>
            <Text style={getSegmentTextStyle('news')}>Latest News</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              activeSegment === 'traffic' && styles.segmentButtonActive,
            ]}
            onPress={() => setActiveSegment('traffic')}>
            <Text style={getSegmentTextStyle('traffic')}>Traffic Updates</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailyBrief;