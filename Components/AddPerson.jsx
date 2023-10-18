import { StyleSheet, View ,TextInput } from 'react-native'
import React from 'react'
import {Button} from 'react-native'

export default function AddPerson({submitHandler , setPerson , person}) {
  return (
    <View>
      <TextInput
        style= {styles.input}
        placeholder='اسم جدید...'
        placeholderTextColor= 'darkgrey'
        onChangeText={setPerson}
        value={person}
      />
    <Button 
        onPress={submitHandler}
        title='اضافه کردن شخص جدید'
        color='orange'
    />
    </View>
  )
}

const styles = StyleSheet.create({
    input : {
        marginBottom : 10, 
        paddingHorizontal : 8,
        paddingVertical : 6,
        borderBottomWidth : 1,
        borderBottomColor : 'orange' ,
        fontSize : 15,
    }
})