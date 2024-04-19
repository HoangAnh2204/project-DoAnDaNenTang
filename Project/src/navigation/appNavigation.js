import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartS from '../screens/StartS';
import LoginS from '../screens/LoginScreen';
import PhoneLogin from '../screens/PhoneLoginScreen';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FacebookLoginScreen from '../screens/FacebookLogInScreen';
import FacebookAccountScreen from '../screens/FacebookAccountScreen';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();


export default function appNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Start'>
            <Stack.Screen name='Start' options={{headerShown: false}} component={StartS} />
            <Stack.Screen name='LoginS' options={{headerShown: false}} component={LoginS} />
            <Stack.Screen name='PhoneLogin' options={{headerShown: false}} component={PhoneLogin}/>
            <Stack.Screen name='OTP' options={{headerShown: false}} component={OtpVerificationScreen}/>
            <Stack.Screen name='SignUp' options={{headerShown: false}} component={SignUpScreen}/>
            <Stack.Screen name='FbLogIn' options={{headerShown: false}} component={FacebookLoginScreen}/>
            <Stack.Screen name='FbAcc' options={{headerShown: false}} component={FacebookAccountScreen}/>
            <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}