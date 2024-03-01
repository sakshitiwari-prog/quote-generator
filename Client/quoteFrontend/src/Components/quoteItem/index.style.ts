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
  quoteCategoryTitle: {
    color: Colors.background,
    fontSize: responsiveFontSize(15),
    fontWeight: '700',
  },
  quoteCategoryItem: {
    // borderRadius: 12,
    // marginVertical: responsiveHeightWrtScreen(0.5),
    overflow: 'hidden',
    backgroundColor: Colors.white,
    borderColor: Colors.errorModalBackgroundColor,
    borderTopWidth: 1,
    // border:
  },
  quoteCategoryItemTitle: {
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
});
