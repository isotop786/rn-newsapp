/*eslint-disable*/
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoryItem = ({title}) => {
    const navigation = useNavigation()
  return (
      <TouchableOpacity
          style={{paddingHorizontal:10, paddingVertical:5,flex:1}}
      >
          <Text className="text-black font-normal text-base">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({})