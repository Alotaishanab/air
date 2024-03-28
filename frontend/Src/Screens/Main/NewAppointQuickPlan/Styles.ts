import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const getStyles = (Colors) => StyleSheet.create({
  modalView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  
  
  },
  modalContent: {
    backgroundColor: Colors.listColor,
    padding: 20,
    width: '100%', 
    height: height * 0.9, // 90% of screen height
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  crossIcon: {
    width: 24,
    height: 24,
    color: Colors.authTitleColor,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Lexend-Bold',
    fontWeight: 'bold',
    color: Colors.text, // Use dynamic text color
  },
  fieldContainer: {
    marginBottom: 15, // Adjust as needed for spacing between fields
  },
  fieldTitle: {
    fontSize: 18, // Match the size to your design
    fontFamily: "Lexend-SemiBold", // Match the font family to your design
    color: '#000', // Adjust the color as needed
    marginBottom: 5, // Space between title and input field
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.colorBorder,
    paddingVertical: 10,
    paddingHorizontal: 0, // Set horizontal padding to 0 or a smaller value
    height: 'auto',
    width: '100%', // Stretch input wrapper to full width
    marginBottom: 10, 
    backgroundColor: Colors.inputBackground,
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 20, // Add space below the profile picture
  },
  profilePic: {
    width: 120, // Set the size of the picture
    height: 120,
    borderRadius: 60, // Make it round
    marginBottom: 10, // Space between picture and button
  },
  profilePicButton: {
    // Style for the change picture button
  },
  profilePicButtonText: {
    color: Colors.primary,
    // Add other styles for the text inside the button
  },
  inputTitle: {
    marginBottom: 4,
    color: Colors.authTitleColor,
  },
  iconStyle: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16, // Match the size to your design
    fontFamily: "Lexend-Light", // Match the font family to your design
    color: Colors.inputColor,
  },
  mapContainer: {
    height: 200,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject, 
  },
  scrollViewStyle: {
    width: '100%',
  },
  
});


export default getStyles;
