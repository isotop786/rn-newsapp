/*eslint-disable*/
import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, SafeAreaView, } from 'react-native'
import NewsItem from './NewsItem'
import { news } from '../../localfile/news'
// import { fetchNews } from '../../Services'
import { NEWS_API } from '../../Config'


const NewsContainer = () => {
    const [newsData, setNewsData] = useState();

    const fetchNews = async () => {
        const response = await fetch(NEWS_API)
        const { data } = await response.json()
        setNewsData(data)
    }

    useEffect(() => {

        fetchNews()
        // console.log(fetchNews());
    },[])

  return (
    <ScrollView className="px-2">
          {newsData?.map((newsItem,index) => (      
              <NewsItem key={index} news={newsItem} />
        ))}      
     
    </ScrollView>
  )
}

export default NewsContainer