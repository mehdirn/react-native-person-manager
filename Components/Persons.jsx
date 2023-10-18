import React, { Component } from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import { View, Text } from 'react-native';

export default Persons = ({persons , pressHandler}) => {
  
    return (
      <TouchableOpacity onPress={() => pressHandler(persons.key)}>
        <Text style={styles.person}>{persons.name}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    person : {
        textAlign : 'center' , 
        fontWeight : 'bold',
        marginTop : 10 ,
        marginBottom : 10 ,
        fontSize : 30,
        borderWidth : 1 ,
        borderRadius : 20 , 
        borderStyle : 'dashed',
        paddingTop : 15 , 
        paddingBottom : 15
    }
})
