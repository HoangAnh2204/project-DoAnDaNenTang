import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import GradientBackground from '../GradientBackground';
import { useNavigation } from '@react-navigation/native';


const OtpVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [resendTime, setResendTime] = useState(10); // ...phút
  

  useEffect(() => {
    const interval = setInterval(() => {
      setResendTime((prevTime) => prevTime - 1);
      
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (text) => {
    setOtp(text);
  };

  const handleContinue = () => {
    // Xử lý logic xác thực mã OTP
    // Ví dụ: chuyển hướng sang trang khác
    navigation.navigate('SignUp');
  };

  const handleResend = () => {
    // Xử lý logic gửi lại mã OTP
    setResendTime(10);
  };

  return (
    <GradientBackground style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Enter OTP</Text>
        <View style={styles.otpInputContainer}>
          <TextInput
            style={styles.otpInput}
            placeholder="_ _ _ _"
            value={otp}
            onChangeText={handleOtpChange}
            keyboardType="number-pad"
            maxLength={4}
          />
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        {resendTime > 0 ? (
          <Text style={styles.resendText}>
            Resend in {Math.floor(resendTime / 60)}:{String(resendTime % 60).padStart(2, '0')}
          </Text>
        ) : (
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendText}>Resend</Text>
          </TouchableOpacity>
        )}
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
  otpInputContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  otpInput: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
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
  resendText: {
    fontSize: 14,
    color: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#4C6EF5',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OtpVerificationScreen;