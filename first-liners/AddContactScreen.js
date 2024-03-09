// AddContactScreen.js file
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function AddContactScreen({ navigation }) {
  const [contactName, setContactName] = useState('');
  const [contactPhoneNumber, setContactPhoneNumber] = useState('');

  const handleAddContact = () => {
    // Validate input fields (you can add more validation as needed)
    if (!contactName.trim() || !contactPhoneNumber.trim()) {
      alert('Please enter both name and phone number.');
      return;
    }

    const newContact = {
      name: contactName,
      phoneNumber: contactPhoneNumber,
    };

    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);

    // Optional: You can navigate back to the Home screen or perform other navigation logic
    navigation.goBack(); // This will go back to the previous screen (HomeScreen in this case)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Contact</Text>

      {/* Contact Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Contact Name"
        value={contactName}
        onChangeText={setContactName}
      />

      {/* Contact Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Contact Phone Number"
        keyboardType="numeric" // This ensures the keyboard is numeric
        value={contactPhoneNumber}
        onChangeText={setContactPhoneNumber}
      />

      {/* Add Contact Button */}
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
});

// Sample contacts array (for in-memory storage)
const initialContacts = [
  { name: 'Emergency Contact 1', phoneNumber: '123-456-7890' },
  { name: 'Emergency Contact 2', phoneNumber: '987-654-3210' },
];

// State to manage contacts
const [contacts, setContacts] = useState(initialContacts);