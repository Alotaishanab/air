import { StyleSheet, Dimensions } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const getStyles = (Colors) => StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  areaContainer: {
    flex: 1
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  crossIcon: {
    marginLeft: 320,
    position:'absolute',
    width: 24,
    height: 24,
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
  crossIcon: {
    marginLeft: 320,
    position:'absolute',
    width: 24,
    height: 24,
  },

  headerTitle: {
    fontSize: 34,
    fontFamily: 'Lexend-Bold',
    color: Colors.text, // Use dynamic text color
  },

  toddText: {
    fontSize: 40,
    fontFamily: "Lexend-Regular",
  },
  nextButton: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(6.5),
    marginTop: hp(5),
    marginBottom: hp(4)
  },
  nextText: {
    fontSize: hp(2.4),
    fontFamily: 'Lexend-Medium',
    textAlign: "center"
  },

  listContainer: {
    width: widthScreen,
    alignSelf: "center",
    borderBottomWidth: 1,
  },
  listInner: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    marginTop: hp(2),
    marginBottom: hp(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listLeftWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  seperateWrap: {
    marginLeft: hp(1.5)
  },
  listTitle: {
    fontSize: hp(1.8),
    fontFamily: "Lexend-SemiBold",
  },
  listDes: {
    fontSize: hp(1.4),
    fontFamily: "Lexend-Regular",
  },
  editWraapper: {
    width: hp(7.7),
    height: 32,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  editTitle: {
    fontSize: hp(1.2),
    fontFamily: "Lexend-Medium",
    textAlign: "center"
  },

});
export default getStyles;