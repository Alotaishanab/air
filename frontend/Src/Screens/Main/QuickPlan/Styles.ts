import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';
import { RFValue } from 'react-native-responsive-fontsize';

const getStyles = (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.background,
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
      scrollViewContent: {
        paddingBottom:100,
      },
      dateText: {
        fontSize: RFValue(15),
        fontFamily:"Lexend-Bold",
        marginBottom: 5,
        color:Colors.background,
        marginHorizontal:20,
        marginTop:10,
      },
      description: {
        fontSize: RFValue(11),
        fontFamily:"Lexend-Regular",
        marginBottom: 0,
        color:Colors.background,
        marginHorizontal:20,
      },
      timeSlotContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:"red",
        marginBottom:2,
        paddingBottom:18
      },
      timeContainer: {
        alignItems: 'center',
        width: '25%',
        top:40,
      },
      timeText: {
        fontSize: 12,
        marginRight: 4,
        fontFamily:"Lexend-Bold",
        color:Colors.listBorder,
      },
      toText: {
        fontSize: 16,
        marginHorizontal: 4,
      },
      verticalLine: {
        height: 62,
        width: 2,
        backgroundColor: '#608C96',
        marginHorizontal: 4,
        marginVertical:10,
      },
      buttonGroup: {
        flexDirection: 'row',
        alignItems:"center",
        width: '70%',
        height:76,
        borderWidth:1,
        borderRadius:15,
        backgroundColor:Colors.calenderBackground,
        justifyContent:"center",
        borderColor:"#A79B82"
        
        
      },
     
      button: {
        backgroundColor:Colors.white,
         width:128,
         height:32,
        borderRadius: 60,
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
      },
      buttonActive: {
        backgroundColor:Colors.playColor,
        width:85,
        height:32,
        borderRadius: 60,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
      },
      buttonText: {
        fontSize: 12,
        color: Colors.appColor,
        fontFamily:"Lexend-Medium",
      },
      buttonTextActive: {
        fontSize: 12,
        color: Colors.white,
        fontFamily:"Lexend-Medium"
      },
      createnewCloneButton: {
        width: 200,
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
      buttonGroup2: {
        flexDirection: 'row',
        alignItems:"center",
        width: '70%',
        height:35,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:Colors.calenderBackground,
        // justifyContent:"center",b
        justifyContent:"space-evenly",
        borderColor:"#A79B82",
        position:"absolute",
        right:20,
        bottom:10
      },
      buttonGroup3: {
        flexDirection: 'row',
        alignItems:"center",
        width: '70%',
        height:25,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:Colors.calenderBackground,
        // justifyContent:"center",b
        justifyContent:"space-evenly",
        borderColor:"#A79B82",
        position:"absolute",
        right:20,
        bottom:30
      },
      buttontitle:{
        // fontWeight: 'bold',
        fontSize: 13,
        color: Colors.authTitleColor,
        fontFamily: 'Lexend-Medium',
        
      },
      markCompleteButton: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        minHeight: 17,
        justifyContent: 'center',
        alignItems: 'center',
        // minWidth: 57,
        width:57,
       
        elevation: 5,
      },
      markCompleteButtonText: {
        fontSize: RFValue(10),
        color: Colors.appColor,
        fontFamily: 'Lexend-Medium',
      },
    
});
export default getStyles;