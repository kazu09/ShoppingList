import React, {useState, useEffect} from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native';

const ProductName = () => {
  const [text, setText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#CCFFFF');

  useEffect(() => {
    // 文字数が20文字以上なら背景色を赤にする
    setBackgroundColor(text.length >= 20 ? 'red' : '#CCFFFF');
  }, [text]);

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.label}>商品名 :</Text>
      <TextInput 
      maxLength={20}
      style={styles.input} 
      onChangeText={setText}
      placeholder="商品名を入力（最大20文字）"
      value={text} />
      {text.length >= 20 && <Text style={{color: '#ffffff'}}> 20文字に達しました。</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4,
    padding: 10,
    borderRadius: 5
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

export default ProductName