import { StyleSheet } from 'react-native';
import Colors from '../../../Styles/Colors';

const getStyles = (Colors) => StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: Colors.background,
      },
      container: {
        flex: 1,
      },
      header: {
        flexDirection: 'row',
        padding: 20,
      },
      backButton: {
    
      },
      backButtonText: {
        fontSize: 28,
        color: Colors.pinColor, 
        marginRight: 13, 
      },
      headerDate: {
        fontSize: 34, 
        fontFamily:"Lexend-Bold",
        color: Colors.appColor,
      },
      headerYear: {
        fontSize: 19, 
        fontFamily:"Lexend-Medium",
        color: Colors.appColor,
      },
      eventsContainer: {
       
      },
     
      eventDetails: {
        flex: 1,
      },
      eventTime: {
        fontSize: 15, 
        fontFamily:"Lexend-Bold",
        color: Colors.appColor,
        marginBottom:6,
      },
      eventDescription: {
        fontSize: 13, 
        fontFamily:"Lexend-Regualr",
        color: Colors.dayColor,
        textAlign:"justify",
        width:('90%'),
      },
      eventItem: {
        position: 'relative', 
        paddingLeft: 55, 
        marginBottom: 27, 
      },
      line: {
        position: 'absolute',
        left: 29,
        width: 2, 
        backgroundColor: Colors.listBorder, 
        top: 10, 
        bottom: -10, 
      },
      lastLine: {
        bottom: '50%', 
      },
      timeIndicator: {
        width: 19.5,
        height: 19.5,
        borderRadius: 20,
        backgroundColor: Colors.appColor,
        borderWidth: 2,
        borderColor: Colors.listBorder,
        position: 'absolute',
        left: 20,
        zIndex: 1,
      },
      dashedLine: {
        position: 'absolute',
        top: 0,
        left: 28,
        flexDirection: 'column',
      },
      dash: {
        width: 2,
        height: 8, 
        backgroundColor: Colors.listBorder,
      },
      dashSpace: {
        height: 8,
        backgroundColor: 'transparent',
      },
});
export default getStyles;