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
                backgroundColor:"#4477dd"
            },
            headerTintColor:"#fff"
        })
    })


        
     return(
         <ScrollView className="px-2">
            {bookMarks.length < 1 && (<Text className="pt-5 text-center font-bold">No Bookmark</Text>)}
          {bookMarks.map((bookMark, index) => {
              return (
                  <BookMarkItem key={index} news={bookMark}/>
              )
          })
        }
            </ScrollView>
    )
    

}

export default BookMarkScreen

const styles = StyleSheet.create({})