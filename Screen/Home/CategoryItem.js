/*eslint-disable*/
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch,useSelector } from 'react-redux'
import { setCategory } from '../../redux/actions/categoryActions'
import { setSource } from '../../redux/actions/sourceAction'



const CategoryItem = ({title,category,source, onCateClick}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const currentCate = useSelector(state => state.category.current_category)
  const currentSource = useSelector(state => state.source.current_source)

  console.log("current category: "+currentCate)
  console.log("current source: "+currentSource)
  return (
      <TouchableOpacity
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        flex: 1,
      }}
      onPress={() => {
        dispatch(setCategory(category))
        dispatch(setSource(source))
        
      }}
      >
      <Text className="text-black font-normal text-base"
        style={currentCate == category ? styles.borderBottom : null}
        onPress={onCateClick}
      >{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomWidth: 3,
    borderBottomColor:'#0099ee'
  }
})