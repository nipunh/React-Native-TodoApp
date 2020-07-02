import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {Header} from './components/header'
import { Todoitems } from './components/TodoItems';
import { AddTodo } from './components/form';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

 
  const onPressHandler = (id) =>{
    setTodos(todos.filter((todo)=>{
      return todo.key != id
    }))
  }

  const onSubmit = (text) => {
    if(text.length > 3){
    setTodos([...todos, {text : text , key : Math.random().toString()}]);
  }
  else{
    Alert.alert('OOPS!','Todo should be more than 3 characters.',[
      {text : 'Close', onPress :()=> {console.log('Close Alert')}}
    ])
  }
}


  return (
   <TouchableWithoutFeedback onPress={()=>{
     Keyboard.dismiss();
   }}>
    <View style={styles.container}>
    <Header />
    <AddTodo onSubmit={onSubmit} />
      <View style = {styles.listContainer}>
        <FlatList 
          data = {todos}
          renderItem={({item}) => (
           <Todoitems item = {item} onPressHandler ={onPressHandler} />
          )}
          />
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  listContainer: {
    flex :1 ,
    margin : 20
  },

});
