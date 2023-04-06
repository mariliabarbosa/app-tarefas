import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <View style={styles.content}>
                    <Text style={styles.itemTitle}>{props.title}</Text>
                    <Text style={styles.itemDescription}>{props.description}</Text>
                    <Text style={styles.itemDate}>{props.date}</Text>
                </View>  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    content:{
        maxWidth: '88%',
        maxHeight: 45
    },
    itemTitle: {
        fontWeight: 'bold'
    },
    itemDescription:{
        fontSize: 10,
        color: '#a6a6a6'
    },
    itemDate: {
        fontSize: 10,
        color: '#558CF6'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#558CF6',
        borderWidth: 2,
        borderRadius: 5
    },
    square: {
        width: 30,
        height: 30,
        backgroundColor: '#558CF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    }
})

export default Task;