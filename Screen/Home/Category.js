/*eslint-disable*/
import React,{useState,useEffect} from 'react'
import { View, Text, ScrollView, SafeAreaView ,RefreshControl} from 'react-native'
import CategoryItem from './CategoryItem'
import { JSON_RESPONSE,BUSINESS_NEWS,ENTERTAINMENT_NEWS,HEALTH_NEWS, SCIENCE_NEWS,SPORT_NEWS,TECH_NEWS } from '../../Config'

const Category = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
   const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);


    return (
    <View
        style={{ backgroundColor:"#fff",borderBottomColor: "#ddd", borderBottomWidth: 1, }}
    >
    <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingVertical:10
          }}

        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        
        >
    <CategoryItem title="Latest News" category="Latest" source={JSON_RESPONSE}/>
    <CategoryItem title="Business" category="Business" source={BUSINESS_NEWS}/>
    <CategoryItem title="Tech" category="Tech" source={TECH_NEWS}/>     
    <CategoryItem title="Health" category="Helth" source={HEALTH_NEWS}/>
    <CategoryItem title="Entertainment" category="Entertainment" source={ENTERTAINMENT_NEWS}/>
    <CategoryItem title="Sport" category="Sport" source={SPORT_NEWS} />
    </ScrollView>
    </View>        

  )
}

export default Category