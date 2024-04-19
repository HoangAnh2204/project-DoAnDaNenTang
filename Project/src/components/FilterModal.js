import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterModal = ({ isVisible, onClose }) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Filter Options</Text>

          {/* Distance */}
          <TouchableOpacity style={styles.optionContainer}>
            <Text>Distance: 0-10km</Text>
          </TouchableOpacity>

          {/* Gender */}
          <TouchableOpacity style={styles.optionContainer}>
            <Text>Gender: Male</Text>
          </TouchableOpacity>

          {/* Age */}
          <TouchableOpacity style={styles.optionContainer}>
            <Text>Age: 18-30</Text>
          </TouchableOpacity>

          {/* Close button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
  },
});

export default FilterModal;
