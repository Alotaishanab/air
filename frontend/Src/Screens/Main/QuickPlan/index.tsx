import React, {useState, useEffect} from 'react';
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
import Images from '../../../Styles/Images';
import getStyles from './Styles';
import {useNavigation} from '@react-navigation/native';
import useThemeContext from '../../../Util/useThemeContext';
import NewEvent from '../NewEvent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../../../api/axiosInstance';

type TimeSlot = {
  id: string;
  startTime: string;
  endTime: string;
};

const QuickPlanScreen: React.FC = () => {
  const {Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme} =
    useThemeContext();
  const navigation = useNavigation();
  const styles = getStyles(Colors);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    null,
  ); // State to keep track of selected button index
  const [quickPlanData, setQuickPlanData] = useState([]);

  const fetchDataFromAPI = async () => {
    try {
      // Retrieve user token from AsyncStorage
      const userToken = await AsyncStorage.getItem('userToken');
      if (!userToken) {
        throw new Error('User token not found');
      }

      // Include user token in the request headers
      const response = await axiosInstance.get('QuickPlan/', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      // Log the fetched data to the console
      // console.log('QuickPlan events data:', response.data);

      // Update state with the fetched data
      setQuickPlanData(response.data);
    } catch (error) {
      console.error('Error fetching QuickPlan events:', error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, [quickPlanData]);


  
  const handleAddAppointment = async () => {
    // Assuming the AddAppointments component or another method handles adding appointments
    try {
      await fetchAppointments(); // Fetch updated list of appointments after adding
      handleCloseModal(); // Close modal or perform other necessary actions
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await axiosInstance.get('AddAppointment/');
      const currentDateTime = new Date();

      // Transform your appointments into objects with actual Date instances
      const appointmentsWithDates = response.data.map(appointment => ({
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

  const timeSlots: TimeSlot[] = [
    {id: '1', startTime: '10:00 AM', endTime: '11:00 AM'},
    {id: '2', startTime: '01:00 PM', endTime: '02:00 PM'},
    {id: '3', startTime: '04:00 PM', endTime: '05:30 PM'},
    // {id: '4', startTime: '06:00 PM', endTime: '07:00 PM'},
    // {id: '5', startTime: '07:00 PM', endTime: '08:00 PM'},
    // {id: '6', startTime: '09:00 PM', endTime: '10:00 PM'},
  ];



  const getMonthName = (month) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month - 1];
  };

  const currentDate = new Date();

  // Format date as "Today [Day] [Month] [Year]"
  const formattedDate = `Today ${currentDate.getDate()} ${getMonthName(currentDate.getMonth() + 1)} ${currentDate.getFullYear()}`;

  
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: Colors.background}]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <Text
            style={[
              styles.headerTitle,
              {
                color: Colors.authTitleColor,
              },
            ]}>
            {'Quick Plan'}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={Images.cross} style={{width: 24, height: 24}} />
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.dateText,
            {
              color: Colors.authTitleColor,
            },
          ]}>
           {formattedDate}
        </Text>
        <Text
          style={[
            styles.description,
            {
              color: Colors.authTitleColor,
            },
          ]}>
          {'Best available slots for events and appointments'}
        </Text>

       
          <View>
            <View  style={styles.timeSlotContainer}>
              <View style={styles.timeContainer}>
                <Text
                  style={[
                    styles.timeText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                10:00 AM
                </Text>
                <Text
                  style={[
                    styles.toText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                  to
                </Text>
                <Text
                  style={[
                    styles.timeText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                 11:00 AM
                </Text>
                <View style={styles.verticalLine} />
              </View>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  onPress={() => {
                    
                    navigation.navigate('NewAppointQuickPlan', {
                      startTime: "10:00",
                      endTime:  "11:00",
                    });
                  }}
                  style={styles.button}>
                  <Text style={styles.buttonText}>New Appointment</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonActive}
                  onPress={() => setIsModalVisible(true)}>
                  <Text style={styles.buttonTextActive}>New Event</Text>
                </TouchableOpacity>
                <NewEvent
                  isVisible={isModalVisible}
                  onClose={handleCloseModal}
                  onAdd={handleAddAppointment}
                />
              </View>
            </View>
            
            <View style={styles.buttonGroup2}>
  {quickPlanData.filter(item => item.start_time === '10:00:00').slice(-1).map((item, index) => (
    <View key={index}>
      <Text style={styles.buttontitle}>{`${item.Title} at ${item.Add_Address} `}</Text>
    </View>
  ))}
</View>


            
          </View>



          <View style={{marginTop:-15}}>
            <View  style={styles.timeSlotContainer}>
              <View style={styles.timeContainer}>
                <Text
                  style={[
                    styles.timeText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                01:00 AM
                </Text>
                <Text
                  style={[
                    styles.toText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                  to
                </Text>
                <Text
                  style={[
                    styles.timeText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                 02:00 AM
                </Text>
                <View style={styles.verticalLine} />
              </View>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  onPress={() => {
                    
                    navigation.navigate('NewAppointQuickPlan', {
                      startTime: "01:00",
                      endTime:  "02:00",
                    });
                  }}
                  style={styles.button}>
                  <Text style={styles.buttonText}>New Appointment</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonActive}
                  onPress={() => setIsModalVisible(true)}>
                  <Text style={styles.buttonTextActive}>New Event</Text>
                </TouchableOpacity>
                <NewEvent
                  isVisible={isModalVisible}
                  onClose={handleCloseModal}
                  onAdd={handleAddAppointment}
                />
              </View>
            </View>
            
            <View style={styles.buttonGroup2}>
  {quickPlanData.filter(item => item.start_time === '01:00:00').slice(-1).map((item, index) => (
    <View key={index}>
      <Text style={styles.buttontitle}>{`${item.Title} at ${item.Add_Address} `}</Text>
    </View>
  ))}
</View>





            
          </View>


          <View style={{marginTop:-15}}>
            <View  style={styles.timeSlotContainer}>
              <View style={styles.timeContainer}>
                <Text
                  style={[
                    styles.timeText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                04:00 PM
                </Text>
                <Text
                  style={[
                    styles.toText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                  to
                </Text>
                <Text
                  style={[
                    styles.timeText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                 05:30 PM
                </Text>
                <View style={styles.verticalLine} />
              </View>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  onPress={() => {
                    
                    navigation.navigate('NewAppointQuickPlan', {
                      startTime: "04:00",
                      endTime:  "05:00",
                    });
                  }}
                  style={styles.button}>
                  <Text style={styles.buttonText}>New Appointment</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonActive}
                  onPress={() => setIsModalVisible(true)}>
                  <Text style={styles.buttonTextActive}>New Event</Text>
                </TouchableOpacity>
                <NewEvent
                  isVisible={isModalVisible}
                  onClose={handleCloseModal}
                  onAdd={handleAddAppointment}
                />
              </View>
            </View>


<View style={styles.buttonGroup2}>
  {quickPlanData.filter(item => item.start_time === '04:00:00').slice(-1).map((item, index) => (
    <View key={index}>
      <Text style={styles.buttontitle}>{`${item.Title} at ${item.Add_Address} `}</Text>
    </View>
  ))}
</View>







            
          </View>

          <View style={{marginTop:-15}}>
            <View  style={styles.timeSlotContainer}>
              <View style={styles.timeContainer}>
                <Text
                  style={[
                    styles.timeText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                06:00 PM
                </Text>
                <Text
                  style={[
                    styles.toText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                  to
                </Text>
                <Text
                  style={[
                    styles.timeText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                 07:00 PM
                </Text>
                <View style={styles.verticalLine} />
              </View>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  onPress={() => {
                    
                    navigation.navigate('NewAppointQuickPlan', {
                      startTime: "06:00",
                      endTime:  "07:00",
                    });
                  }}
                  style={styles.button}>
                  <Text style={styles.buttonText}>New Appointment</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonActive}
                  onPress={() => setIsModalVisible(true)}>
                  <Text style={styles.buttonTextActive}>New Event</Text>
                </TouchableOpacity>
                <NewEvent
                  isVisible={isModalVisible}
                  onClose={handleCloseModal}
                  onAdd={handleAddAppointment}
                />
              </View>
            </View>


<View style={styles.buttonGroup2}>
  {quickPlanData.filter(item => item.start_time === '06:00:00').slice(-1).map((item, index) => (
    <View key={index}>
      <Text style={styles.buttontitle}>{`${item.Title} at ${item.Add_Address} `}</Text>
    </View>
  ))}
</View>







            
          </View>


          <View style={{marginTop:-15}}>
            <View  style={styles.timeSlotContainer}>
              <View style={styles.timeContainer}>
                <Text
                  style={[
                    styles.timeText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                07:00 PM
                </Text>
                <Text
                  style={[
                    styles.toText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                  to
                </Text>
                <Text
                  style={[
                    styles.timeText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                 08:00 PM
                </Text>
                <View style={styles.verticalLine} />
              </View>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  onPress={() => {
                    
                    navigation.navigate('NewAppointQuickPlan', {
                      startTime: "07:00",
                      endTime:  "08:00",
                    });
                  }}
                  style={styles.button}>
                  <Text style={styles.buttonText}>New Appointment</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonActive}
                  onPress={() => setIsModalVisible(true)}>
                  <Text style={styles.buttonTextActive}>New Event</Text>
                </TouchableOpacity>
                <NewEvent
                  isVisible={isModalVisible}
                  onClose={handleCloseModal}
                  onAdd={handleAddAppointment}
                />
              </View>
            </View>


<View style={styles.buttonGroup2}>
  {quickPlanData.filter(item => item.start_time === '07:00:00').slice(-1).map((item, index) => (
    <View key={index}>
      <Text style={styles.buttontitle}>{`${item.Title} at ${item.Add_Address} `}</Text>
    </View>
  ))}
</View>







            
          </View>
    
          <View style={{marginTop:-15}}>
            <View  style={styles.timeSlotContainer}>
              <View style={styles.timeContainer}>
                <Text
                  style={[
                    styles.timeText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                09:00 PM
                </Text>
                <Text
                  style={[
                    styles.toText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                  to
                </Text>
                <Text
                  style={[
                    styles.timeText,
                    {
                      color: Colors.authTitleColor,
                    },
                  ]}>
                 10:00 PM
                </Text>
                <View style={styles.verticalLine} />
              </View>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  onPress={() => {
                    
                    navigation.navigate('NewAppointQuickPlan', {
                      startTime: "09:00",
                      endTime:  "10:00",
                    });
                  }}
                  style={styles.button}>
                  <Text style={styles.buttonText}>New Appointment</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonActive}
                  onPress={() => setIsModalVisible(true)}>
                  <Text style={styles.buttonTextActive}>New Event</Text>
                </TouchableOpacity>
                <NewEvent
                  isVisible={isModalVisible}
                  onClose={handleCloseModal}
                  onAdd={handleAddAppointment}
                />
              </View>
            </View>


<View style={styles.buttonGroup2}>
  {quickPlanData.filter(item => item.start_time === '09:00:00').slice(-1).map((item, index) => (
    <View key={index}>
      <Text style={styles.buttontitle}>{`${item.Title} at ${item.Add_Address} `}</Text>
    </View>
  ))}
</View>







            
          </View>




      </ScrollView>
    </SafeAreaView>
  );
};

export default QuickPlanScreen;
