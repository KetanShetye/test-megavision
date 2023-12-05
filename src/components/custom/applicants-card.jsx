import { View, Text, StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { moderateScale } from "react-native-size-matters";

const ApplicantsCard = ({onPress}) => {
  return (
    <Pressable style={{backgroundColor:'white',padding:moderateScale(16),elevation:moderateScale(5)}} onPress={onPress}>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.cardTextBulletPointStyle}>Application No. - </Text>
        <Text style={styles.cardTextStyle}>365</Text>
        </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.cardTextBulletPointStyle}>Application Date - </Text>
        <Text style={styles.cardTextStyle}>05/12/2023</Text>
        </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.cardTextBulletPointStyle}>Issue Date - </Text>
        <Text style={styles.cardTextStyle}>05/12/2023</Text>
        </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.cardTextBulletPointStyle}>Site Address - </Text>
        <Text style={[styles.cardTextStyle,{width:'70%'}]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa aut voluptatibus, ab optio esse distinctio ex quae in iure!</Text>
        </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.cardTextBulletPointStyle}>Owner - </Text>
        <Text style={styles.cardTextStyle}>Jacob</Text>
        </View>
    </Pressable>
  )
}

export default ApplicantsCard
const styles = StyleSheet.create({
    cardTextBulletPointStyle:{
        color:'black',
        fontWeight:'600',
        fontSize:moderateScale(15)
    },
    cardTextStyle:{
        color:'black',
        fontWeight:'400',
        fontSize:moderateScale(14),
        textAlign:'auto'
    }
})