import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import GradientBackground from '../GradientBackground';

const LoginScreen = ({ navigation }) => {
  const handleFacebookLogin = () => {
    // Chuyển hướng sang trang đăng nhập Facebook
    navigation.navigate('FbLogIn');
  };

  const handlePhoneLogin = () => {
    // Chuyển hướng sang trang đăng ký bằng số điện thoại
    navigation.navigate('PhoneLogin');
  };

  return (
    <GradientBackground style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require('../asset/images/love-letter.png')} style={styles.image} />
        <Text style={styles.title}>Let's you in</Text>
        <TouchableOpacity style={styles.facebookButton} onPress={handleFacebookLogin}>
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>__________or__________</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity onPress={handlePhoneLogin}>
          <Text style={styles.buttonText}>Sign in with phone</Text>
        </TouchableOpacity>
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
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 20,
  },
  phoneButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
  },
  orText: {
    marginHorizontal: 10,
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;