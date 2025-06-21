import React, { useState } from 'react'
import { Alert, FlatList, Modal } from 'react-native'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CustomModal from '../../../components/CustomModal'
import Input from '../../../components/Input'
import {
  CardContainer,
  RootContainer
} from './Styles'

const MainScreen: React.FC = () => {
  const [items, setItems] = useState<string[]>(['Ladder','Chair'])
  const [item, setItem] = useState<string>('')
  const [modalvisible, setModalVisible] = useState<boolean>(false)
  const [updateItem, setUpdateItem] = useState<string>('')
  const [updateIndex, setUpdateIndex] = useState<number | null>(null)

  const onPress = (): void => {
      if(item.trim()===""){
        alert('Please enter Item')
      }
      else{
        setItems(preStat =>[...preStat,item])
        setItem('')
      }
  }

  const deletingItem =(i:number): void => {
      const filterItems = items.filter((item,index)=>{
        return index !== i
      })
      setItems(filterItems)
  }

  const handleDeleteItem = (i:number) => {
    Alert.alert(
      'Delete Item',
      `Are you sure You Want to Delete ${items[i]}?`,
      [
        {
          text: 'Cancel',
          style:'cancel'
        },
        {
          text: 'Delete',
          style:'destructive',
          onPress: () => deletingItem(i)
        }
      ]
    )
  }

  const hideModal = (): void => {
      setModalVisible(false)
  }

  const handleUpdateItem = (index: number|null): void => {
     if(index === null){
      alert('Item cannot Change')
     }
     else{
          if(updateItem.trim() === ''){
            alert('Please Enter Item')
          }
          else{
            const newItems = [...items]
          newItems[index] = updateItem
          setItems(newItems)

          setModalVisible(false)
          setUpdateItem('')
          setUpdateIndex(null)
          }
          
     }
  }

  const handleEditItem = (item:string,i:number) => {
    setModalVisible(true)
    setUpdateItem(item)
    setUpdateIndex(i)
  }

  return (
    <>
    <Modal
       visible={modalvisible}
       transparent={true}
       animationType='slide'
       onRequestClose={()=>setModalVisible(false)}>
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