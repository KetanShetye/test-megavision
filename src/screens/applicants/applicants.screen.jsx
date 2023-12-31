import React,{useState} from 'react';
import {
  View,
  Image,
  Pressable, 
  FlatList
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import ApplicantsCard from '../../components/custom/applicants-card';
import ApplicantFilterModal from '../../components/modals/applicant-filter-modal';
import ApplicantsModal from '../../components/modals/applicants-modal';
import { useNavigation } from '@react-navigation/native';
import { ApplicantsList } from '../../local-data/dummy-data';


const Applicants=()=>{
  const [filterVisible,setFilterVisible] = useState(false)
  const [applicantsFilter,setApplicantsFilter ] = useState(false)
  const navigation = useNavigation()
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'white',height:moderateScale(60),elevation:moderateScale(5),borderBottomLeftRadius:moderateScale(10),borderBottomRightRadius:moderateScale(10),overflow:'hidden'}}>
        <View style={{width:'100%',height:'100%',flexDirection:'row',columnGap:moderateScale(10),paddingLeft:moderateScale(10)}}>
          <View  style={{justifyContent:'center'}}>
            <Image source={require('../../../assets/images/profile-user.png')} style={{width:moderateScale(40),height:moderateScale(40)}}/>
          </View>
          <Pressable style={{justifyContent:'center'}} onPress={()=>setApplicantsFilter(true)}>
          <Image source={require('../../../assets/images/right-arrow.png')} style={{width:moderateScale(20),height:moderateScale(20)}}/>
          </Pressable>
        </View>
      </View>
      <FlatList 
      data={ApplicantsList}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{padding:moderateScale(16),rowGap:moderateScale(16)}}
      renderItem={({item})=>
      <ApplicantsCard 
      applicationId={item.application_id}
      applicationDate={item.application_date}
      IssueDate={item.issue_date}
      Owner={item.owner}
      SiteAddress={item.site_address}
      Application_Type={item.application_type}
      onPress={()=>navigation.navigate('ApplicantDetails')}/>
      }
      keyExtractor={item=>item.application_id}
      />
      <Pressable style={{position:'absolute',bottom:moderateScale(16),right:'50%',width:moderateScale(40),height:moderateScale(40),borderRadius:moderateScale(100)}} onPress={()=>setFilterVisible(true)}>
        <Image source={require('../../../assets/images/filter.png')} style={{width:'100%',height:'100%'}}/>
      </Pressable>
      <ApplicantsModal
      isVisible={applicantsFilter}
      closeModal={()=>setApplicantsFilter(false)}
      />
      <ApplicantFilterModal
      isVisible={filterVisible}
      closeModal={()=>setFilterVisible(false)}
      />
    </View>
  );
}



export default Applicants;
