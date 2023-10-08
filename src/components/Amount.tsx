import React, { useState, useEffect, FC } from 'react';
import { StyleSheet, TextInput, Text, View, Alert } from 'react-native';

interface AmountProps {
  onTextChange: (text: string) => void;
  value?: string;
}

const Amount: FC<AmountProps> = ({ onTextChange, value='' }) => {
  const [text, setText] = useState<string>(value);
  const [backgroundColor, setBackgroundColor] = useState<string>('#CCFFFF');

  useEffect(() => {
    // 文字数が20文字以上なら背景色を赤にする
    setBackgroundColor(text.length >= 8 ? 'red' : '#CCFFFF');
  }, [text, onTextChange]);

  const amountTextChange = (value: string) => {
    onTextChange(value)
    // 数値のみで構成されているか確認
    if (/^\d*$/.test(value)) {
      setText(value);
    } else {
      Alert.alert('エラー', '数値のみを入力してください。');
    }
  }

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.label}>金額 :</Text>
      <TextInput 
      maxLength={8}
      value={text} 
      style={styles.input} 
      onChangeText={amountTextChange}
      placeholder="金額を入力（最大9999999円）"
      keyboardType="numeric"/>
      <Text style={[styles.label,{padding:10}]}>円</Text>
      {text.length >= 8 && <Text style={{color: '#ffffff'}}> 金額以上に達しました。</Text>}
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

export default Amount