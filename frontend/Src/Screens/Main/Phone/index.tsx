import {
  Dimensions,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../../api/axiosInstance';
import getStyles from './Styles';
import Images from '../../../Styles/Images';
import useThemeContext from '../../../Util/useThemeContext';
import { useNavigation } from '@react-navigation/native';
import AddAppointments from '../AddAppointments';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';


const { width } = Dimensions.get('window');

const ManageAppointments: React.FC = () => {
  const { Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme } = useThemeContext();
  const navigation = useNavigation();
  const styles = getStyles(Colors);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      fetchAppointments();
    }, 5000); // Set interval to call fetchAppointments every 5 seconds
  
    fetchAppointments(); // Also call fetchAppointments when the component mounts
  
    return () => clearInterval(fetchInterval); // Clear interval when component unmounts
  }, []); // Empty dependency array ensures this runs only on mount and unmount
  

  const handleDeleteAppointment = async (id: string) => {
    try {
      // Retrieve user token from AsyncStorage
      const userToken = await AsyncStorage.getItem('userToken');
      if (!userToken) {
        throw new Error('User token not found');
      }
  
      // Include user token in the request headers
      await axiosInstance.delete(`delete_appointment/${id}/`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
  
      // Fetch updated list of appointments without the deleted one
      await fetchAppointments();
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };
  
  const handleAddAppointment = async () => {
    // Assuming the AddAppointments component or another method handles adding appointments
    try {
      // Retrieve user token from AsyncStorage
      const userToken = await AsyncStorage.getItem('userToken');
      if (!userToken) {
        throw new Error('User token not found');
      }
  
      // Include user token in the request headers
      await fetchAppointments(); // Fetch updated list of appointments after adding
      handleCloseModal(); // Close modal or perform other necessary actions
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };
  
  const fetchAppointments = async () => {
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
  
      const currentDateTime = new Date();
      
      // Transform your appointments into objects with actual Date instances
      const appointmentsWithDates = response.data.map((appointment) => ({
        ...appointment,
        dateTime: new Date(`${appointment.Date}T${appointment.Time}`),
      }));
  
      // Filter out past appointments and then sort
      const sortedAndFilteredAppointments = appointmentsWithDates
        .filter(appointment => appointment.dateTime >= currentDateTime) // Filter out past appointments
        .sort((a, b) => a.dateTime - b.dateTime); // Sort based on the dateTime property
  
      setAppointments(sortedAndFilteredAppointments);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setLoading(false);
    }
  };
  
  
  

  const handleCloseModal = () => {
    setSelectedAddress(null);
    setIsModalVisible(false);
  };

  type ToDoListItemProps = {
    title: string;
    time: string;
    address: string;
    date: string;
    id: string;
    isFirst: boolean;
    isLast: boolean;
    onPress: () => void;
  };

  

  const ToDoListItem: React.FC<ToDoListItemProps> = ({ title, time, address, id, isFirst, date, isLast, onPress }) => {
    // Create a Date object from the date and time
    const dateTime = new Date(`${date}T${time}`);
    
    // Format the time with AM/PM
    const formattedTime = dateTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).toLowerCase(); // Outputs, for example, "12:30 pm"

    // Format the date into a more readable format
    const formattedDate = dateTime.toLocaleDateString('en-US', {
      month: 'short', // "Jun"
      day: 'numeric', // "01"
      year: 'numeric', // "2024"
    });

    const displayDate = `${formattedTime} at ${formattedDate}`;
    
    const borderStyles = {
      borderWidth: isFirst || isLast ? 0 : StyleSheet.hairlineWidth,
      borderTopWidth: isFirst ? 0 : 1,
      borderBottomWidth: isLast ? 0 : 1,
    };

    return (
      <View style={[styles.todoItem, borderStyles]}>
        <View style={styles.todoContent}>
          {/* Title and address on the first line */}
          <Text style={styles.todoTitle}>{`${title} at ${address}`}</Text>
          {/* Formatted time and date on the second line */}
          <Text style={styles.todoTime}>{displayDate}</Text>
        </View>
        {/* Only the delete button is clickable */}
        <TouchableOpacity
          style={styles.markCompleteButton}
          onPress={() => handleDeleteAppointment(id)}
        >
          <Text style={styles.markCompleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };


  const handleSelectAppointment = (address: string) => {
    setSelectedAddress(address);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: Colors.background }]}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={[styles.headerTitle, { color: Colors.authTitleColor }]}>{"Manage Appointments"}</Text>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
  <LinearGradient
    // Use colors from your theme here; adjust names as per your theme structure
    colors={[Colors.appColor, Colors.nameColor]}
    style={styles.createnewCloneButton}>
    <Text style={[styles.createnewCloneButtonText, { color: Colors.white }]}>
      Add new Appointments
    </Text>
  </LinearGradient>
</TouchableOpacity>


        <AddAppointments isVisible={isModalVisible} onClose={handleCloseModal} onAdd={handleAddAppointment} />

        {loading ? (
          <ActivityIndicator size="large" color={Colors.authTitleColor} style={{ marginTop: 32 }} />
        ) : (
          <ScrollView style={{ flex: 1, marginTop: 32 }}>
            {appointments.map((item: any, index: number) => (
              <ToDoListItem
                key={item.id}
                title={item.Title}
                time={item.Time}
                date={item.Date}
                address={item.Add_Address}
                id={item.id}
                isFirst={index === 0}
                isLast={index === appointments.length - 1}
                onPress={() => handleSelectAppointment(item.Add_Address)}
              />
            ))}
          </ScrollView>
        )}

        {selectedAddress && (
          <Modal visible={true} animationType="slide">
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {appointments.map((item: any) => {
                if (item.Add_Address === selectedAddress) {
                  return (
                    <View key={item.id}>
                      <Text>{'ID: ' + item.id}</Text>
                      <Text>{'Title: ' + item.Add_Address}</Text>
                      <Text>{'Date: ' + item.Date}</Text>
                      <Text>{'Time: ' + item.Time}</Text>
                      <Text> {'\n'} {'\n'}</Text>
                      <TouchableOpacity onPress={handleCloseModal}>
                        <Text>Close</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleDeleteAppointment(item.id)}>
                        <Text>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }
              })}
            </View>
          </Modal>
        )}
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManageAppointments;

