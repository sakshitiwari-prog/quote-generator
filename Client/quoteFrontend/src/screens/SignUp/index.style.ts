import {StyleSheet} from 'react-native';
import {
  responsiveWidthWrtScreen,
  responsiveHeightWrtScreen,
  responsiveFontSize,
} from '../../utils/responsiveHelper';
import Colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 0,
    height: responsiveHeightWrtScreen(100),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  mainContainer: {
    width: responsiveWidthWrtScreen(80),
    height: responsiveHeightWrtScreen(60),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  middlePart: {},
  upperPart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signUpNow: {
    // fontSize: responsiveFontSize(13),\
    textDecorationLine: 'underline',
    color: Colors.white, // Set font size dynamically
    fontWeight: '600',
    // paddingBottom: -responsiveHeightWrtScreen(6),
  },
  lowerPart: {
    display: 'flex',
    alignItems: 'center',
    // fontWeight:'500',
  },
  greetingsMsg: {
    fontSize: responsiveFontSize(25),
    fontWeight: '500',
    color: Colors.white,
    textAlign: 'center',
  },
  appImage: {
    width: responsiveWidthWrtScreen(25),
    height: responsiveHeightWrtScreen(7),
    objectFit: 'contain',
  },
  noAccountQuesn: {
    // te
    color: Colors.noAccountMsg,
    fontSize: responsiveFontSize(13), // Set font size dynamically
    fontWeight: '500',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidthWrtScreen(70),
    marginHorizontal: responsiveWidthWrtScreen(5),
    marginVertical: responsiveHeightWrtScreen(3),
    padding: responsiveWidthWrtScreen(2),
  },
});
const buttonStyle = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    width: responsiveWidthWrtScreen(80), // Set width
    height: responsiveHeightWrtScreen(6), // Set height
    marginVertical: responsiveWidthWrtScreen(8), // Set vertical margin
    paddingHorizontal: responsiveWidthWrtScreen(2), // Set horizontal padding
  },
  outlined: {
    borderWidth: 1, // Border width
    borderColor: Colors.white,
  },
  label: {
    fontSize: responsiveFontSize(16), // Set font size dynamically
    fontWeight: '600', // Set font weight as a string
  },
});
export {buttonStyle, styles};
