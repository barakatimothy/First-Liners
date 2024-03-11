import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Sms from 'expo-sms';
import * as Location from 'expo-location';

export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState('');
  const [isSharingLocation, setIsSharingLocation] = useState(false);

  useEffect(() => {
    // Request location permissions when the component mounts
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Location permission not granted');
      }
    })();
  }, []);

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

  const sendSOSMessage = async () => {
    try {
      const isAvailable = await Sms.isAvailableAsync();
      if (isAvailable) {
        const location = await Location.getCurrentPositionAsync({});
        const { result } = await Sms.sendSMSAsync(
          ['0781124081'],
          `Help! I need assistance. My current location is: ${location.coords.latitude}, ${location.coords.longitude}`
        );

        if (result === Sms.SentStatus.SENT) {
          showMessage('SOS message sent successfully');
        } else {
          showMessage('Failed to send SOS message');
        }
      } else {
        showMessage('SMS is not available on this device');
      }
    } catch (error) {
      console.error('Error sending SOS message:', error);
      showMessage('Error sending SOS message');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FIRSTLINERS</Text>

      <Text style={styles.introMessage}>
        Introducing First Liners App, Your All-in-One Safety Application
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, isSharingLocation && styles.activeButton]}
          onPress={isSharingLocation ? stopSharingLocation : startSharingLocation}
        >
          <Text style={styles.buttonText}>
            {isSharingLocation ? 'Stop Sharing Location' : 'Share Location'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => showMessage('Get Home Safe Clicked')}
        >
          <Text style={styles.buttonText}>Get Home Safe</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.enterLocationButton}
        onPress={() => showMessage('Enter Location Clicked')}
      >
        <Text style={styles.buttonText}>Enter Location</Text>
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate('AddContact');
            showMessage('Add Contact Clicked');
          }}
        >
          <Image
            source={require('./assets/addcontactr.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Add Contact Person</Text>
        </TouchableOpacity>

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

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => showMessage('Home Clicked')}
        >
          <FontAwesome name="home" size={24} color="#334155" />
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => showMessage('Location Clicked')}
        >
          <FontAwesome name="map-marker" size={24} color="#334155" />
          <Text>Location</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerIcon}
          onPress={sendSOSMessage}
        >
          <FontAwesome name="phone" size={24} color="#334155" />
          <Text>SOS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => showMessage('Contacts Clicked')}
        >
          <FontAwesome name="address-book" size={24} color="#334155" />
          <Text>Contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => showMessage('Profile Clicked')}
        >
          <FontAwesome name="user" size={24} color="#334155" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>

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
    justifyContent: 'space-between', // Adjusted justification
    padding: 20,
    paddingBottom: 0, // Removed bottom padding
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
    width: '100%', // Adjusted width
  },
  button: {
    backgroundColor: '#33415E',
    padding: 15,
    borderRadius: 10,
    width: '48%', // Adjusted width
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
    width: '100%', // Adjusted width
  },
  card: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 10,
    width: '48%', // Adjusted width
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
    justifyContent: 'space-evenly', // Adjusted spacing
    width: '100%',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  footerIcon: {
    alignItems: 'center',
    marginBottom: 5,
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
