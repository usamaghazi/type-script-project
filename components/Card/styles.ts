import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

export const CardContainter = styled.View({
    width:320,
    // margin:10,
    marginTop:10,
    marginBottom:5,
    marginLeft:8,
    marginRight:8,
    paddingLeft:15,
    paddingRight:17,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor: Colors.cardBackgroundColor,
    borderColor: Colors.borderColor,
     borderWidth: 0, // Remove border for cleaner look with shadow
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    flexDirection:'row',
    justifyContent:'space-between'  
})

export const CardItem = styled.Text({
    color: Colors.cardItemTextColor,
    fontSize:16,
    fontWeight:'bold'
})

export const IconsContainer = styled.View({
    flexDirection:'row',
    alignItems:'center'
})

export const CardEditIcon = styled(Feather).attrs({
    size:16,
    color:Colors.iconEditColor
})({
    marginRight:10
})as any

export const CardDeleteIcon = styled(Feather).attrs({
    size:16,
    color:Colors.iconDeleteColor
})`` as any
