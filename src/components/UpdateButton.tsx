import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const UpdateButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button,{marginLeft:20}]} onPress={() => {}}>
        <Text style={styles.text}>更新</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button,{marginRight:20}]} onPress={() => {}}>
        <Text style={styles.text}>削除</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'blue',
    width:150,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
});

export default UpdateButton
