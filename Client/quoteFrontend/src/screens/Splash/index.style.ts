import {StyleSheet} from 'react-native';
// import {Color} from '../../utils/Color';
import {
  responsiveWidthWrtScreen,
  responsiveHeightWrtScreen,
  responsiveFontSize,
} from '../../utils/responsiveHelper';
import Colors from '../../utils/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.accent,
  },
  // splashImagesContainer: {
  //   position: 'relative',
  //   width: responsiveWidthWrtScreen(100),
  //   height: responsiveHeightWrtScreen(50),
  // },
  // logoContainer: {
  //   position: 'absolute',
  //   width: responsiveWidthWrtScreen(100),
  //   height: responsiveHeightWrtScreen(50),
  //   top: 0,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // outerCircle: {
  //   width: windowWidth * 1,
  //   height: windowWidth * 1,
  //   borderRadius: (windowWidth * 1) / 2,
  //   backgroundColor: '#181818',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // middleCircle: {
  //   width: windowWidth * 0.8,
  //   height: windowWidth * 0.8,
  //   borderRadius: (windowWidth * 0.8) / 2,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   position: 'relative',
  // },
  // innerCircle: {
  //   // width: windowWidth * 0.6,
  //   // height: windowWidth * 0.6,
  //   borderRadius: (windowWidth * 0.6) / 2,
  //   backgroundColor: 'white',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  // },
  // logo: {
  //   width: responsiveWidthWrtScreen(100),
  //   height: responsiveHeightWrtScreen(50),
  //   resizeMode: 'contain',
  // },
});

export default styles;
