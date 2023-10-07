import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProductName from '../components/ProductName';
import Amount from '../components/Amount';
import ItemDescription from '../components/ItemDescription';
import Intention from '../components/Intention';
import Remarks from '../components/Remarks';
import SaveButton from '../components/SaveButton';
import { addItem, Item } from '../utils/NonVolatileUtils';

export default function CreateScreen({ navigation }: any) {
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

  const createListButton = () => {
    const itemData: Item = {
        itemName: productName,
        amount: amount,
        itemDescription: itemDescription,
        intention: intention,
        remarks: remarks
    };
    
    const saveItem = async () => {
      try {
        await addItem(itemData);
      } catch (e) {
        console.error('Error saving data:', e);
      }
    };
    saveItem();
    navigation.goBack()
  }
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
        <SaveButton createListButton={createListButton} />
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
  }
});