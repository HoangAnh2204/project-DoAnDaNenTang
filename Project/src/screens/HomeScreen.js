import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GradientBackground from '../GradientBackground';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0); // Chỉ số của ảnh hiện tại
  const [profileImages, setProfileImages] = useState([
    require('../asset/images/valentines-day.png'),
    require('../asset/images/love-letter.png'),
    require('../asset/images/meow1.jpg'),
    require('../asset/images/meow2.jpg'),
    require('../asset/images/meow3.jpg'),
    require('../asset/images/meow4.jpg'),
    require('../asset/images/meow5.jpg'),
    // Thêm các đường dẫn ảnh khác vào đây
  ]);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  const handleFilter = () => {
    console.log('Filtering...');
    setFilterModalVisible(true);
  };

  const handleCloseFilterModal = () => {
    setFilterModalVisible(false);
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
    // Navigate to another screen when profile is clicked
  };

  const handleRejectClick = () => {
    console.log('Reject clicked');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profileImages.length); // Chuyển đến ảnh tiếp theo trong mảng
  };

  const handleLikeClick = () => {
    console.log('Like clicked');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profileImages.length); // Chuyển đến ảnh tiếp theo trong mảng
  };

  return (
    <GradientBackground style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.logoContainer}>
          <Text>DatingLove</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
            onFocus={() => console.log('Focused on search bar')}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
          <Icon name="filter" size={30} color="#900" />
        </TouchableOpacity>
      </View>

      {profileImages.length > 0 && (
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={handleProfileClick}>
            <View style={styles.imageContainer}>
              <Image
                source={profileImages[currentIndex]}
                style={styles.image}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Tên người</Text>
                <Text style={styles.ageText}>Tuổi</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={handleRejectClick}>
              <Text>X</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLikeClick}>
              <Text>❤️</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <Modal visible={isFilterModalVisible} animationType="slide" transparent={true}>
        <View style={styles.filterModalContainer}>
          <View style={styles.filterModalContent}>
            <Text>Filter Options</Text>
            <TouchableOpacity onPress={handleCloseFilterModal}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.taskbarContainer}>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 60,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  searchButton: {},
  filterButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: 400,
    height: 600,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius:25,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    borderBottomLeftRadius: 25,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ageText: {
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  filterModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  filterModalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  taskbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default HomeScreen;
