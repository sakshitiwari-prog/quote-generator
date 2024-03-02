import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ImagesAssets} from '../../utils/imageAssets';
import {styles, buttonStyle} from './index.style';

import {Constants} from '../../utils/constants';
import {Button} from 'react-native-paper';
import Colors from '../../utils/colors';
const MainScreen = ({navigation}: any) => {
  const [option, setOption] = useState({
    login: true,
    signUp: false,
  });

  const onBtnClickHandler = (btnLabel: string) => {
    if (btnLabel === Constants.LoginSingUpScreen.login) {
      setOption({login: true, signUp: false});
      navigation.navigate(Constants.navigationScreens.Login);
    } else {
      setOption({login: true, signUp: false});
      navigation.navigate(Constants.navigationScreens.SignUp);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.upperPart}>
          <Image style={styles.appImage} source={ImagesAssets.appIcon} />
          <Text style={styles.appName}>
            {Constants.LoginSingUpScreen.quoteGenerator}
          </Text>
        </View>
        {/* <AuthProvider></AuthProvider> */}
        <View style={styles.lowerPart}>
          <TouchableOpacity
            onPress={() =>
              onBtnClickHandler(Constants.LoginSingUpScreen.login)
            }>
            <Button
              labelStyle={buttonStyle.label}
              mode={option.login ? 'contained' : 'outlined'}
              textColor={option.login ? Colors.black : Colors.white}
              buttonColor={option.login ? Colors.white : Colors.transparent}
              style={[
                option.login ? null : buttonStyle.outlined,
                buttonStyle.button,
              ]} // Apply custom style for outlined mode button
            >
              {Constants.LoginSingUpScreen.login}
            </Button>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              onBtnClickHandler(Constants.LoginSingUpScreen.signUp)
            }>
            <Button
              labelStyle={buttonStyle.label}
              mode={option.signUp ? 'contained' : 'outlined'}
              textColor={option.signUp ? Colors.black : Colors.white}
              buttonColor={option.signUp ? Colors.white : Colors.transparent}
              style={[
                option.signUp ? null : buttonStyle.outlined,
                buttonStyle.button,
              ]} // Apply custom style for outlined mode button
            >
              {Constants.LoginSingUpScreen.signUp}
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
