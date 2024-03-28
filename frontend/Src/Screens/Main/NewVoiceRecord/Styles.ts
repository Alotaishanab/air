import { StyleSheet, Dimensions } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;


const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  areaContainer: {
    flex: 1
    // flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    marginTop: hp(2),
    marginBottom: hp("12%")
  },
  headerContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: "center",
  },
  headerWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
    marginTop: hp(2),
  },
  headText: {
    fontSize: hp(3.6),
    fontFamily: "Lexend-Bold",
  },
  dataContainer: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    marginTop: hp(3)
  },
  toddText: {
    fontSize: 26,
    fontFamily: "Lexend-SemiBold",
    textAlign: "center"
  },
  recordContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: "center"
  },
  recordBackground: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    height: hp(41.2)
  },
  innerRecordView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  playIcon: {
    width: hp(7.6),
    height: hp(7.6),
    borderRadius: hp(7.6),
    marginBottom: hp(-2)
  },
  timerText: {
    marginBottom: hp(1.5),
    fontSize: hp(3.6),
    color: 'white'
  },
  timerTextBold: {
    fontFamily: "Lexend-Bold",
  },
  timerTextSemi: {
    fontFamily: "Lexend-Medium",
  },
  timerTextLight: {
    fontFamily: "Lexend-Light",
  },
  titleTimer: {
    fontSize: hp(1.8),
    color: 'white',
    fontFamily: "Lexend-Regular",
    marginBottom: hp(1)
  },
  waveIcon: {
    width: '85%',
    alignSelf: "center",
    height: hp(21)
  },
  desTimer: {
    fontSize: hp(1.8),
    color: 'white',
    fontFamily: "Lexend-Regular",
    marginBottom: hp(1)
  },
  nextButton: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(6.5),
    marginTop: hp(3),
    marginBottom: hp(2)
  },
  nextText: {
    fontSize: hp(2.4),
    fontFamily: 'Lexend-Medium',
    textAlign: "center"
  },
});
export default styles;