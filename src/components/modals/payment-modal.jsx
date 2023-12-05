import { View, Text , StyleSheet} from 'react-native'
import Modal from 'react-native-modal';
import React from 'react'
import { moderateScale } from 'react-native-size-matters';

const PaymentModal = ({isVisible,closeModal}) => {
  return (
    <Modal 
    isVisible={isVisible}
    animationIn={'slideInUp'}
    animationInTiming={500}
    animationOut={'slideOutDown'}
    backdropOpacity={0.5}
    onBackdropPress={closeModal}
    animationOutTiming={1000}
    style={[{ justifyContent: 'flex-end', margin: 0, padding: 0 }]}>
        <View style={[styles.modalContainer]} >
                
        </View>
    </Modal>
  )
}

export default PaymentModal

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#FFFF',
        borderTopLeftRadius: moderateScale(4),
        borderTopRightRadius: moderateScale(4),
        padding: moderateScale(16),
        height:'70%',
        width:'100%'
    },
    lableStyle: { alignItems: 'center', columnGap: 15 }
})