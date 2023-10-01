import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface CreateItemsProps {
  createListButton: () => void;
}

const CreateList: React.FC<CreateItemsProps> = ({createListButton}) => {
  
  return (
    <TouchableOpacity style={styles.navBar} onPress={createListButton} >
        <View style={styles.leftContainer}>
          <Text style={[styles.font]}>
            {'＋'}
          </Text>
        </View>
        <Text style={[styles.font]}>
          {'商品リストを作成する'}
        </Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0000FF',
  },
  leftContainer: {
    marginLeft: 10,
    marginRight: 30
  },
  font: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff'
  }
});

export default CreateList