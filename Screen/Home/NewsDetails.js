/*eslint-disable*/
import React, {useEffect,useState,useLayoutEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView,Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Icons from "react-native-heroicons/outline";


const NewsDetails = ({ route,navigation}) => {
  // console.log(route.params.news);
  const news = route.params.news;

  useLayoutEffect(() => {
    navigation.setOptions({
      title:"Details"
    })

  },[])
  return (
    <SafeAreaView className="flex-1 bg-white py-2">
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
        
        <TouchableOpacity className="items-end mb-1">
          <Icons.BookmarkIcon size={22} color="#0077cc"/>
        </TouchableOpacity>
        <Text className="">{news.description}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewsDetails