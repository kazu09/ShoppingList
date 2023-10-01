import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface CreateItemsProps {
  createListButton: () => void;
}

const SaveButton: React.FC<CreateItemsProps> = ({createListButton}) => {
  
  return (
    <TouchableOpacity style={styles.navBar} onPress={createListButton} >
        <Text style={[styles.font]}>
          {'保存する'}
        </Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF',
  },
  font: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff'
  }
});

export default SaveButton