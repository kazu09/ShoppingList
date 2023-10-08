import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Item } from '../utils/NonVolatileUtils';
interface ItemWithId extends Item {
  id: string;
}

interface ProductItemProps {
  item: ItemWithId;
}

interface ProductItemsProps {
  data: ItemWithId[];
  handleAddButton: (item: ItemWithId) => void;
}

const ProductItems: React.FC<ProductItemsProps> = ({ data, handleAddButton }) => {
  const ProductItem = ({ item }: ProductItemProps) => (
    <TouchableOpacity style={styles.navBar} onPress={() => handleAddButton(item)}>
        <View style={styles.leftContainer}>
          <Text style={[styles.font]}>
            {'<'}
          </Text>
        </View>
        <Text style={[styles.font]}>
          {item.itemName}
        </Text>
      </TouchableOpacity>
  );
  
    // FlatListの各アイテムレンダリング時に実行される関数
    const renderItem = ({ item }: { item: ItemWithId }) => {
    return <ProductItem item={item} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CCFFFF',
  },
  leftContainer: {
    marginLeft: 10,
    marginRight: 30
  },
  font: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default ProductItems