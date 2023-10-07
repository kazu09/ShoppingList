import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProductName from '../components/ProductName';
import Amount from '../components/Amount';
import ItemDescription from '../components/ItemDescription';
import Intention from '../components/Intention';
import Remarks from '../components/Remarks';
import UpdateButton from '../components/UpdateButton';
import {updateItem, removeItem, Item} from '../utils/NonVolatileUtils';

export default function DetailScreen({ navigation }: any) {
  const [productName, setProductName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [itemDescription, setitemDescription] = useState<string>('');
  const [remarks, setRemarks] = useState<string>('');
  const [intention, setIntention] = useState<string>('');

  const handleProductName = (text:string) => {
    setProductName(text);
  };

  const handleAmount = (text:string) => {
    setAmount(text);
  };

  const handleItemDescription = (text:string) => {
    setitemDescription(text);
  };

  const handleIntention = (value:string) => {
    setIntention(value);
  };

  const handleRemarks = (text:string) => {
    setRemarks(text);
  };

  const handleUpdate = () => {
    // 更新するid
    // ToDo 更新値を固定値ではないように対応
    const updateId = "0"
    const updateItemData: Item = {
      itemName: productName,
      amount: amount,
      itemDescription: itemDescription,
      intention: intention,
      remarks: remarks
    };

    updateItem(updateId, updateItemData).then(() => {
      console.info("Item updated success");
    }).catch((e) => {
      console.error("Error updating item:", e);
    });
    navigation.goBack()
  };

  const handleDelete = () => {
    // 削除するid
    // ToDo 更新値を固定値ではないように対応
    const deleteId = "1"
    removeItem(deleteId).then(() => {
      console.info("Item delete success");
    }).catch((e) => {
      console.error("Error Delete item:", e);
    })
    navigation.goBack()
  };

  return (
    <View style={styles.mainContainer}>
      <KeyboardAwareScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.inputContainer}>
        <ProductName onTextChange={handleProductName} />
          <Amount onTextChange={handleAmount} />
          <ItemDescription onTextChange={handleItemDescription}/>
          <Intention onValueChange={handleIntention}/>
          <Remarks onTextChange={handleRemarks}/>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <UpdateButton onUpdate={handleUpdate} onDelete={handleDelete}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 16,
  },
  inputContainer: {
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 10
  }
});