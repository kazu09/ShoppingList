import React, { useState } from 'react'
import { ListScreenProps } from '../navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductItems from '../components/ProductItems'

const ListScreen = ({ navigation }: ListScreenProps) => {
  const [product, setProduct] = useState([{ id: '0', productName: '商品番号 0' }]);

  const handleAddButton = () => {
    // 商品の配列を追加する
    const addProductId = product.length.toString();
    const newProduct = { id: addProductId, productName: `商品番号 ${addProductId}` };
    setProduct([...product, newProduct]);
    // 詳細画面に遷移する
    navigation.navigate('Detail');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}> 
      <ProductItems data={product} handleAddButton={handleAddButton} />
    </SafeAreaView> 
  );
}

export default ListScreen;
