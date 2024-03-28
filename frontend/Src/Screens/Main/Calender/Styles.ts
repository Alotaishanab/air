import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: screenWidth,
  },
  scrollContainer: {
    flexGrow: 1,
    width: screenWidth,
  },
  headerWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  calendar: {
    width: screenWidth,
    alignSelf: 'center',
  },
  headText: {
    fontSize: hp(3.6),
    fontFamily: 'Lexend-Bold',
    color: '#000',
  },
  dayText: {
    fontSize: hp(2.5), // Adjust the day number font size
    textAlign: 'center',
  },
  // Additional styles...
});

export default styles;
