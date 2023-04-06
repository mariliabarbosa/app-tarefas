import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Button = (props) => {
    var [ isPress, setIsPress ] = React.useState(false);

    var touchProps = {
        activeOpacity: 1,
        underlayColor: '#3659c9',
        style: isPress ? styles.btnPress : styles.btnNormal,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => '',
    }
    return (
        <TouchableHighlight {...touchProps} onPress={props.onPress}>
            <View>
                <Text style={styles.buttonText}>{props.title}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btnNormal: {
        marginTop: 20,
        padding: 15,
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#558CF6',
    },
    btnPress: {
        marginTop: 20,
        padding: 15,
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#3659c9',
    },
    buttonText:{
        color: '#fff'
    }
})

export default Button;