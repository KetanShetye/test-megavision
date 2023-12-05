import { View, Text , StyleSheet} from 'react-native'
import Modal from 'react-native-modal';
import React from 'react'
import { moderateScale } from 'react-native-size-matters';

const ApplicantsModal = ({isVisible,closeModal}) => {
  return (
    <Modal 
    isVisible={isVisible}
    animationIn={'slideInLeft'}
    animationInTiming={500}
    animationOut={'slideOutLeft'}
    backdropOpacity={0.5}
    onBackdropPress={closeModal}
    animationOutTiming={1000}
    style={[{ justifyContent: 'flex-end', margin: 0, padding: 0 }]}>
        <View style={[styles.modalContainer]} >
                
        </View>
    </Modal>
  )
}

export default ApplicantsModal

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#FFFF',
        borderTopLeftRadius: moderateScale(4),
        borderTopRightRadius: moderateScale(4),
        padding: moderateScale(16),
        height:'100%',
        width:'60%'
    },
    lableStyle: { alignItems: 'center', columnGap: 15 }
})