import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

const Input = (props) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{props.label}</Text>
            <TextInput
                multiline={props.multiline}
                numberOfLines={2}
                style={styles.input}
                onChangeText={props.onChangeText}
                placeholder= {props.placeholder}
            />    
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginBottom: 10
    },
    input:{
        backgroundColor: '#fff',
        height: 60,
        padding: 15,
        borderRadius: 10,
        fontSize: 15,
    },
    inputLabel:{
        fontWeight: 500,
        textTransform: 'uppercase',
        paddingBottom: 5
    }
})

export default Input;