// App.js file
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Import the HomeScreen component
import AddContactScreen from './AddContactScreen'; // Import the AddContactScreen component

// Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddContact" component={AddContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
