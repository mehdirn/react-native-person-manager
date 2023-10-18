import React, { useState } from 'react'
import { 
  View , FlatList , Keyboard , Alert ,
  TouchableWithoutFeedback ,
  StyleSheet
 } from 'react-native'
import Header from './Components/Header'
import Persons from './Components/Persons'
import AddPerson from './Components/AddPerson'

App = () => {

  const [persons , setPersons] = useState ([
    { name : 'مهدی' , key : '1' },
    { name : 'دریس' , key : '2' },
    { name : 'رضا' , key : '3' },
    { name : 'جعفر' , key : '4' },
    { name : 'احمدی' , key : '5' },
  ])

  const [person , setPerson] = useState('')


  const pressHandler = (key) => {
    setPersons(prev => prev.filter( p => p.key !== key))
  }

  const submitHandler = () => {
    if (person.length >= 3) {
      setPersons(prev => [
        ...prev ,
        {
          name : person,
          key : Math.floor(Math.random() * 100).toString()
        }
      ])
      setPerson('')
      Keyboard.dismiss()
    } else {
      Alert.alert('منو ببین !!' , 'اسم نباید  کمتر از 3 کاراکتر باشد', [{
        text : 'فهمیدم',
        onPress : () => console.log('alert close')
      }] )
    }
  }


    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        {/* header */}
        <Header/>
        <View style={styles.body}>
          {/* Add person */}
          <AddPerson submitHandler={submitHandler} setPerson={setPerson}
            person={person}
          />
          <View style = {styles.items}>
            <FlatList
              data = {persons}
              renderItem={
                ({item}) => (
                  <Persons persons={item} pressHandler={pressHandler}/>
                )
              }
             />
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    backgroundColor : '#fff' , 
  },
  body : {
    padding : 40 ,
  },
  items : {
    marginTop : 20 ,
  }
})