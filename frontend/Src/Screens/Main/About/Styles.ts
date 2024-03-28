import { StyleSheet, Dimensions } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;


const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  crossIcon: {
    width: 24,
    height: 24,
  },
  tcSectionTitle: {
    color: '#254A56', // Use your theme color
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 4,
    fontSize: 18,
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
  listContainer: {
    width: widthScreen,
    alignSelf: "center",
    borderBottomWidth: 1,
  },
  listInner: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  seperateWrap: {
    marginLeft: hp(2.5)
  },
  listTitle: {
    fontSize: 18,
    fontFamily: "Lexend-SemiBold",
  },
  listDes: {
    fontSize: hp(1.6),
    fontFamily: "Lexend-Light",
    marginTop: 0.5,
    marginLeft: 0.3
  },

  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  activeTabInnerMain: {
    marginTop: hp(1),
    borderBottomWidth: 1.5,
    width: widthScreen / 2.2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  InactiveTabInnerMain: {
    marginTop: hp(1),
    borderBottomWidth: 1,
    width: widthScreen / 2.2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerInActiveTab: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    marginVertical: hp(1.5),
  },
  activeInnerTab: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 14,
    marginHorizontal: wp(4.5),
    marginVertical: hp(1.5),
  },
  descriptionInner: {
    width: widthScreen / 1.2,
    alignSelf: "center",

  },
  termsDescription: {
    fontSize: hp(1.6),
    fontFamily: "Lexend-Light",
    marginTop: hp(2),
  }
});
export default styles;