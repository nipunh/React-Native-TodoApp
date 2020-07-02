import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
export function Todoitems({item, onPressHandler}){
    return( 
      <TouchableOpacity >
        <View style={styles.listItem} >
            <MaterialIcons style={styles.deleteIcon} name="delete" size={20} onPress={()=>{onPressHandler(item.key)}} color="#333" />
            <Text>{item.text}</Text>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
      listItem :{
        flex :1,
        backgroundColor : '#ffbca4',
        padding : 20,
        margin : 10,
        borderRadius : 10,
        flexDirection : 'row'
      },
      deleteIcon :{
        marginRight : 10
      }
})