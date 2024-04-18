import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import GradientBackground from '../GradientBackground';

const PhoneLoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    // Xử lý logic khi người dùng nhấn nút "Continue"
    // Ví dụ: chuyển hướng sang trang khác
    navigation.navigate('OTP');
  };

  return (
    <GradientBackground style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>My number is</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.countryCode}>IN +84</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="PhoneNumber"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.disclaimer}>
          By clicking Log in, you agree with our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.
        </Text>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  countryCode: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  continueButton: {
    backgroundColor: '#7986cb',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disclaimer: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
});

export default PhoneLoginScreen;