import styled from 'styled-components/native'
import Colors from '../../constants/Colors'

export const ModalOverlay = styled.View({
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
})

export const ModalContent = styled.View({
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
})

export const ButtonsContainer = styled.View({
    alignSelf:'flex-end',
    flexDirection:'row',
    marginTop:10,
    paddingRight:9
})

export const CancleButton = styled.TouchableOpacity({
    backgroundColor:'transparent',
    marginRight:10
})

export const CancleButtonText = styled.Text({
    color:Colors.cancelButtonColor,
    fontSize:15,
    fontWeight:'bold'
})

export const UpdateButton = styled.TouchableOpacity({
    backgroundColor:'transparent',
})

export const UpdateButtonText = styled.Text({
    color:Colors.deleteButtonColor,
    fontSize:15,
    fontWeight:'bold'
})

