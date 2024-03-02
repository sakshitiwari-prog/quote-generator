import React, {useContext, useEffect} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Constants} from '../../utils/constants';
import {AuthContext} from '../../AuthProvider';
import {ImagesAssets} from '../../utils/imageAssets';
import {styles} from './index.style';
import {getDataFromStorage} from '../../utils/storage';

function SplashScreen() {
  const navigation = useNavigation<any>();
  const authContext = useContext(AuthContext);
  async function getUserData() {
    await getDataFromStorage('user')
      .then(data => {
        if (data) {
          navigation.replace(Constants.navigationScreens.Home);
        } else {
          navigation.replace(Constants.navigationScreens.Main);
        }
      })
      .catch((err: any) => {
        console.log(err);

        // setError(true);
      });
  }

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      getUserData();
    }, 3000);

    return () => clearTimeout(splashTimeout);
  }, []);
  useEffect(() => {
    authContext.getUserData();
  });

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.upperPart}>
          <Image style={styles.appImage} source={ImagesAssets.appIcon} />
        </View>
      </View>
    </View>
  );
}

export default SplashScreen;
