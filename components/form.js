import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export function AddTodo({onSubmit}){

    const[text, setText] = useState('');

    const changeHandler = (val) =>{
        setText(val);
    }

    return(
        <View style={styles.formContainer}>
                <TextInput 
                placeholder = 'Type here...'
                style={styles.textInput} 
                onChangeText={(val) => changeHandler(val)}>  
                </TextInput>
            
            <View style={styles.formButton}>
                <Button title='Add' onPress={()=>onSubmit(text)} color='coral' />
            </View>
        </View>    
    )
}

const styles = StyleSheet.create({
  formContainer:{
    margin : 20, 
  },
  textInput : {
    width : 350,
    padding : 10,
    margin : 10,
    borderBottomWidth : 1,
    borderBottomColor : '#ddd'
  },
  formButton : {
    width : 350,
    padding : 10,
    margin : 10,
  },
})

