import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import styles from './Styles';
import getStyles from './Styles';
import useThemeContext from '../../../Util/useThemeContext';
import axiosInstance from '../../../../api/axiosInstance';

type EventItem = {
  time: string;
  Address: string;
};

type AppointmentData = {
  id: number;
  Add_Address: string;
  Date: string;
  Time: string;
};

type CalendarDetailProps = {
  route: {
    params: {
      selectedDate: string;
    };
  };
};

const CalendarDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { Colors } = useThemeContext();
  const styles = getStyles(Colors);

  const selectedDate = route.params?.selectedDate || moment().format('YYYY-MM-DD');
  const formattedDate = moment(selectedDate).format('MMM D');
  const formattedYear = moment(selectedDate).format('YYYY');

  const [appointments, setAppointments] = useState<AppointmentData[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axiosInstance.get('AddAppointment/');
        const data = response.data;
        console.log(data);
        const filteredAppointments = data.filter((appointment: AppointmentData) => {
          return moment(appointment.Date).isSame(selectedDate, 'day');
        });
        setAppointments(filteredAppointments);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchAppointments();
  }, [selectedDate]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: Colors.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={[styles.backButtonText, { color: Colors.authTitleColor }]}>←</Text>
          </TouchableOpacity>
          <View>
            <Text style={[styles.headerDate, { color: Colors.authTitleColor }]}>{formattedDate}</Text>
            <Text style={[styles.headerYear, { color: Colors.authTitleColor }]}>{formattedYear}</Text>
          </View>
        </View>
        <View style={styles.eventsContainer}>
          {appointments.map((appointment, index) => {
            const formattedTime = moment(appointment.Time, 'HH:mm:ss').format('hh:mm A');
            return (
              <View key={index} style={styles.eventItem}>
                {/* Render the line connecting the appointments */}
                <View style={[styles.line, (index === appointments.length - 1) && styles.lastLine]} />
                <View style={styles.timeIndicator} />
                <View style={styles.eventDetails}>
                  <Text style={[styles.eventTime, { color: Colors.authTitleColor }]}>{formattedTime}</Text>
                  <Text style={[styles.eventDescription, { color: Colors.authTitleColor }]}>{appointment.Add_Address}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarDetail;
