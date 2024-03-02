import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles, buttonStyle} from './index.style';

import {useNavigation} from '@react-navigation/native';
import {Constants} from '../../utils/constants';
import {Button} from 'react-native-paper';
import Colors from '../../utils/colors';
import {Formik} from 'formik';
import {InputField} from '../../Components/formComponents/InputField';
import {LoginSchema} from '../../utils/Helpers/formikSchema';
import {postRequest} from '../../utils/axios';
import {urls} from '../../utils/Helpers/urlHelper';
import ErrorModal from '../../Components/errorModal';
import {saveDataToStorage} from '../../utils/storage';
const LoginScreen = () => {
  const [error, setError] = useState({isError: false, msg: ''});

  const navigation = useNavigation<any>();
  const onSubmitBtnClickHandler = async (values: any) => {
    console.log(values);

    const sendData = {
      email: values.email,
      password: values.password,
    };

    postRequest(urls.login, sendData)
      .then(async (res: any) => {
        console.log(res, '------------------');

        if (res.user) {
          try {
            await saveDataToStorage('user', JSON.stringify(res.user)).then(
              data => {
                console.log(data, '--------');

                navigation.navigate(Constants.navigationScreens.Home);
              },
            );
          } catch (error) {
            setError({isError: true, msg: Constants.others.wentWrong});
          }
        } else {
          throw new Error(res.msg);
        }
      })
      .catch(err => {
        setError({isError: true, msg: Constants.others.wentWrong});
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.upperPart}>
          <Text style={styles.greetingsMsg}>
            {Constants.LoginSingUpScreen.greetingsMsg}
          </Text>
        </View>
        <View style={styles.middlePart}>
          <Formik
            validationSchema={LoginSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={values => onSubmitBtnClickHandler(values)}>
            {({handleChange, handleSubmit, values, errors}) => (
              <View>
                <InputField
                  name={'email'}
                  label={Constants.LoginSingUpScreen.email}
                  value={values.email}
                  handleChange={handleChange}
                  errors={errors.email}
                />
                <InputField
                  name={'password'}
                  label={Constants.LoginSingUpScreen.password}
                  value={values.password}
                  handleChange={handleChange}
                  errors={errors.password}
                  rightIcon={'eye'}
                />
                <TouchableOpacity
                  onPress={() => {
                    handleSubmit();
                  }}>
                  <Button
                    labelStyle={buttonStyle.label}
                    mode={'contained'}
                    textColor={Colors.black}
                    buttonColor={Colors.white}
                    style={[buttonStyle.button]}>
                    {Constants.LoginSingUpScreen.login}
                  </Button>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
        <View style={styles.lowerPart}>
          <Text style={styles.noAccountQuesn}>
            {Constants.LoginSingUpScreen.noAccountQuesn}
            <TouchableOpacity
              onPress={() => {
                navigation.replace(Constants.navigationScreens.SignUp);
              }}>
              <Text style={styles.signUpNow}>
                {Constants.LoginSingUpScreen.signUpNow}
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
      {error.isError && (
        <ErrorModal
          error={error.isError}
          msg={error.msg}
          onCloseModel={() => setError({isError: false, msg: ''})}
        />
      )}
    </View>
  );
};

export default LoginScreen;
