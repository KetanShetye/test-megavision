import { View, Text , StyleSheet} from 'react-native'
import Modal from 'react-native-modal';
import React from 'react'
import { moderateScale } from 'react-native-size-matters';

const ApplicantFilterModal = ({isVisible,closeModal}) => {
  return (
    <Modal 
    isVisible={isVisible}
    animationIn={'slideInUp'}
    animationInTiming={500}
    animationOut={'slideOutDown'}
    backdropOpacity={0.5}
    onBackdropPress={closeModal}
    animationOutTiming={2000}
    style={[{ justifyContent: 'flex-end', margin: 0, padding: 0 }]}>
        <View style={[styles.modalContainer]} >
                
        </View>
    </Modal>
  )
}

export default ApplicantFilterModal

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#FFFF',
        padding: moderateScale(16),
        height:'40%'
    },
})