/*eslint-disable*/
import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, SafeAreaView, } from 'react-native'
import NewsItem from './NewsItem'
import { news } from '../../localfile/news'

const NewsContainer = () => {
  return (
    <ScrollView className="px-2">
          {news.map((newsItem,index) => (      
              <NewsItem key={index} news={newsItem} />
        ))}      
     
    </ScrollView>
  )
}

export default NewsContainer