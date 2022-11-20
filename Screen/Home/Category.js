/*eslint-disable*/
import React,{useState,useEffect} from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import CategoryItem from './CategoryItem'

const Category = ({navigation}) => {
    return (
    <SafeAreaView
        style={{ backgroundColor:"#fff",borderBottomColor: "#ddd", borderBottomWidth: 1, }}
    >
    <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingVertical:10
          }}
          
        >
     <CategoryItem title="Latest News" />
     <CategoryItem title="World" />
     <CategoryItem title="Business"/>
     <CategoryItem title="Health"/>
     <CategoryItem title="Entertainment"/>
     <CategoryItem title="Sport" />
    </ScrollView>
    </SafeAreaView>        

  )
}

export default Category