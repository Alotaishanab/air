import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

const getStyles = (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
      },
      headerTitle: {
        fontSize: 34,
        fontFamily: 'Lexend-Bold',
        color: Colors.appColor,
        marginHorizontal: 20,
        marginTop: 53,
      },
      createnewCloneButton: {
        width: width - 40,
        alignSelf: 'center',
        height: 64,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32545C',
        marginTop: 36,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      createnewCloneButtonText: {
        fontSize: 23,
        fontFamily: 'Lexend-Medium',
        color: '#FCF7EE',
      },
      todoItem: {
        backgroundColor: Colors.listColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width,
        padding: 14,
        alignSelf: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.listBorder,
      },
      todoContent: {
        flex: 1,
      },
      todoTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      todoTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.authTitleColor,
      },
      
      todoText: {
        fontSize: RFValue(15),
        color: Colors.authTitleColor,
        fontFamily: 'Lexend-SemiBold',
      },
      todoTime: {
        fontSize: 14,
        color: Colors.authTitleColor, 
      },
      todoDate: {
        fontSize: 16, 
        color: Colors.authTitleColor, 
      },
      todoHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      markCompleteButton: {
        backgroundColor: Colors.white,
        borderRadius: 60,
        minHeight: 32,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 77,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      markCompleteButtonText: {
        fontSize: RFValue(10),
        color: Colors.appColor,
        fontFamily: 'Lexend-Medium',
      },
    
      newsItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.listBorder,
        backgroundColor: Colors.listColor,
        borderTopWidth: 1,
        borderRadius: 0,
        padding: 16,
        marginBottom: 20,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
      newsItemImage: {
        width: 66,
        height: 60,
        borderRadius: 0,
        marginRight: 13,
      },
      appointmentDetailsContainer: {
        flexDirection: 'row',
        marginTop: 4,
      },
      appointmentDetails: {
        marginLeft: 6.25,
        fontSize: 11,
        color: Colors.desColor,
        fontFamily: 'Lexend-Regular',
      },
      appointmentIcon: {
        width: 16,
        height: 16,
      },
      todoLeftContainer: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      todoIcon: {
        width: 32,
        height: 32,
        marginRight: 16,
      },
      appointmentName: {
        fontSize: 14,
        fontFamily: 'Lexend-SemiBold',
        color: Colors.appColor,
        marginBottom: 10,
      },
      time: {
        fontSize: 14,
        fontFamily: 'Lexend-Regular',
        color: Colors.authTitleColor,
      },
});
export default getStyles;

