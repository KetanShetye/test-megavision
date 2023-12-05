import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale } from "react-native-size-matters";

const BlueBorderBtn = ({ label,onPress }) => {
    return (
        <Pressable style={styles.btnStyle} onPress={onPress}>
            <Text style={styles.btnTextStyle}>{label}</Text>
        </Pressable>
    )
}

export default BlueBorderBtn

const styles = StyleSheet.create({
    btnStyle: { width: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderColor: 'black', borderWidth: moderateScale(1), borderRadius: moderateScale(15), padding: moderateScale(10) },
    btnTextStyle: { textTransform: 'uppercase', color: 'black', fontWeight: '500',fontSize:moderateScale(15) }
})