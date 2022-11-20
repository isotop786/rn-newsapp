/*eslint-disable*/
import React, {useEffect,useState,useLayoutEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const NewsDetails = ({ route,navigation}) => {
  // console.log(route.params.news);
  const news = route.params.news;

  useLayoutEffect(() => {
    navigation.setOptions({
      title:"Details"
    })

  },[])
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{
          padding: 10,
        }}
        className="mx-2"
      >
        <Text className="text-lg text-black">{news.title}</Text>
        <Image
          source={{ uri: news.image }}
          className="h-48 w-100 my-3"
        />
        <Text className="">{news.description}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewsDetails