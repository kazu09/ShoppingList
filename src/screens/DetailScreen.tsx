/**
 * DetailScreen.tsx
 * ShoppingList 
 *
 * Copyright © 2023年 kazu. All rights reserved.
 */
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
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';

type DetailScreenProps = StackScreenProps<RootStackParamList, '商品の更新'>;

export default function DetailScreen({ navigation, route }: DetailScreenProps) {
  const { item } = route.params;
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

  const handleUpdate = async () => {
    // 更新するid
    const updateId = item.id
    const updateItemData: Item = {
      itemName: productName,
      amount: amount,
      itemDescription: itemDescription,
      intention: intention,
      remarks: remarks
    };

    await updateItem(updateId, updateItemData).then(() => {
      console.info("Item updated success");
    }).catch((e) => {
      console.error("Error updating item:", e);
    });
    // 画面を戻す
    navigation.goBack()
  };

  const handleDelete = async () => {
    // 削除するid
    const deleteId = item.id
    await removeItem(deleteId).then(() => {
      console.info("Item delete success");
    }).catch((e) => {
      console.error("Error Delete item:", e);
    })
    // 画面を戻す
    navigation.goBack()
  };

  return (
    <View style={styles.mainContainer}>
      <KeyboardAwareScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.inputContainer}>
        <ProductName value={item.itemName} onTextChange={handleProductName} />
          <Amount value={item.amount} onTextChange={handleAmount} />
          <ItemDescription value={item.itemDescription} onTextChange={handleItemDescription}/>
          <Intention value={item.intention} onValueChange={handleIntention}/>
          <Remarks value={item.remarks} onTextChange={handleRemarks}/>
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