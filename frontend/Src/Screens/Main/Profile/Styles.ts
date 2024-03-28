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
  crossIcon: {
    width: 24,
    height: 24,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    marginTop: hp(2),
    marginBottom: hp("12%"),
  },
  headerContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  empty: {
    width: wp(7),
  },
  userIcon: {
    width: hp(11.6),
    height: hp(11.6),
    borderRadius: hp(11.6)
  },
  toddText: {
    fontSize: 32,
    fontFamily: "Lexend-Bold",
    marginTop: hp(2),
    textAlign: "center"
  },
  editWraapper: {
    width: hp(13.9),
    height: 42,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(2),
    alignSelf: "center"
  },
  editTitle: {
    fontSize: hp(1.4),
    fontFamily: "Lexend-Medium",
    textAlign: "center"
  },
  dataContainer: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    marginBottom: hp(3)
  },
  listContainer: {
    width: widthScreen,
    alignSelf: "center",
    borderBottomWidth: 1,
  },
  listInner: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    marginTop: hp(2),
    marginBottom: hp(2),
    flexDirection: "row",
    alignItems: "center"
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  seperateWrap: {
    marginLeft: hp(2.5),
    marginTop: hp(0.3),
  },
  listTitle: {
    fontSize: 18,
    fontFamily: "Lexend-SemiBold",
  },
  listDes: {
    fontSize: 16,
    fontFamily: "Lexend-Light",
  },
  tabsDataContainer: {
    marginTop: hp(3),
    justifyContent: "center",
    alignItems: "center"
  },
  tabsContainer: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabsSecondContainer: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(2.5)
  },
  tabWraapper: {
    width: hp(19.5),
    height: hp(19.5),
    borderRadius: 20,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  tabsImage: {
    width: hp(5.4),
    height: hp(5.4),
    marginBottom: hp(2.5),
  },
  tabTitle: {
    fontSize: hp(1.8),
    fontFamily: "Lexend-SemiBold",
    textAlign: "center",
    marginBottom: hp(2.5),
  },
});
export default styles;