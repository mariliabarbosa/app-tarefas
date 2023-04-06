import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TaskIndex from './src/TaskIndex'
import CreateTaskScreen from './src/CreateTaskScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Index"
          component={TaskIndex}
        />
        <Stack.Screen 
          name="CreateTask" 
          component={CreateTaskScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

