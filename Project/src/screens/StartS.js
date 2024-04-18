import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import GradientBackground from '../GradientBackground';
import * as Font from 'expo-font';

// Tải font vào dự án



const StartS = ({ navigation }) => {
  const handleStartPress = () => {
    navigation.navigate('LoginS');
  };

  return (
    <GradientBackground style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Dating Love</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../asset/images/valentines-day.png')} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.startButton} onPress={handleStartPress}>
        <Text style={styles.startText}>START</Text>
      </TouchableOpacity>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    textAlign: 'center',
    fontFamily: "Jacquard12Charted-Regular",
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
  },
  imageContainer: {
    marginBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
  },
  startButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  startText: {
    color: '#3b5998',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StartS;