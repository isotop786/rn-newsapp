/*eslint-disable*/
import React, {useEffect,useState,useLayoutEffect} from 'react'
import { View, Text, ToastAndroid,SafeAreaView, ScrollView,Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Icons from "react-native-heroicons/outline";
import { useDispatch, useSelector } from 'react-redux';
import { addBookMark } from '../../redux/actions/bookmarkAction';


const BookMarkDetails = ({ route,navigation}) => {
  // console.log(route.params.news);
  const news = route.params.news;
  const {title,image} = route.params.news
  const dispatch = useDispatch();

  const addBookMarkItem = () => {
    console.log(news)
    dispatch(addBookMark(news))
    ToastAndroid.showWithGravity(
      `${title.substring(0, 50)} Bookmark added`,
      ToastAndroid.TOP,
      ToastAndroid.CENTER,
      25,
      50
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title:"Details"
    })

  },[])
  return (
    <View className="flex-1 bg-white py-2">
      <ScrollView
        contentContainerStyle={{
          padding: 10,
        }}
        className="mx-2"
      >
        <Text className="text-lg text-black">{news.title}</Text>
        {news.image ? (
          <Image
          source={{ uri: news.image }}
          className="h-48 w-100 my-3"
        />
        )
          :
          (
        <Image
          source={{ uri: "https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg" }}
          className="h-48 w-100 my-3"
        />
          )
      }
        
        {/* <TouchableOpacity className="items-end mb-1"
          onPress={()=>addBookMarkItem()}
        >
          <Icons.BookmarkIcon size={22} color="#0077cc" />
        </TouchableOpacity> */}
        <Text>{news.description}</Text>
      </ScrollView>
    </View>
  )
}

export default BookMarkDetails