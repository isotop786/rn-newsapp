/*eslint-disable */
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View className="flex-1">
      <Text className="text-red-300">Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Application() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
}
export default Application