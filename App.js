// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUpScreen}
          options={{ title: 'SignUp' }}
        />
        <Stack.Screen 
          name="Menu"
          component={MenuScreen}
          options={{ title: 'Menu' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;