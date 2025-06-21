import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  CardContainter,
  CardDeleteIcon,
  CardEditIcon,
  CardItem,
  IconsContainer
} from './styles';

type CardProps = {
  item:string;
  index:number;
  deleteItem:(index:number)=> void;
  editItem:(item:string,index:number) => void
}

const Card: React.FC <CardProps> = ({
  item,
  index,
  deleteItem,
  editItem
}) => {
  return (
    <CardContainter>

      <CardItem>{item}</CardItem>
      <IconsContainer>
        <TouchableOpacity
        onPress={()=>editItem(item,index)}>
        <CardEditIcon name="edit-2"/>
        </TouchableOpacity>
         
        <TouchableOpacity onPress={()=>deleteItem(index)}>
          <CardDeleteIcon name="trash-2"/>
        </TouchableOpacity>
      </IconsContainer>

    </CardContainter>
  )
}

export default Card