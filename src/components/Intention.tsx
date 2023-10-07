import React, { useState, useEffect, FC } from 'react';import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View } from 'react-native';
interface IntentionProps {
  onValueChange: (text: string) => void;
}
const Intention : FC<IntentionProps> = ({ onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    onValueChange(selectedValue)
  }, [onValueChange]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>商品の要・不要 :</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        style={styles.picker}
        itemStyle={{fontSize: 12}}>
        <Picker.Item label="---" value="none" />
        <Picker.Item label="絶対欲しい" value="definitelywant" />
        <Picker.Item label="すごく欲しい" value="want" />
        <Picker.Item label="悩んでいる" value="worry" />
        <Picker.Item label="いらない" value="notneed" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CCFFFF',
    margin: 6,
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
  },
  picker: {
    fontSize: 6,
    flex: 1,
    height: 50
  },
});

export default Intention
