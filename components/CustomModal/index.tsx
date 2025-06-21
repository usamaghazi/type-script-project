import React from 'react';
import Input from '../Input';
import {
  ButtonsContainer,
  CancleButton,
  CancleButtonText,
  ModalContent,
  ModalOverlay,
  UpdateButton,
  UpdateButtonText
} from './styles';

type CustomModalProps = {
  item:string;
  index:number | null;
  onChangeText: (text:string) => void;
  hideModal: () => void;
  updateItem: (index:number | null) =>void
}

const CustomModal:React.FC<CustomModalProps> = ({
  item,
  index,
  onChangeText,
  hideModal,
  updateItem
}) => {
  return (
    <ModalOverlay>
        <ModalContent>
          <Input
          placeholder='Enter Item...'
          onChangeText={onChangeText}
          value={item}/>

          <ButtonsContainer>

            <CancleButton onPress={hideModal}>
              <CancleButtonText >
                Cancel
              </CancleButtonText>
            </CancleButton>

            <UpdateButton onPress={()=>updateItem(index)}>
              <UpdateButtonText>
                Update
              </UpdateButtonText>
            </UpdateButton>
          </ButtonsContainer>    
        </ModalContent>
    </ModalOverlay>
  )
}

export default CustomModal