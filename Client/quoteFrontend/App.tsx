/* eslint-disable react/jsx-props-no-multi-spaces */
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Constants} from './src/utils/constants';
import LoginScreen from './src/screens/Login';
import SplashScreen from './src/screens/Splash';
import MainScreen from './src/screens/Main';
import SignUpScreen from './src/screens/SignUp';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/Profile';
import QuoteHistoryScreen from './src/screens/QuoteHistory';
// import LoginSingUpScreen from './src/screens/Login';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Constants.navigationScreens.SPLASH}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={Constants.navigationScreens.SPLASH}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.Main}
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.Login}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.SignUp}
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.Home}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.Profile}
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.navigationScreens.QuoteHistory}
          component={QuoteHistoryScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
