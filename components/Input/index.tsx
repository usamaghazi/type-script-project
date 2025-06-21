import React from 'react';
import { InputText } from './styles';

type InputProps = {
  placeholder:string;
  onChangeText:(text:string)=>void;
  value:string
}
const Input: React.FC<InputProps> = ({
  placeholder,
  onChangeText,
  value
}) => {
  return (
    <InputText
    placeholder={placeholder}
    placeholderTextColor='#d1d0d0'
    onChangeText={onChangeText}
    value={value}/>
  )
}

export default Input