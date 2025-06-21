import React from 'react'

import { ButtonText, SubmitButton } from './styles'

interface ButtonProps {
  onPress:() => void,
  title:string
}
const Button: React.FC<ButtonProps> = ({
  onPress,
  title
}) => {
  return (
    <SubmitButton
    onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </SubmitButton>
  )
}

export default Button