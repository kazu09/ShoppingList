import React, { useState, useEffect, FC } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

interface ItemDescriptionProps {
  onTextChange: (text: string) => void;
  value?: string;
}

const ItemDescription: FC<ItemDescriptionProps> = ({ onTextChange, value='' }) => {
  const [text, setText] = useState(value);
  const [backgroundColor, setBackgroundColor] = useState('#CCFFFF');

  useEffect(() => {
    onTextChange(text)
    // 文字数が100文字以上なら背景色を赤にする
    setBackgroundColor(text.length >= 100 ? 'red' : '#CCFFFF');
  }, [text, onTextChange]);

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.label}>商品説明 :</Text>
      <TextInput 
      maxLength={100}
      style={styles.input} 
      onChangeText={setText}
      placeholder="商品説明を入力（最大100文字）"
      multiline={true}
      numberOfLines={4}
      value={text} />
      {text.length >= 100 && <Text style={{color: '#ffffff'}}> 100文字に達しました。</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 12,
    padding: 5,
    borderColor: '#000080',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ItemDescription