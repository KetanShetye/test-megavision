import React,{useState} from 'react';
import {
  Text,
  View,Pressable,Image,ScrollView
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import PaymentModal from '../../components/modals/payment-modal';


const ApplicantDetails=()=>{
  const [isPay,setIsPay] = useState(false)
  const [showPaymentsModal,setShowPaymentsModal] = useState(false)
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'white',height:moderateScale(70),elevation:moderateScale(5),borderBottomLeftRadius:moderateScale(10),borderBottomRightRadius:moderateScale(10),overflow:'hidden'}}>
        <View style={{width:'100%',height:'100%',flexDirection:'row',columnGap:moderateScale(10),padding:moderateScale(10),justifyContent:'space-between'}}>
          <View style={{justifyContent:'center',marginVertical:moderateScale(5)}}>
            <Text style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:moderateScale(15)}}>465</Text>
            <Text style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:moderateScale(15)}}>Residential Building</Text>
          </View>
          <View style={{height:'100%',borderWidth:moderateScale(1.5),borderStyle:'dashed',marginVertical:moderateScale(5)}}></View>
          <View style={{justifyContent:'center',marginVertical:moderateScale(5)}}>
            <Text style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:moderateScale(15)}}>Jacob</Text>
            <Text style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:moderateScale(15)}}>Los Angeles</Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding:moderateScale(16),rowGap:moderateScale(16)}}>
      <View style={{backgroundColor:'white',borderRadius:moderateScale(10)}}>
          <View style={{justifyContent:'space-between',flexDirection:'row',padding:moderateScale(16)}}>
            <View style={{flexDirection:'row',columnGap:moderateScale(5)}}>
              <View style={{justifyContent:'center'}}><Image source={require('../../../assets/images/payments.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/></View>
              <View style={{justifyContent:'center'}}><Text style={{color:'black',fontSize:moderateScale(18),fontWeight:'bold'}}>Sign Off</Text></View>
            </View>
            <Pressable >
              <Image source={require('../../../assets/images/down.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/>
            </Pressable>
          </View>
        </View>
        <View style={{backgroundColor:'white',borderRadius:moderateScale(10)}}>
          <View style={{justifyContent:'space-between',flexDirection:'row',padding:moderateScale(16)}}>
            <View style={{flexDirection:'row',columnGap:moderateScale(5)}}>
              <View style={{justifyContent:'center'}}><Image source={require('../../../assets/images/payments.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/></View>
              <View style={{justifyContent:'center'}}><Text style={{color:'black',fontSize:moderateScale(18),fontWeight:'bold'}}>CheckList</Text></View>
            </View>
            <Pressable >
              <Image source={require('../../../assets/images/down.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/>
            </Pressable>
          </View>
        </View>
        
        <View style={{backgroundColor:'white',borderRadius:moderateScale(10)}}>
          <View style={{justifyContent:'space-between',flexDirection:'row',padding:moderateScale(16)}}>
            <View style={{flexDirection:'row',columnGap:moderateScale(5)}}>
              <View style={{justifyContent:'center'}}><Image source={require('../../../assets/images/payments.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/></View>
              <View style={{justifyContent:'center'}}><Text style={{color:'black',fontSize:moderateScale(18),fontWeight:'bold'}}>Pay Fee</Text></View>
            </View>
            <Pressable onPress={()=>setIsPay(!isPay)}>
              <Image source={isPay ? require('../../../assets/images/up-arrow.png') : require('../../../assets/images/down.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/>
            </Pressable>
          </View>
          {
            isPay ?
            <View style={{padding:moderateScale(16),flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',columnGap:moderateScale(5)}}>
                <View style={{justifyContent:'center'}}><Text style={{color:'black',fontWeight:'bold',fontSize:moderateScale(14)}}>Amount Payable</Text></View>
                <View style={{justifyContent:'center'}}><Text style={{color:'black',fontSize:moderateScale(14)}}>$2</Text></View>
              </View>
              <Pressable style={{backgroundColor:'aqua',borderRadius:moderateScale(10),padding:moderateScale(5),justifyContent:'center',alignItems:'center'}} onPress={()=>setShowPaymentsModal(true)}>
                <Text style={{fontSize:moderateScale(14),color:'black',fontWeight:'bold'}}>Pay Now</Text>
              </Pressable>
            </View> : null
          }
        </View>
        <View style={{backgroundColor:'white',borderRadius:moderateScale(10)}}>
          <View style={{justifyContent:'space-between',flexDirection:'row',padding:moderateScale(16)}}>
            <View style={{flexDirection:'row',columnGap:moderateScale(5)}}>
              <View style={{justifyContent:'center'}}><Image source={require('../../../assets/images/payments.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/></View>
              <View style={{justifyContent:'center'}}><Text style={{color:'black',fontSize:moderateScale(18),fontWeight:'bold'}}>Issue Permit</Text></View>
            </View>
            <Pressable >
              <Image source={require('../../../assets/images/down.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/>
            </Pressable>
          </View>
        </View>
        <View style={{backgroundColor:'white',borderRadius:moderateScale(10)}}>
          <View style={{justifyContent:'space-between',flexDirection:'row',padding:moderateScale(16)}}>
            <View style={{flexDirection:'row',columnGap:moderateScale(5)}}>
              <View style={{justifyContent:'center'}}><Image source={require('../../../assets/images/payments.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/></View>
              <View style={{justifyContent:'center'}}><Text style={{color:'black',fontSize:moderateScale(18),fontWeight:'bold'}}>Schedule Inspection</Text></View>
            </View>
            <Pressable >
              <Image source={require('../../../assets/images/down.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/>
            </Pressable>
          </View>
        </View>
        <View style={{backgroundColor:'white',borderRadius:moderateScale(10)}}>
          <View style={{justifyContent:'space-between',flexDirection:'row',padding:moderateScale(16)}}>
            <View style={{flexDirection:'row',columnGap:moderateScale(5)}}>
              <View style={{justifyContent:'center'}}><Image source={require('../../../assets/images/payments.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/></View>
              <View style={{justifyContent:'center'}}><Text style={{color:'black',fontSize:moderateScale(18),fontWeight:'bold'}}>Inspection</Text></View>
            </View>
            <Pressable >
              <Image source={require('../../../assets/images/down.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/>
            </Pressable>
          </View>
        </View>
        <View style={{backgroundColor:'white',borderRadius:moderateScale(10)}}>
          <View style={{justifyContent:'space-between',flexDirection:'row',padding:moderateScale(16)}}>
            <View style={{flexDirection:'row',columnGap:moderateScale(5)}}>
              <View style={{justifyContent:'center'}}><Image source={require('../../../assets/images/payments.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/></View>
              <View style={{justifyContent:'center'}}><Text style={{color:'black',fontSize:moderateScale(18),fontWeight:'bold'}}>Board Of Healtth</Text></View>
            </View>
            <Pressable >
              <Image source={require('../../../assets/images/down.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/>
            </Pressable>
          </View>
        </View>
        <View style={{backgroundColor:'white',borderRadius:moderateScale(10)}}>
          <View style={{justifyContent:'space-between',flexDirection:'row',padding:moderateScale(16)}}>
            <View style={{flexDirection:'row',columnGap:moderateScale(5)}}>
              <View style={{justifyContent:'center'}}><Image source={require('../../../assets/images/payments.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/></View>
              <View style={{justifyContent:'center'}}><Text style={{color:'black',fontSize:moderateScale(18),fontWeight:'bold'}}>Inspection</Text></View>
            </View>
            <Pressable >
              <Image source={require('../../../assets/images/down.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/>
            </Pressable>
          </View>
        </View>
        <View style={{backgroundColor:'white',borderRadius:moderateScale(10)}}>
          <View style={{justifyContent:'space-between',flexDirection:'row',padding:moderateScale(16)}}>
            <View style={{flexDirection:'row',columnGap:moderateScale(5)}}>
              <View style={{justifyContent:'center'}}><Image source={require('../../../assets/images/payments.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/></View>
              <View style={{justifyContent:'center'}}><Text style={{color:'black',fontSize:moderateScale(18),fontWeight:'bold'}}>Town Manager</Text></View>
            </View>
            <Pressable >
              <Image source={require('../../../assets/images/down.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/>
            </Pressable>
          </View>
        </View>
        <View style={{backgroundColor:'white',borderRadius:moderateScale(10)}}>
          <View style={{justifyContent:'space-between',flexDirection:'row',padding:moderateScale(16)}}>
            <View style={{flexDirection:'row',columnGap:moderateScale(5)}}>
              <View style={{justifyContent:'center'}}><Image source={require('../../../assets/images/payments.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/></View>
              <View style={{justifyContent:'center'}}><Text style={{color:'black',fontSize:moderateScale(18),fontWeight:'bold'}}>Board Of Healtth</Text></View>
            </View>
            <Pressable >
              <Image source={require('../../../assets/images/down.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <PaymentModal
      isVisible={showPaymentsModal}
      closeModal={()=>setShowPaymentsModal(false)}
      />
    </View>
  );
}



export default ApplicantDetails;
