import styled from 'styled-components/native'
import Colors from '../../constants/Colors'

export const InputText = styled.TextInput({
    borderWidth:1,
    borderColor: Colors.borderColor,
    paddingLeft:10,
    paddingRight:5,
    paddingTop: 9,
    paddingBottom: 9,
    margin: 7,
    borderRadius:5,
    // width:300,
    backgroundColor:Colors.inputBackgroundColor
})