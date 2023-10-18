import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { View, Text } from 'react-native';

export default Header = () => {
  
    return (
      <View style={styles.header}>
        <Text style={styles.title}> مدیریت کننده اشخاص </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    header : {
        height : 90 ,
        padding : 20 ,
        backgroundColor : 'orangered'
    },
    title : {
        textAlign : 'center',
        fontSize : 20,
        padding : 10,
        color : 'white',
        marginTop : 5,
        fontWeight : 'bold'
    }
})
