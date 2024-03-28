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
    flex: 0.8,
    justifyContent: 'flex-start',
    alignItems: "center"
  },
  bottomEmpty: {
    flex: 0.1
  },
  headerWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2)
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
 
  nextButton: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(6.5),
    marginTop: hp(5)
  },
  nextText: {
    fontSize: hp(2.4),
    fontFamily: 'Lexend-Medium',
  },

  
  bottomInner: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
    marginBottom: hp(2)
  },
  descriptionText: {
    fontSize: hp(1.8),
    fontFamily: "Lexend-Regular",
    lineHeight: 20
  },
  registerAccount: {
    fontSize: hp(1.8),
    fontFamily: 'Lexend-Bold',
  },
  iconStyle: {
    width: hp(2.4),
    height: hp(2.4),
    marginRight: 15
  }
});
export default styles;