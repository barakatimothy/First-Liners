import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; 
import AddContactScreen from './AddContactScreen';
import EnterLocation from './EnterLocationScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddContact" component={AddContactScreen} />
        <Stack.Screen name="EnterLocation" component={EnterLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
