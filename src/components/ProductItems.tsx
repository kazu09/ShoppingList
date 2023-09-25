import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

interface ProductItemProps {
  item: {
    id: string;
    productName: string;
  };
}

interface ProductItemsProps {
  data: ProductItemProps['item'][];
  handleAddButton: () => void;
}

const ProductItems: React.FC<ProductItemsProps> = ({ data, handleAddButton }) => {
  const ProductItem = ({ item }: ProductItemProps) => (
    <TouchableOpacity style={styles.navBar} onPress={handleAddButton}>
        <View style={styles.leftContainer}>
          <Text style={[styles.font]}>
            {'<'}
          </Text>
        </View>
        <Text style={[styles.font]}>
          {item.productName}
        </Text>
      </TouchableOpacity>
  );
  
  return (
    <FlatList
      data={data}
      renderItem={ProductItem}
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