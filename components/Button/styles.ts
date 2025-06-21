import styled from 'styled-components/native'
import Colors from '../../constants/Colors'

export const SubmitButton = styled.TouchableOpacity({
    width : 110,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:Colors.buttonBackgroundColor,
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: '0.25px',
    shadowRadius: 3.84,
    elevation: '5px',
    alignSelf:'center'
})

export const ButtonText = styled.Text({
    color: Colors.buttonTextColor,
    fontSize: 12,
    fontWeight:'bold',
    alignSelf:'center'
    
})