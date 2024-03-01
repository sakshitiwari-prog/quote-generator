import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeightWrtScreen,
  // responsiveHeightWrtScreen,
  responsiveWidthWrtScreen,
} from '../../utils/responsiveHelper';
import Colors from '../../utils/colors';

// const screenWidth = Dimensions.get(e'window').width;
export const styles = StyleSheet.create({
  quoteCategory: {
    borderRadius: 12,
    marginVertical: responsiveHeightWrtScreen(1),
    overflow: 'hidden',
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
    height: responsiveHeightWrtScreen(90),
  },
  scrollContainer: {
    height: responsiveHeightWrtScreen(30),
    // backgroundColor: 'red',
  },
  quoteCategoryItemContainer: {
    height: responsiveHeightWrtScreen(30),
    overflow: 'scroll',
  },
  quoteCategoryTitle: {
    color: Colors.background,
    fontSize: responsiveFontSize(15),
    fontWeight: '700',
  },
  quoteCategoryItem: {
    overflow: 'scroll',
    backgroundColor: 'yellow',
    borderColor: Colors.errorModalBackgroundColor,
    borderTopWidth: 1,
  },
  quoteCategoryItemTitle: {
    lineHeight: 20,
    color: Colors.black,
    fontSize: responsiveFontSize(13),
    fontWeight: '500',
    marginBottom: responsiveHeightWrtScreen(0.5),
  },
  quoteCategoryItemDesc: {
    fontSize: 10,
    fontWeight: '500',
    color: 'gray',
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
