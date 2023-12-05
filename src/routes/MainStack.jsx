import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Applicants from '../screens/applicants/applicants.screen';
import ApplicantDetails from '../screens/applicant-details/applicant-details.screen';
import OnBoard from '../screens/onboard/onboard.screen';

const Stack = createStackNavigator();


const MainStack=()=>{
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='OnBoard' component={OnBoard}/>
            <Stack.Screen name='Applicants' component={Applicants}/>
            <Stack.Screen name='ApplicantDetails' component={ApplicantDetails}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}



export default MainStack;
