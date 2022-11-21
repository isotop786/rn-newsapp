/*eslint-disable */
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icons from "react-native-heroicons/outline";
import * as Solid from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import Application from './Application';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="text-red-500">Home!</Text>
      <Icons.SparklesIcon size={20} color="black"/>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}
function FavScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorite news!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={Application}
          options={{
            tabBarLabel: 'News',
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused)
              {
                return(<Solid.NewspaperIcon size={24} color="#0099ee" />)
              } else {
                return (
                  <Icons.NewspaperIcon size={24} color="#aaa"/>
                )
              }
    
              }
          }}
        />
        <Tab.Screen name="Search" component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size, focused }) => {
              if (focused)
              {
                return(<Solid.MagnifyingGlassIcon size={24} color="#0099ee" />)
              } else {
                return(<Icons.MagnifyingGlassIcon size={24} color="#aaa" />)
              }
              
            }
          }}
        />
        <Tab.Screen name="Fav" component={FavScreen}
          options={{
            tabBarLabel: 'Bookmarks',
            tabBarIcon: ({ color, size, focused }) => {
              if (focused)
              {
                return(<Solid.BookmarkIcon size={24} color="#0099ee" />)
              } else {
                return(<Icons.BookmarkIcon size={24} color="#aaa" />)
              }
              
            }
          }}
        />
        <Tab.Screen name="Setting" component={SettingsScreen}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({ color, size, focused }) => {
              if (focused)
              {
                return (
                  <Icons.AdjustmentsVerticalIcon size={24} color="#0099ee" />
                )
              } else {
                 return (
                  <Icons.AdjustmentsVerticalIcon size={24} color="#aaa" />
                )
              }
              
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App