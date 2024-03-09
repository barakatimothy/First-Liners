// HomeScreen.js file
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState('');
  const [isSharingLocation, setIsSharingLocation] = useState(false);

  const startSharingLocation = () => {
    // TODO: Implement logic to start sharing location with selected contacts
    // For example, you might use a location tracking library or APIs here
    // Replace the following line with your actual implementation
    console.log('Start sharing location logic goes here');

    setIsSharingLocation(true);
    showMessage('Sharing Location started');
  };

  const stopSharingLocation = () => {
    // TODO: Implement logic to stop sharing location
    // Replace the following line with your actual implementation
    console.log('Stop sharing location logic goes here');

    setIsSharingLocation(false);
    showMessage('Sharing Location stopped');
  };

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => {
      setMessage('');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>FIRSTLINERS</Text>

      {/* Introductory Message */}
      <Text style={styles.introMessage}>
        Introducing First Liners App, Your All-in-One Safety Application
      </Text>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        {/* Share Location Button */}
        <TouchableOpacity
          style={[styles.button, isSharingLocation && styles.activeButton]}
          onPress={isSharingLocation ? stopSharingLocation : startSharingLocation}
        >
          <Text style={styles.buttonText}>
            {isSharingLocation ? 'Stop Sharing Location' : 'Share Location'}
          </Text>
        </TouchableOpacity>

        {/* Get Home Safe Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => showMessage('Get Home Safe Clicked')}
        >
          <Text style={styles.buttonText}>Get Home Safe</Text>
        </TouchableOpacity>
      </View>

      {/* Enter Location Button */}
      <TouchableOpacity
        style={styles.enterLocationButton}
        onPress={() => showMessage('Enter Location Clicked')}
      >
        <Text style={styles.buttonText}>Enter Location</Text>
      </TouchableOpacity>

      {/* Card Section */}
      <View style={styles.cardContainer}>
        {/* Add Contact Person Card */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate('AddContact'); // Navigate to AddContactScreen
            showMessage('Add Contact Clicked');
          }}
        >
          <Image
            source={require('./assets/addcontactr.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Add Contact Person</Text>
        </TouchableOpacity>

        {/* Discover Support Organizations Card */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => showMessage('Discover Support Organizations Clicked')}
        >
          <Image
            source={require('./assets/discover.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Discover Support Organizations</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => showMessage('Home Clicked')}
        >
          <FontAwesome name="home" size={24} color="#334155" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => showMessage('Location Clicked')}
        >
          <FontAwesome name="map-marker" size={24} color="#334155" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => showMessage('SOS Clicked')}
        >
          <FontAwesome name="phone" size={24} color="#334155" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => showMessage('Contacts Clicked')}
        >
          <FontAwesome name="address-book" size={24} color="#334155" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => showMessage('Profile Clicked')}
        >
          <FontAwesome name="user" size={24} color="#334155" />
        </TouchableOpacity>
      </View>

      {/* Display Temporary Message */}
      {message !== '' && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 10,
  },
  introMessage: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#33415E',
    padding: 15,
    borderRadius: 10,
    flex: 0.48,
  },
  buttonText: {
    color: '#EFE8F0',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  activeButton: {
    backgroundColor: '#FF6347',
  },
  enterLocationButton: {
    backgroundColor: '#475569',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  cardText: {
    fontWeight: '600',
    color: '#EFE8F0',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderTopWidth: 1,
    paddingTop: 10,
    marginTop: 20,
  },
  footerIcon: {
    alignItems: 'center',
  },
  messageContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -50 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  messageText: {
    color: '#fff',
  },
});
