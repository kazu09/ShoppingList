import React, { useState, useCallback } from 'react'
import { ListScreenProps } from '../navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import ProductItems from '../components/ProductItems'
import CreateList from '../components/CreateList';
import { getItems } from '../utils/NonVolatileUtils';
import { Item } from '../utils/NonVolatileUtils';

interface ItemWithId extends Item {
  id: string;
}

const ListScreen = ({ navigation }: ListScreenProps) => {

  const [product, setProduct] = useState<ItemWithId[]>([]); // 初期値を空配列に
  useFocusEffect(
    useCallback(() => {
      itemState();
    }, [])
  );

  const itemState = async () => {
    try {
      const newProductObj = await getItems();  // ストレージからオブジェクトを取得
      if (newProductObj) {
        // オブジェクトを配列に変換
        const newProductArr = Object.keys(newProductObj).map((key) => ({
          id: key,  // 追加：各アイテムにIDを持たせる
          ...newProductObj[key]
        }));
        setProduct(newProductArr);  // ステートを更新
      }
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  };

  const handleAddButton = async (item: ItemWithId) => {
    await itemState();
    navigation.navigate('商品の更新', { item });
  };

  const createListButton = () => {
    // 商品リスト作成画面に遷移する
    navigation.navigate('商品リスト作成')
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}> 
      <ProductItems data={product} handleAddButton={handleAddButton} />
      <CreateList createListButton={createListButton}/>
    </SafeAreaView> 
  );
}

export default ListScreen;
