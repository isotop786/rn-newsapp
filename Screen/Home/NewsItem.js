/*eslint-disable*/
import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NewsItem = ({news}) => {
    const {navigate} = useNavigation()
  return (
      <TouchableOpacity className="flex-1 my-2 p-2 bg-white flex-row rounded"
          onPress={() => navigate('NewsDetails', {
            news
        })}
      >
          <View className="flex-1 mr-1">
              <Text className="font-bold text-black"
                style={{fontSize:16}}
              >{news.title.substring(0,25)+"..."}</Text>
              <Text>{news.description.substring(0, 70)+"..."}</Text>
          </View>  
          <View className="flex-1">
              <Image
                  source={{ uri: news.image }}
                  className="h-28 w-52 rounded-sm"
                  resizeMode='contain'
              />
          </View>  
    </TouchableOpacity>
  )
}

export default NewsItem