import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const {width: widthScreen} = Dimensions.get('window');

const getStyles = (Colors) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background, // Use dynamic background color
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  deleteAccountButton: {
    marginTop: 10,
    backgroundColor: '#ff3b30', // Red color for a destructive action
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteAccountButtonText: {
    color: '#ffffff', // White text color
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 34,
    fontFamily: 'Lexend-Bold',
    color: Colors.text, // Use dynamic text color
  },
  crossIcon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
  },
  description: {
    fontSize: 15,
    color: Colors.text, // Use dynamic text color
    fontFamily: 'Lexend-Light',
    marginBottom: 28.5,
    marginHorizontal: 20,
  },
  description2: {
    fontSize: 13,
    color: Colors.text, // Use dynamic text color
    fontFamily: 'Lexend-Light',
    marginTop: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 19,
    fontFamily: 'Lexend-SemiBold',
    marginBottom: 13,
    color: Colors.text, // Use dynamic text color
    marginHorizontal: 20,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border, // Use dynamic border color
    backgroundColor: Colors.listColor, // Use dynamic list background color
  },
  switchRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 17,
    fontFamily: 'Lexend-Regular',
    color: Colors.text, // Use dynamic text color
  },
  loremIpsumContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loremIpsumText: {
    fontSize: 15,
    fontFamily: 'Lexend-Regular',
    color: Colors.text, // Use dynamic text color
    marginRight: 5,
  },
  arrowRight: {
    width: 24,
    height: 24,
  },
  switchRowFooterMainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border, // Use dynamic border color
    backgroundColor: Colors.listColor, // Use dynamic list background color
  }
});

export default getStyles;
