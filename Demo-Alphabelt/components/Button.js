import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import COLORS from '../constants/colors'

const Button = (props) => {
    const textColor = props.filled ? COLORS.white : COLORS.primary;

    return(
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{backgroundColor: '#fff'},
                ...props.style
            }}
            onPress={props.onPress}
        >
            <Text style={{fontSize: 18, fontWeight: 600, ...{color: textColor}}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingTop: 16,
        paddingBottom: 16,
        borderColor: COLORS.white,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default Button;
