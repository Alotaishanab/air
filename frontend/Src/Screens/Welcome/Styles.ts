import { StyleSheet, Dimensions } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundContainer: {
    width: widthScreen,
    height: heightScreen
  },
  safeAreaContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerEmpty: {
    flex: 0.1
  },
  headerContainer: {
    flex: 0.4,
    justifyContent: 'flex-start',
    alignItems: "center"
  },
  bottomContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomInner: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    marginBottom: hp(4),
  },
  welcomeText: {
    fontSize: 32,
    fontFamily: "Lexend-Medium",
  },
  appNameText: {
    fontSize: 50,
    fontFamily: "Lexend-Bold",
  },
  descriptionText: {
    fontSize: hp(1.8),
    fontFamily: "Lexend-Regular",
    lineHeight: 20
  },
  nextWrapper: {
    marginBottom: hp(4),
    alignSelf: "center"
  },
  nextIcon: {
    width: 78,
    height: 78
  }

});
export default styles;