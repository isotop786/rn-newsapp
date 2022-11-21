/*eslint-disable*/
import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, SafeAreaView, } from 'react-native'
import NewsItem from './NewsItem'
import { news } from '../../localfile/news'
// import { fetchNews } from '../../Services'
import { NEWS_API,JSON_RESPONSE } from '../../Config'


const NewsContainer = () => {
    const [newsData, setNewsData] = useState();

    const fetchNews = async () => {
        var data = []
        const response = await fetch(JSON_RESPONSE)
        const { articles } = await response.json()
        // console.log(articles)
        articles.map(a => {
            let title = '';
            let description = '';
            let image = '';
            if (a.title)
            {
                title = a.title    
            } else {
                title='News Title Goes Here'
            }

            if (a.description)
            {
                description = a.description    
            } else {
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis odio id lacus aliquet convallis. Proin tortor massa, sodales ut massa ut, lobortis vulputate ante. Ut massa eros, elementum non porttitor eu, pulvinar et tellus. Nulla gravida nisl at sem vehicula, sit amet ullamcorper lacus gravida. Nunc sed massa cursus, tristique felis eu, consequat tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ultrices eros erat, eget pellentesque ex convallis ac. Vestibulum non vulputate augue, a rutrum nulla. Morbi pulvinar molestie lectus, eget placerat sapien consequat sit amet. Aenean imperdiet dapibus augue sit amet lacinia. Phasellus consectetur commodo risus at pulvinar. Proin elit libero, dictum at vulputate in, efficitur in purus. Proin consequat tellus in tempor iaculis. Vivamus non ligula tortor. Integer sed nulla at ante placerat interdum a ac erat. '
            }
            if (a.urlToImage)
            {
                image = a.urlToImage    
            } else {
                image='https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?'
            }
                
            data.push({title, description,image})
        })
        setNewsData(data)
        return data.join();
    }

    useEffect(() => {
        fetchNews()
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