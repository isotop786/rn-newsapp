import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState,useEffect,useLayoutEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsItem from '../Home/NewsItem'
import BookMarkItem from './BookMarkItem';



const BookMarkScreen = () => {
    const bookMarks = useSelector(state => state.bookMark.bookMarks)
    const navigation = useNavigation()
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Bookmarks",
            headerStyle: {
                backgroundColor:"#0099ee"
            },
            headerTintColor:"#fff"
        })
    })

 
    return (
        // <View>
        //     <Text>Book Marks Screen</Text>    
        // </View>
      <ScrollView className="px-2"
      >
          {bookMarks.map((bookMark, index) => {
              return (
                  <BookMarkItem news={bookMark}/>
                //    <Text key={index}>{bookMark.title}</Text>
              )
          })
        }
    </ScrollView>
  )
}

export default BookMarkScreen

const styles = StyleSheet.create({})