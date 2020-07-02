import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>My Todo Application</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        height :80,
        paddingTop: 40,
        backgroundColor : 'coral'
    },
    headerText : {  
        color : '#fff',
        marginLeft : 10,
        fontWeight : "bold",
        fontSize : 20
    }
})