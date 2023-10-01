import React, {useState, useEffect} from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native';

const Remarks = () => {
  const [text, setText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#CCFFFF');

  useEffect(() => {
    // 文字数が100文字以上なら背景色を赤にする
    setBackgroundColor(text.length >= 100 ? 'red' : '#CCFFFF');
  }, [text]);

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.label}>備考 :</Text>
      <TextInput 
      maxLength={100}
      style={styles.input} 
      onChangeText={setText}
      placeholder="備考を入力（最大100文字）"
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

export default Remarks