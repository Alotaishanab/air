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
  tabsContainer: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(3),
    borderWidth: 1,
    borderRadius: 7,
    height: 43,

  },
  tabsInnerWrap: {
    width: "50%",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7
  },
  tabsRightWrap: {
    width: "50%",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7
  },
  tabTitle: {
    fontSize: 14,
    fontFamily: "Lexend-Bold",
    textAlign: "center",
  },
  dataContainer: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    marginTop: hp(3)
  },
  toddText: {
    fontSize: hp(1.8),
    fontFamily: "Lexend-Regular",
  },
  wrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    marginTop: hp(1.5),
  },
  textInput: {
    flex: 1,
    fontFamily: 'Lexend-Light',
    fontSize: 15,
    marginLeft: 15,
  },
  iconStyle: {
    width: hp(2.4),
    height: hp(2.4),
    marginRight: 15
  },
  messageWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: hp(14),
    borderRadius: 8,
    borderWidth: 1,
    marginTop: hp(1.5),
  },
  innerWrapper: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(1.5),
  },
  nextButton: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(6.5),
    marginTop: hp(3)
  },
  nextText: {
    fontSize: hp(2.4),
    fontFamily: 'Lexend-Medium',
    textAlign: "center"
  },
  orText: {
    fontSize: 20,
    fontFamily: 'Lexend-Bold',
    textAlign: 'center',
    marginTop: hp(3)
  },

  chatInner: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  editWraapper: {
    width: hp(6.2),
    height: 25,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  editTitle: {
    fontSize: hp(1),
    fontFamily: "Lexend-Bold",
    textAlign: "center"
  },
  empty: {
    width: wp(4),
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  seperateWrap: {
    marginLeft: hp(2.5)
  },
  listTitle: {
    fontSize: hp(1.8),
    fontFamily: "Lexend-SemiBold",
  },
  listDes: {
    fontSize: hp(1.6),
    fontFamily: "Lexend-Light",
    marginTop: 0.5,
    marginLeft: 0.3
  },
  expandContainer: {
    width: widthScreen / 1.12,
    alignSelf: "center",
  },
  termsDescription: {
    fontSize: hp(1.6),
    fontFamily: "Lexend-Light",
    marginTop: hp(2),
  }
});
export default styles;