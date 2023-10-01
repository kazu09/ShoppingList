import React, { useState } from 'react'
import { ListScreenProps } from '../navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductItems from '../components/ProductItems'
import CreateList from '../components/CreateList';

const ListScreen = ({ navigation }: ListScreenProps) => {
  const [product, setProduct] = useState([{ id: '0', productName: '商品番号 0' }]);

  const handleAddButton = () => {
    // 商品の配列を追加する
    const addProductId = product.length.toString();
    const newProduct = { id: addProductId, productName: `商品番号 ${addProductId}` };
    setProduct([...product, newProduct]);
    // 更新画面に遷移する
    navigation.navigate('商品の更新');
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
