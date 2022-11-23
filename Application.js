/*eslint-disable */
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewsHome } from './Screen';
import { NewsDetails } from './Screen/Home';


const Stack = createNativeStackNavigator();

function Application() {
  return (
      <Stack.Navigator
          screenOptions={{
              headerStyle: {
                 backgroundColor: "#0099ee",
              },
              headerTintColor: '#fff',
         }}
      >
        <Stack.Screen name="Home" component={NewsHome} />
        <Stack.Screen name="NewsDetails" component={NewsDetails} />
      </Stack.Navigator>
  );
}
export default Application