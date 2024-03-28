import {
  Dimensions,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import getStyles from './Styles';
import Images from '../../../Styles/Images';
import { useNavigation } from '@react-navigation/native';
import useThemeContext from '../../../Util/useThemeContext';

const {width} = Dimensions.get('window');
const ManageReservationScreen: React.FC = () => {
  const navigation = useNavigation();
  const { Colors } = useThemeContext();
  const styles = getStyles(Colors);

  type ToDoItem = {
    id: string;
    title: string;
    time: string;
  };
  const todoItems: ToDoItem[] = [
    {id: '1', title: '16-10-2023', time: '11:24'},
    {id: '2', title: '16-10-2023', time: '02:17'},
    {id: '3', title: '14-10-2023', time: '12:19'},
    {id: '4', title: '12-10-2023', time: '09:16'},
    {id: '5', title: '10-10-2023', time: '06:34'},
    {id: '6', title: '10-10-2023', time: '06:34'},
    {id: '7', title: '10-10-2023', time: '06:34'},
  ];
  type ToDoListItemProps = {
    title: string;
    time: string;
    style?: object;
  };

  const ToDoListItem: React.FC<ToDoListItemProps> = ({ title, time, style }) => (
    <View style={[styles.todoItem, style]}>
      <View style={styles.todoLeftContainer}>
        <Text style={styles.todoText}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
      <Text style={[styles.headerTitle, {
                      color: Colors.authTitleColor
                    }]}>{"Manage Reservations"}</Text>

      <TouchableOpacity onPress={() => { navigation.goBack() }} style={{position: 'absolute', right: 30, top: 120}}>
        <Image style={{width: 24, height: 24}} source={Images.cross} />
      </TouchableOpacity>

        <View style={{ marginTop: 32 }}>
          {todoItems.map((item, index) => (
            <ToDoListItem
              key={item.id}
              title={item.title}
              time={item.time}
              style={{
                // Remove the top border for the first item
                borderTopWidth: index === 0 ? 0 : undefined,
                // Remove the bottom border for the last item
                borderBottomWidth: index === todoItems.length - 1 ? 0 : undefined,
              }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManageReservationScreen;
