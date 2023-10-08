/**
 * App.tsx
 * ShoppingList 
 *
 * Copyright © 2023年 kazu. All rights reserved.
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { ListScreen, DetailScreen, CreateScreen, } from './src/navigation/';
import { RootStackParamList } from './src/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={ListScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="商品の更新" component={DetailScreen} />
          <Stack.Screen name="商品リスト作成" component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}