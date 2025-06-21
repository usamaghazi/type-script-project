import { useState } from 'react';
import { Alert } from 'react-native';

interface UseItemManagerReturn {
  items: string[];
  item: string;
  modalVisible: boolean;
  updateItem: string;
  updateIndex: number | null;

  setItem: (item: string) => void;
  setUpdateItem: (item: string) => void;

  onPress: () => void;
  deletingItem: (index: number) => void;
  handleDeleteItem: (index: number) => void;
  handleEditItem: (item: string, index: number) => void;
  handleUpdateItem: (index: number | null) => void;
  hideModal: () => void;
}

const useItemManager = (initialItems: string[] = []): UseItemManagerReturn => {
  const [items, setItems] = useState<string[]>(initialItems);
  const [item, setItem] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [updateItem, setUpdateItem] = useState<string>('');
  const [updateIndex, setUpdateIndex] = useState<number | null>(null);

  const onPress = (): void => {
    if (item.trim() === '') {
      alert('Please enter Item');
    } else {
      setItems(prevState => [...prevState, item]);
      setItem('');
    }
  };

  const  deletingItem = (i: number): void => {
    const filterItems = items.filter((item, index) => {
      return index !== i;
    });
    setItems(filterItems);
  };

  const handleDeleteItem = (i: number) => {
    Alert.alert(
      'Delete Item',
      `Are you sure You Want to Delete ${items[i]}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => deletingItem(i)
        }
      ]
    );
  };

  const hideModal = (): void => {
    setModalVisible(false);
  };

  const handleUpdateItem = (index: number | null): void => {
    if (index === null) {
      alert('Item cannot Change');
    } else {
      if (updateItem.trim() === '') {
        alert('Please Enter Item');
      } else {
        const newItems = [...items];
        newItems[index] = updateItem;
        setItems(newItems);

        setModalVisible(false);
        setUpdateItem('');
        setUpdateIndex(null);
      }
    }
  };

  const handleEditItem = (item: string, i: number) => {
    setModalVisible(true);
    setUpdateItem(item);
    setUpdateIndex(i);
  };

  return {
    
    items,
    item,
    modalVisible,
    updateItem,
    updateIndex,
    
    setItem,
    setUpdateItem,
    
    onPress,
    deletingItem,
    handleDeleteItem,
    handleEditItem,
    handleUpdateItem,
    hideModal,
  };
};

export default useItemManager;