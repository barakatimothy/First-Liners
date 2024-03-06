import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share Location</Text>
        </TouchableOpacity>

        {/* Get Home Safe Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Home Safe</Text>
        </TouchableOpacity>
      </View>

      {/* Enter Location Button */}
      <TouchableOpacity style={styles.enterLocationButton}>
        <Text style={styles.buttonText}>Enter Location</Text>
      </TouchableOpacity>

      {/* Card Section */}
      <View style={styles.cardContainer}>
        {/* Add Contact Person Card */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('./assets/addcontactr.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Add Contact Person</Text>
        </TouchableOpacity>

        {/* Discover Support Organizations Card */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('./assets/discover.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Discover Support Organizations</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon}>
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerIcon}>
          <Text style={styles.footerText}>Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerIcon}>
          <Text style={styles.footerText}>SOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerIcon}>
          <Text style={styles.footerText}>Contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerIcon}>
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
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
    fontWeight: '600', // Montserrat SemiBold
    color: '#0F172A', // Primary Blue 900
    marginBottom: 10,
  },
  introMessage: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '600', // Montserrat SemiBold
    color: '#1E293B', // Primary Blue 800
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#33415E', // Primary Blue 700
    padding: 15,
    borderRadius: 10,
    flex: 0.48,
  },
  buttonText: {
    color: '#EFE8F0', // Primary Blue 200
    textAlign: 'center',
    fontWeight: 'bold',
  },
  enterLocationButton: {
    backgroundColor: '#475569', // Primary Red 600
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
    backgroundColor: '#1E293B', // Primary Blue 800
    padding: 20,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    marginBottom: 10,  // Added margin to create space between cards
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  cardText: {
    fontWeight: '600', // Montserrat SemiBold
    color: '#EFE8F0', // Primary Blue 200
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
  footerText: {
    color: '#334155', // Primary Blue 700
  },
});
