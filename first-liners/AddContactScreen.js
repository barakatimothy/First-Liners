// AddContactScreen.js file
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
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Contact</Text>

     
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
});

