import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Dimensions
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import BlueBorderBtn from '../../components/buttons/btn-blue-border';
import { useNavigation } from '@react-navigation/native';

const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const OnBoard=()=>{
    const navigation = useNavigation()
  return (
    <View style={{flex:1,backgroundColor:'#eee',justifyContent:'flex-end'}}>
      {/* <ImageBackground source={require('../../../assets/images/permit.png')} style={{width:WINDOW_WIDTH,height:WINDOW_HEIGHT}}> */}
        <View style={{height:'70%',rowGap:moderateScale(40),padding:moderateScale(20)}}>
      <View>
        <Text style={{fontWeight:'bold',color:'black',fontSize:moderateScale(40)}}>
            Welcome To {'\n'}AnyTown Online {'\n'}Permitting
        </Text>
      </View>
      <View style={{rowGap:moderateScale(10)}}>
        <View style={{width:'50%'}}>
        <BlueBorderBtn label='Home' onPress={()=>navigation.navigate('Applicants')}/>
        </View>
        <View>
        <BlueBorderBtn label='New Application' />
        </View>
      </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
}



export default OnBoard;
