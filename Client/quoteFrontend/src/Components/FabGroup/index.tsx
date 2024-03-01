import * as React from 'react';
// import {Image} from 'react-native';
import {FAB, Portal, PaperProvider} from 'react-native-paper';
import {Constants} from '../../utils/constants';
import {ImagesAssets} from '../../utils/imageAssets';
import {styles} from './index.style';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import the desired icon from react-native-vector-icons
import {Image, View} from 'react-native';
import {responsiveWidthWrtScreen} from '../../utils/responsiveHelper';
import Colors from '../../utils/colors';

import {useNavigation} from '@react-navigation/native';
const FabGroup = ({navigation}: any) => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}: any) => setState({open});

  const {open} = state;
  return (
    <FAB.Group
      backdropColor={Colors.backDropColor}
      style={styles.fabgroup}
      open={open}
      visible
      icon={() => (
        <View style={styles.menuContainer}>
          <Image style={styles.navMenu} source={ImagesAssets.navMenu} />
        </View>
      )} // Custom icon
      actions={[
        {
          icon: () => (
            <View style={styles.menuContainer}>
              <Image
                style={[styles.navMenu, styles.listImg]}
                source={ImagesAssets.profileImg}
              />
            </View>
          ),
          label: Constants.ProfileScreen.profile,
          onPress: () => {
            navigation.navigate(Constants.navigationScreens.Profile);
          },
        },
        {
          icon: () => (
            <View style={styles.menuContainer}>
              <Image
                style={[styles.navMenu, styles.listImg]}
                source={ImagesAssets.quoteHistory}
              />
            </View>
          ),
          label: Constants.quoteHistoryScreen.quoteHistory,
          // label: Constants.quoteHistoryScreen.quoteHistory,
          onPress: () =>
            navigation.navigate(Constants.navigationScreens.QuoteHistory),
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};

export default FabGroup;
