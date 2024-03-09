// EnterLocationScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function EnterLocationScreen({ navigation }) {
  const [allowLocation, setAllowLocation] = useState(false);

  const handleAllowLocation = () => {
    // Implement logic to handle allowing location
    console.log('Location allowed');
    setAllowLocation(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Location</Text>

      {!allowLocation ? (
        <TouchableOpacity
          style={styles.allowLocationButton}
          onPress={handleAllowLocation}
        >
          <Text style={styles.buttonText}>Allow Location</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.messageText}>Location Allowed</Text>
      )}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome name="arrow-left" size={24} color="#334155" />
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  goBackButton: {
    backgroundColor: '#33415E',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#EFE8F0',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
