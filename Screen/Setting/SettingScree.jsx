import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useLayoutEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'

const SettingScree = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "App Setting",
            headerStyle: {
                backgroundColor:"#4477cc"
            },
            headerTintColor:"#fff"
        })
    },[])
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{color:"#111"}}>Setting screen under construction</Text>
    </View>
  )
}

export default SettingScree

const styles = StyleSheet.create({})