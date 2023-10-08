/**
 * NonVolatileUtils.tsx
 * ShoppingList 
 *
 * Copyright © 2023年 kazu. All rights reserved.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Item {
  itemName: string;
  amount: string;
  itemDescription: string;
  intention: string;
  remarks: string;
}

type ShopItem = Record<string, Item>;

/**
 * ストレージに保持する
 * 
 * @param item ShopItemをストレージに保持する
 */
const saveItem = async (item: ShopItem): Promise<void>=> {
  try {
    const shopItem = JSON.stringify(item)
    await AsyncStorage.setItem('shoppingList',shopItem)
  } catch(e) {
    console.error(e)
  }
}

/**
 * 全てのアイテムを取得する
 * 
 * @returns ストレージに保存している全てのアイテム
 */
const getItems = async (): Promise<ShopItem | null> => {
  try {
    console.info("------> get storage Items")
    const item = await AsyncStorage.getItem('shoppingList')
    return item ? (JSON.parse(item) as ShopItem) : null;
  } catch(e) {
    console.error(e)
    return null
  }
}

/**
 * 選択したアイテムを削除する
 * 
 * @param removeItemId 
 */
const removeItem = async (removeItemId: string): Promise<void> => {
  try {
    // 現在のデータを取得
    const currentItems = await getItems();

    // 現在のデータがnullまたは空でないかチェック
    if (currentItems) {
      // 削除するアイテムIDに一致しないアイテムだけで新しいオブジェクトを作成
      const updatedData = Object.keys(currentItems)
        .filter((id) => id !== removeItemId)
        .reduce((acc, id) => {
          acc[id] = currentItems[id];
          return acc;
        }, {} as ShopItem);

      // 更新したデータを保存
      await saveItem(updatedData);
      console.info("remove success");
    }
  } catch (e) {
    console.error("Error remove Item",e);
  }
}

/**
 * 選択したアイテムをストレージから取得する
 * 
 * @param num アイテムのid
 * @returns 取得したアイテム
 */
const getShopItem = async (num: number): Promise<Item> => {
    const stringifiedData = await AsyncStorage.getItem('shoppingList');
    const item: ShopItem = JSON.parse(stringifiedData || '{}');
    return item[num]
}

/**
 * ストレージにアイテムを追加する
 * 
 * @param newItem 
 */
const addItem = async (newItem: Item): Promise<void> => {
  try {
    // 現在のデータを取得
    const currentItem = await getItems();

    // 新しいIDを作成（現在の最大ID + 1を新しいIDとするためのロジック。）
    const newId = currentItem
      ? (Math.max(...Object.keys(currentItem).map(Number)) + 1).toString()
      : "0";

    // 新しい項目を追加
    const updatedItem: ShopItem = {
      ...currentItem,
      [newId]: newItem,
    };

    // データを保存
    await saveItem(updatedItem);
    console.info("add item success")
  } catch (e) {
    console.error("Error not add item",e);
  }
};

/**
 * アイテム情報を更新する
 * 
 * @param updateId アイテムのid
 * @param updatedItem 更新後のアイテム情報
 */
const updateItem = async (updateId: string, updatedItem: Item): Promise<void> => {
  try {
    // 現在のデータを取得
    const currentItem = await getItems();

    // 現在のデータがnullまたは空でないかチェック
    if (currentItem) {
      // アイテムを更新
      currentItem[updateId] = updatedItem;

      // 更新したデータを保存
      await saveItem(currentItem);
    }
  } catch (e) {
    console.error(e);
  }
};

/**
 * 保存されているアイテムの数を取得
 * 
 * @returns ストレージに保存しているアイテム数
 */
const getItemCount = async (): Promise<number> => {
  try {
    const items = await getItems();
    return items ? Object.keys(items).length : 0;
  } catch (e) {
    console.error(e);
    return 0;
  }
}

export {
  getItems,
  removeItem,
  addItem,
  getShopItem,
  updateItem,
  Item
}