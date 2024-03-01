import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeightWrtScreen,
  responsiveWidthWrtScreen,
} from '../../../utils/responsiveHelper';
import Colors from '../../../utils/colors';
const styles = StyleSheet.create({
  textLabel: {
    fontSize: responsiveFontSize(14), // Set font size dynamically
    fontWeight: '600',
    color: Colors.white,
  },
  error: {
    width: responsiveWidthWrtScreen(80),
    color: Colors.black,
    fontSize: responsiveFontSize(11),
    marginVertical: responsiveHeightWrtScreen(1),
  },
  inputField: {
    fontWeight: '600',

    fontSize: responsiveFontSize(14),
    backgroundColor: Colors.formFieldBgColor,
  },
  outlineStyle: {
    borderWidth: 1,
    borderColor: Colors.white,
  },
  noteLimitContainer: {
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center',
  },
  noteLength: {fontWeight: '700'},
});

export default styles;
