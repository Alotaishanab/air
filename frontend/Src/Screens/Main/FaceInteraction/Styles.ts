import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      arrowBack: {
        width: 34,
        height: 34,
        position: 'absolute',
        left: 14,
        top: 58,
        zIndex: 999999,
      },
      footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 40,
      },
      footerIcon: {
        width: 78,
        height: 78,
      },
});
export default styles;