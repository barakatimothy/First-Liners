import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function AddContactScreen({ navigation }) {
  const [contactName, setContactName] = useState('');
  const [contactPhoneNumber, setContactPhoneNumber] = useState('');

  const handleAddContact = () => {
    if (!contactName.trim() || !contactPhoneNumber.trim()) {
      alert('Please enter both name and phone number.');
      return;
    }
    // TODO: Add logic to save contact to storage or backend
    navigation.goBack(); 
  };

  // Sample contacts
  const sampleContacts = [
    { name: 'Geek', phoneNumber: '0700043235' },
    { name: 'Police', phoneNumber: '911' },
    { name: 'Mother', phoneNumber: '5551234567' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Contact</Text>

      {/* Sample contacts */}
      <View style={styles.sampleContacts}>
        {sampleContacts.map((contact, index) => (
          <TouchableOpacity
            key={index}
            style={styles.sampleContact}
            onPress={() => {
              setContactName(contact.name);
              setContactPhoneNumber(contact.phoneNumber);
            }}
          >
            <Text style={styles.sampleContactText}>{contact.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Contact Name"
        value={contactName}
        onChangeText={setContactName}
      />

      <TextInput
        style={styles.input}
        placeholder="Contact Phone Number"
        keyboardType="numeric" 
        value={contactPhoneNumber}
        onChangeText={setContactPhoneNumber}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddContact}>
        <Text style={styles.buttonText}>Add Contact</Text>
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
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#33415E',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: '#EFE8F0',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  sampleContacts: {
    marginBottom: 20,
  },
  sampleContactsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sampleContact: {
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  sampleContactText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
