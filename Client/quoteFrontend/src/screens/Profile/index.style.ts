import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeightWrtScreen,
  // responsiveHeightWrtScreen,
  responsiveWidthWrtScreen,
} from '../../utils/responsiveHelper';
import Colors from '../../utils/colors';

// const screenWidth = Dimensions.get(e'window').width;
const styles = StyleSheet.create({
  form: {
    display: 'flex',
    width: responsiveWidthWrtScreen(100),
    height: responsiveHeightWrtScreen(60),
  },
  input: {
    display: 'flex',
    marginBottom: responsiveHeightWrtScreen(1),
  },
  validationMessage: {
    color: Colors.drawerTitleName,
    fontSize: responsiveFontSize(14),
    lineHeight: 21,
    fontWeight: '500',
    alignContent: 'center',
    bottom: responsiveHeightWrtScreen(0.02),
  },
  headerTextContainer: {
    width: responsiveWidthWrtScreen(90),
    height: responsiveHeightWrtScreen(10),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: responsiveWidthWrtScreen(10),
    height: responsiveHeightWrtScreen(10),
    objectFit: 'contain',

    marginLeft: responsiveWidthWrtScreen(5),
  },
  lowerPart: {
    // display: 'flex',
    // width: responsiveWidthWrtScreen(6),
    // position: 'absolute',
    // right: responsiveWidthWrtScreen(2),
    // bottom: responsiveWidthWrtScreen(2),
  },
  upperPart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainContainer: {
    display: 'flex',
    backgroundColor: Colors.background,
    width: responsiveWidthWrtScreen(100),
    height: responsiveHeightWrtScreen(100),
  },
  formContainer: {
    display: 'flex',
    width: responsiveWidthWrtScreen(100),
    padding: responsiveWidthWrtScreen(5),
  },
  headerContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.white,
    width: responsiveWidthWrtScreen(100),
    height: responsiveHeightWrtScreen(10),
  },
  textLabel: {
    marginRight: responsiveWidthWrtScreen(0),
    fontSize: responsiveFontSize(14), // Set font size dynamically
    fontWeight: '600',
    color: Colors.white,
  },
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
  contentView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    height: responsiveHeightWrtScreen(10),
    width: responsiveWidthWrtScreen(100),
    // top: 0,
    paddingVertical: responsiveHeightWrtScreen(1),
    backgroundColor: Colors.white,
    marginBottom: responsiveWidthWrtScreen(3),
  },
  title: {
    fontSize: responsiveFontSize(23),
    color: Colors.background,
    fontWeight: '600',
    marginRight: responsiveWidthWrtScreen(17),
  },
  inputField: {
    marginVertical: responsiveWidthWrtScreen(5),
    fontWeight: '600',
    width: responsiveWidthWrtScreen(90),
    fontSize: responsiveFontSize(14),
    backgroundColor: Colors.formFieldBgColor,
  },
  outlineStyle: {
    borderWidth: 1,
    borderColor: Colors.white,
  },
  scroll: {flex: 1},
});
const buttonStyle = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    width: responsiveWidthWrtScreen(90), // Set width
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
