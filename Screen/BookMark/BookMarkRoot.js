import { View, Text } from 'react-native'
import React,{useLayoutEffect,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookMarkScreen from './BookMarkScreen';
import { useNavigation } from '@react-navigation/native';
import BookMarkDetails from './BookMarkDetails';

const Stack = createNativeStackNavigator();


const BookMarkRoot = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    },[])

  return (
   <Stack.Navigator
          screenOptions={{
              headerStyle: {
                 backgroundColor: "#0099ee",
              },
              headerTintColor: '#fff',
          }}
          initialRouteName="BookMarkHome"
      >
        <Stack.Screen name="BookMarkHome" component={BookMarkScreen} />
        <Stack.Screen name="BookMarkDetals" component={BookMarkDetails} />
      </Stack.Navigator>
  )
}

export default BookMarkRoot