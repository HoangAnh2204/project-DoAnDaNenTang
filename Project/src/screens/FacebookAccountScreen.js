import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FacebookAccountScreen = ({navigation}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContinue = () => {
    navigation.navigate('Home');
    setIsSubmitting(true);
    // Xử lý logic chấp nhận quyền truy cập tại đây
    console.log('Accepting permission request');
    
  };

  const handleCancel = () => {
    // Xử lý logic từ chối quyền truy cập tại đây
    console.log('Cancelling permission request');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Company is requesting access to:</Text>
        <Text style={styles.message}>Your name and profile picture.</Text>
        <Text style={[styles.message, { color: '#5e93fe' }]}>View</Text>
        <TouchableOpacity
          style={[styles.button, styles.continueButton]}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Continue as Name</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isSubmitting && styles.buttonDisabled]}
          onPress={handleCancel}
          disabled={isSubmitting}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.footnote}>
          By continuing, Company will receive ongoing access to the information you share and Facebook will record when Company accesses it. Learn more about this sharing and the settings you have. Company's Privacy Policy.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4267b2',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  continueButton: {
    backgroundColor: '#4CAF50',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footnote: {
    fontSize: 12,
    color: '#666',
  },
});

export default FacebookAccountScreen;