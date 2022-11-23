import { StyleSheet, Text, View, TextInput } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import SerachComponent from '../../Component/SerachComponent'

const SearchScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Search News",
            headerStyle: {
                backgroundColor:"#4477dd"
            },
            headerTintColor:"#fff"
        })
    },[])
  return (
    <View className="pt-5 mx-2 ">
       <SerachComponent/>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})