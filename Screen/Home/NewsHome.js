/*eslint-disable */
import React, {useState, useEffect,useLayoutEffect} from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Category from './Category'
import NewsContainer from './NewsContainer'

const NewsHome = () => {
    const  navigation  = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "News",
            headerStyle: {
                backgroundColor: "#0099ee",
            },
            headerTintColor: '#fff',
        })
    },[])


  return (
      <View className="flex-1">
          <Category/>
          <NewsContainer/>
    </View>
  )
}

export default NewsHome