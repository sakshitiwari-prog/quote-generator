import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Constants} from '../../utils/constants';
import {Button} from 'react-native-paper';
import Colors from '../../utils/colors';

import {styles, buttonStyle} from './index.style';
import {ImagesAssets} from '../../utils/imageAssets';
// import styles from './index.style';

import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {InputField} from '../../Components/formComponents/InputField';

import {getDataFromStorage, saveDataToStorage} from '../../utils/storage';
import ErrorModal from '../../Components/errorModal';
import {ProfileSchema} from '../../utils/Helpers/formikSchema';
import {urls} from '../../utils/Helpers/urlHelper';
import {postRequest} from '../../utils/axios';
import Loader from '../../Components/Loader';
const ProfileScreen = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigation = useNavigation();
  const [error, setError] = useState({isError: false, msg: ''});
  const [userData, setUserData] = useState<any>({name: 'User'});
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log('====================================');
    console.log('userData', userData);
    console.log('====================================');
  }, [userData]);
  async function getData() {
    await getDataFromStorage('user')
      .then(data => {
        let parseData;
        if (data) {
          parseData = JSON.parse(data);
          console.log('parseData', parseData);

          setUserData(parseData);
          formikProps.setValues({
            name: parseData.name,
            email: parseData.email,
          });
          console.log(parseData.name, 'from parse');
        }
      })
      .catch((err: any) => {
        console.log(err);
        setError({isError: true, msg: Constants.others.wentWrong});
      });
  }
  const handleOutsideMenuPress = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }
  };

  let initialValue = {
    email: '',
    name: '',
  };
  const formikProps = useFormik({
    initialValues: initialValue,
    onSubmit: updateProfile,
    validationSchema: ProfileSchema,
  });
  async function updateProfile(values: any) {
    console.log('values', values);

    setIsLoad(true); // Set loading state before fetching data
    try {
      if (!userData.userId) {
        throw new Error(Constants.others.wentWrong);
      }

      const sendData = {
        userId: userData.userId,
        name: values.name,
        email: values.email,
      };

      postRequest(urls.profileUpdate, sendData)
        .then(async res => {
          console.log(typeof res.user, res.user.length);

          if (res.user && Object.keys(res.user).length > 0) {
            const {email, name} = res.user;
            userData.email = email;
            userData.name = name;
            let saveData = {...userData};
            console.log('====================================');
            console.log('saveData', saveData);
            console.log('====================================');
            try {
              await saveDataToStorage('user', JSON.stringify(userData)).then(
                (data: any) => {
                  console.log('data', data);

                  setIsLoad(false);
                  setError({isError: true, msg: data.msg});
                },
              );
            } catch (error) {
              setError({isError: true, msg: Constants.others.wentWrong});
              setIsLoad(false);
            }
          } else {
            throw Error(Constants.others.wentWrong);
          }
        })
        .catch(e => {
          console.log(e, 'e');

          setIsLoad(false);
        });
    } catch (error) {
      setError({isError: true, msg: Constants.others.wentWrong});
      setIsLoad(false); // Turn off loading state if there's an error
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => handleOutsideMenuPress}>
      <SafeAreaView>
        <StatusBar backgroundColor={Colors.white} barStyle="light-content" />
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.backIcon} source={ImagesAssets.backIcon} />
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.title}>
                {Constants.ProfileScreen.profile}
              </Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.form}>
              <View style={styles.input}>
                <InputField
                  name={'name'}
                  label={Constants.LoginSingUpScreen.name}
                  value={formikProps.values.name}
                  handleChange={formikProps.handleChange}
                  errors={formikProps.errors.name}
                  width={90}
                />
                {formikProps.touched.name && formikProps.errors.name && (
                  <View>
                    <Text style={styles.validationMessage}>
                      {formikProps.errors.name.toString()}
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.input}>
                <InputField
                  name={'email'}
                  label={Constants.LoginSingUpScreen.email}
                  value={formikProps.values.email}
                  handleChange={formikProps.handleChange}
                  errors={formikProps.errors.email}
                  width={90}
                />
                {formikProps.touched.email && formikProps.errors.email && (
                  <View>
                    <Text style={styles.validationMessage}>
                      {formikProps.errors.email.toString()}
                    </Text>
                  </View>
                )}
              </View>

              <View>
                <Button
                  disabled={!formikProps.isValid}
                  labelStyle={buttonStyle.label}
                  mode={'contained'}
                  textColor={Colors.white}
                  buttonColor={Colors.ActiveBtn}
                  style={[buttonStyle.button]} // Apply custom style for outlined mode button
                  onPress={() => formikProps.handleSubmit()}>
                  {Constants.ProfileScreen.save}
                </Button>
              </View>
            </View>
          </View>
        </View>
        {isLoad && <Loader isLoad />}

        {error.isError && (
          <ErrorModal
            error={error.isError}
            msg={error.msg}
            onCloseModel={() => setError({isError: false, msg: ''})}
          />
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;
