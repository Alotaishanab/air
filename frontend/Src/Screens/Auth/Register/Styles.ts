import { StyleSheet, Dimensions } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;


const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  areaContainer: {
    // flex: 1
    flexGrow: 1,
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
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center"
  },
  headerWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
  },
  headText: {
    fontSize: hp(3.6),
    fontFamily: "Lexend-Bold",
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
  flexDirection: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.5)
  },
  primary: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    marginLeft: hp(1)
  },
  tcContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
  tcText: {
    marginLeft: hp(1),
    fontFamily: 'Lexend-Regular',
    fontSize: hp(2),
  },
  nextButton: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(6.5),
    marginTop: hp(6)
  },
  nextText: {
    fontSize: hp(2.4),
    fontFamily: 'Lexend-Medium',
  },
  forgotText: {
    fontSize: 15,
    fontFamily: 'Lexend-Medium',
    textAlign: 'right',
    marginTop: hp(1.5),
    width: widthScreen / 1.16,
    alignSelf: "center",
  },

  orText: {
    fontSize: 20,
    fontFamily: 'Lexend-Bold',
    textAlign: 'center',
    marginTop: hp(3),
  },
  loginText: {
    fontSize: hp(2.4),
    fontFamily: 'Lexend-Regular',
    textAlign: 'center',
    marginTop: hp(2),
  },

  socialContainer: {
    width: widthScreen / 1.5,
    alignSelf: "center",
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    marginTop: hp(2)
  },
  socialIcon: {
    width: 60,
    height: 60,
    borderRadius: 60
  },
  bottomInner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2)
  },
  dontHaveText: {
    fontSize: 16,
    fontFamily: 'Lexend-Regular',
    textAlign: "center",
  },
  registerAccount: {
    fontSize: 16,
    fontFamily: 'Lexend-Medium',
    textAlign: "center",
    marginLeft: hp(0.5)
  },
  iconStyle: {
    width: hp(2.4),
    height: hp(2.4),
    marginRight: 15
  }
});
export default styles;