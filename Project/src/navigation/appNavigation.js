import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartS from '../screens/StartS';
import LoginS from '../screens/LoginScreen';
import PhoneLogin from '../screens/PhoneLoginScreen';


const Stack = createNativeStackNavigator();


export default function appNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Start'>
            <Stack.Screen name='Start' options={{headerShown: false}} component={StartS} />
            <Stack.Screen name='LoginS' options={{headerShown: false}} component={LoginS} />
            <Stack.Screen name='PhoneLogin' options={{headerShown: false}} component={PhoneLogin}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}