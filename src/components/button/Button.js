import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ratios from '../../styles/ratios';
let {
  widthPixel,
  heightPixel,
  fontPixel
} = ratios;

const Button = (props) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.button, {fontSize:props.fontSize}]}>{props.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FCA311",
        borderWidth: 1,
        borderColor: "#FCA311",
        width: 255,
        height: 51,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        color:"#FFFFFF",
        fontFamily: "AlegreyaSans-Medium",
        // fontSize:fontPixel(25), // pass this through props
        
    }
})
export default Button;