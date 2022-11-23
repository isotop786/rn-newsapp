import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/outline";

const SerachComponent = () => {
  return (
        <View className="flex-row items-center space-x-2 pb-2 mx-3">
        <View className="flex-1 flex-row mr-0 bg-gray-200 px-2 rounded-sm">
            <TextInput
                placeholder='Search news, sports, finance'
                keyboardType='default'
                style={{paddingHorizontal:5}}
            />
        </View>
        <TouchableOpacity style={{backgroundColor:"#4477cc"}} className="p-3"
        onPress={()=>{
                   
                }}
        >
          <Icons.MagnifyingGlassIcon size={22} color="white"/>
        </TouchableOpacity>
      </View>
  )
}

export default SerachComponent