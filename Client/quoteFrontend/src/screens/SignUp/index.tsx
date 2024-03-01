import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles, buttonStyle} from './index.style';

import {Constants} from '../../utils/constants';
import {Button} from 'react-native-paper';
import Colors from '../../utils/colors';
import {Formik} from 'formik';
import {InputField} from '../../Components/formComponents/InputField';
import {postRequest} from '../../utils/axios';
import {urls} from '../../utils/Helpers/urlHelper';
import ErrorModal from '../../Components/errorModal';
import {SignupSchema} from '../../utils/Helpers/formikSchema';
const SignUpScreen = ({navigation}: any) => {
  const [error, setError] = useState({isError: false, msg: ''});

  const onSubmitBtnClickHandler = async (values: any) => {
    const sendData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    postRequest(urls.signup, sendData)
      .then(async (res: any) => {
        console.log('====================================');
        console.log(res);
        if (res.newUser) {
          try {
            // await saveDataToStorage('user', JSON.stringify(res.newUser));
            navigation.navigate(Constants.navigationScreens.Login);
          } catch (error) {
            setError({isError: true, msg: Constants.others.wentWrong});
          }
        } else {
          throw new Error(res.msg);
        }
      })
      .catch(err => {
        console.error('Error:', err);
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
            validationSchema={SignupSchema}
            initialValues={{name: '', email: '', password: ''}}
            onSubmit={values => onSubmitBtnClickHandler(values)}>
            {({
              handleChange,
              // handleBlur,
              handleSubmit,
              values,
              errors,
              // touched,
            }) => (
              <View>
                <InputField
                  name={'name'}
                  label={Constants.LoginSingUpScreen.name}
                  value={values.name}
                  handleChange={handleChange}
                  errors={errors.name}
                />
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
                    {Constants.LoginSingUpScreen.signUp}
                  </Button>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
        <View style={styles.lowerPart}>
          <Text style={styles.noAccountQuesn}>
            {Constants.LoginSingUpScreen.accountExist}
            <TouchableOpacity
              onPress={() => {
                navigation.replace(Constants.navigationScreens.Login);
              }}>
              <Text style={styles.signUpNow}>
                {Constants.LoginSingUpScreen.signInNow}
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

export default SignUpScreen;
// 3$Sadfnjsa
