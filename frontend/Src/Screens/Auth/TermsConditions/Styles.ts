import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  tcModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tcModalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  tcCloseButton: {
    marginRight: 10,
  },
  tcCloseIcon: {
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
  tcModal: {
    marginHorizontal: width * 0.05,
    marginBottom: height * 0.1,
    backgroundColor: 'white',
    borderRadius: 20,
    maxHeight: height * 0.8,
    overflow: 'hidden',
  },
  tcContent: {
    fontFamily: 'Lexend-Light',
    fontSize: 15,
    color: '#767577',
    textAlign: 'justify',
    margin: 20,
  },
  tcAcceptButton: {
    backgroundColor: '#254A56',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  tcAcceptButtonText: {
    color: 'white',
    fontFamily: 'Lexend-Medium',
    fontSize: 18,
  },
});


export default styles;

