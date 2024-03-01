import React, {useContext, useEffect, useRef} from 'react';
import {View, Image, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './index.style';
import {Constants} from '../../utils/constants';
// import {navigationScreens} from '../../utils/navigation';
// import {backCircle} from '../../utils/images';
// import {CircleLogo} from '../../utils/SvgImage';
import {StackNavigationProp} from '@react-navigation/stack/';
import {AuthContext} from '../../AuthProvider';
// import { StackParams} form 'your/routes';r
// Image

function SplashScreen(props: any) {
  const navigation = useNavigation<any>();
  const spinValue = useRef(new Animated.Value(0)).current;
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      console.log('==========login============');
      console.log(authContext.isLogin);
      console.log('=============login================');
      if (authContext.isLogin) {
        console.log('====================================');
        console.log('if');
        console.log('====================================');
        navigation.replace(Constants.navigationScreens.Home);
      } else {
        console.log('====================================');
        console.log('else');
        console.log('====================================');
        navigation.replace(Constants.navigationScreens.Main);
      }
    }, 3000);

    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    return () => clearTimeout(splashTimeout);
  }, [navigation, spinValue, authContext.isLogin]);
  useEffect(() => {
    authContext.getUserData();
  });
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      {/* <View style={styles.splashImagesContainer}>
        <Image source={backCircle} style={styles.logo} />
        <View style={styles.logoContainer}>
          <Animated.View style={[{transform: [{rotate: spin}]}]}>
            <CircleLogo></CircleLogo>
          </Animated.View>
        </View>
      </View> */}
    </View>
  );
}

export default SplashScreen;
