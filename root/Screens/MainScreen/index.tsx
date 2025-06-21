import React from 'react'
import {
  FlatList,
  Modal
} from 'react-native'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CustomModal from '../../../components/CustomModal'
import Input from '../../../components/Input'
import useItemManager from '../../../hooks/useItemManager'
import {
  CardContainer,
  RootContainer
} from './Styles'

const MainScreen: React.FC = () => {

   const {
    items,
    item,
    modalVisible,
    updateItem,
    updateIndex,
    setItem,
    setUpdateItem,
    onPress,
    handleDeleteItem,
    handleEditItem,
    handleUpdateItem,
    hideModal,
  } = useItemManager(['Ladder', 'Chair']);

  return (
    <>
    <Modal
       visible={modalVisible}
       transparent={true}
       animationType='slide'
       onRequestClose={()=>hideModal()}>
        <CustomModal
        item={updateItem}
        index={updateIndex}
        onChangeText={text=>setUpdateItem(text)}
        hideModal={hideModal}
        updateItem={handleUpdateItem}/>
       </Modal>
    <RootContainer>
      <Input
       placeholder='Enter Item...'
       onChangeText={text => setItem(text)}
       value={item}/>
      <Button
      onPress={onPress}
      title='Add'/>
      <CardContainer>
        <FlatList
          data={items}
          renderItem={({ item, index })=>(
           <Card
           key={index}
           item={item}
           index={index}
           deleteItem={handleDeleteItem}
           editItem={handleEditItem}/>
            
          )}
          keyExtractor={(_,index)=>index.toString()}
          keyboardShouldPersistTaps="handled"
          />
      </CardContainer>
    </RootContainer>
    </>
  )
}

export default MainScreen