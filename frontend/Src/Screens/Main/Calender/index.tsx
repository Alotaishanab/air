import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import useThemeContext from '../../../Util/useThemeContext'; // Import your custom useThemeContext
import styles from './Styles';

const Calender = () => {
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();
  const { Colors, colorTheme } = useThemeContext(); // Use your custom useThemeContext

  const onDayPressHandler = (day) => {
    setSelected(day.dateString);
    navigation.navigate('CalendarDetail', { selectedDate: day.dateString });
  };

  return (
    <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: Colors.background }]}>
      <StatusBar barStyle={colorTheme === 'dark' ? "light-content" : "dark-content"} />
      <View style={styles.mainContainer}>
        {/* Calendar Title */}
        <Text style={[styles.headText, { color: Colors.authTitleColor, alignSelf: 'center', padding: 16 }]}>{`Calendar`}</Text>
        
        <CalendarList
          onDayPress={onDayPressHandler}
          pastScrollRange={0}
          futureScrollRange={20}
          scrollEnabled={true}
          showScrollIndicator={true}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: Colors.background,
              selectedTextColor: '#ffffff'
            }
          }}
          theme={{
            backgroundColor: Colors.background,
            calendarBackground: Colors.background,
            textSectionTitleColor: Colors.authTitleColor,
            selectedDayBackgroundColor: Colors.nameColor, 
            todayTextColor: Colors.nameColor,
            dayTextColor: Colors.authTitleColor,
            textDisabledColor: Colors.textDisabled,
            dotColor: Colors.nameColor,
            selectedDotColor: Colors.white,
            arrowColor: Colors.nameColor,
            disabledArrowColor: Colors.textDisabled,
            monthTextColor: Colors.authTitleColor,
            indicatorColor: Colors.nameColor,
            textDayFontFamily: 'Lexend-Bold',
            textMonthFontFamily: 'Lexend-Bold',
            textDayHeaderFontFamily: 'Lexend-SemiBold',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
            'stylesheet.calendar.header': {
              header: {
                backgroundColor: Colors.background,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                alignItems: 'center',
              },
              monthText: {
                color: Colors.authTitleColor,
                fontSize: 16,
              },
              // Ensure all other styles within calendar.header are also using the theme colors
            },
            // Ensure all other necessary theme properties are set
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Calender;

