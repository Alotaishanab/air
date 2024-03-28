import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
const {width: widthScreen} = Dimensions.get('window');

const getStyles = (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
      },
      headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
      },
      headerTitle: {
        fontSize: 34,
        fontFamily: 'Lexend-Bold',
        color: Colors.appColor,
      },
      crossIcon: {
        width: 24,
        height: 24,
      },
      sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
      },
      weatherContainer: {
        backgroundColor: Colors.appColor,
        height: 90,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 20,
        width:"93%",
        padding:20
      },
      weatherBanner: {
        width: widthScreen - 20,
        height: 160,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 20,
        overflow: 'hidden',
        resizeMode: 'contain',
      },
      sectionContainer: {
        marginTop: 20,
      },
      sectionTitle: {
        fontSize: RFValue(14),
        fontFamily: 'Lexend-SemiBold',
        color: Colors.desColor,
      },
      wetherTitle: {
        fontSize: RFValue(14),
        fontFamily: 'Lexend-SemiBold',
        color: Colors.desColor,

      },
      wetherImage: {
        width: 50, height: 50 ,tintColor:"yellow",position:"absolute",right:20
      },
      viewAllButton: {
        width: 60,
        height: 25,
        backgroundColor: Colors.appColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
      },
      viewAllText: {
        fontSize: 10,
        color: Colors.white,
        fontFamily: 'Lexend-Bold',
      },
      appointmentsList: {},
      appointmentItem: {
        backgroundColor: Colors.calenderBackground,
        borderRadius: 15,
        padding: 16,
        marginRight: 15,
        width: widthScreen * 0.6,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 8.84,
    
        elevation: 5,
      },
      todoItem: {
        backgroundColor: Colors.listColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: widthScreen,
        padding: 16,
        alignSelf: 'center',
        borderColor: Colors.listBorder,
        borderWidth: 1,
      },
      todoText: {
        fontSize: RFValue(15),
        color: Colors.authTitleColor,
        fontFamily: 'Lexend-SemiBold',
      },
      markCompleteButton: {
        padding: 8,
        backgroundColor: Colors.white,
        borderRadius: 60,
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
      newsItemContent: {
        flex: 1,
        justifyContent: 'center',
      },
      newsItemTitle: {
        fontSize: RFValue(14),
        fontFamily: 'Lexend-SemiBold',
        color: Colors.appColor,
      },
      newsItemDate: {
        fontSize: RFValue(11),
        fontFamily: 'Lexend-Regular',
        color: Colors.appColor,
      },
      weatherTemprature: {
        fontSize: RFValue(11),
        fontFamily: 'Lexend-Regular',
        color: Colors.appColor,
        position:"absolute",
        bottom:20,
        left:20
      },
      weathercondition: {
        fontSize: RFValue(11),
        fontFamily: 'Lexend-Regular',
        color: Colors.appColor,
        position:"absolute",
        bottom:30,
        right:20
      },
      newsItemExcerpt: {
        fontSize: RFValue(11),
        fontFamily: 'Lexend-Light',
        color: Colors.pinColor,
        marginTop: 4,
      },
      segmentControlContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.background,
        borderRadius: 7,
        margin: 20,
        borderWidth: 1,
        borderColor: Colors.desColor,
        height: 43,
      },
      segmentButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 4,
      },
      segmentButtonActive: {
        backgroundColor: Colors.desColor,
      },
      segmentButtonText: {
        fontSize: 14,
      },
      segmentButtonTextActive: {
        color: Colors.white,
        fontFamily: 'Lexend-Bold', 
      },
      segmentButtonTextInactive: {
        color: Colors.pinColor, 
        fontFamily: 'Lexend-Regular', 
      },
      appointmentName: {
        fontSize: 14,
        fontFamily: 'Lexend-SemiBold',
        color: Colors.appColor,
        marginBottom: 10,
      },
      appointmentDetailsContainer: {
        flexDirection: 'row',
        marginTop: 4,
      },
      appointmentDetails: {
        marginLeft: 6.25,
        fontSize: 11,
        color: Colors.authTitleColor,
        fontFamily: 'Lexend-Regular',
      },
      appointmentIcon: {
        width: 16,
        height: 16,
      },
      todoLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      todoIcon: {
        tintColor: Colors.authTitleColor,
        width: 32,
        height: 32,
        marginRight: 16,
      },
      todoTextContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10, 
      },
      todoRightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
      },
      arrowIcon: {
        width: 24,
        height: 24,
        marginRight: 0, 
      },
      addNewButton: {
        borderWidth: 2,
        borderColor: Colors.white,
        borderStyle: 'dashed',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      addNewButtonText: {
        color: Colors.white,
        fontSize: 18,
      },
});
export default getStyles;