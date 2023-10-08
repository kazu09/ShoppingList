import { StackScreenProps } from '@react-navigation/stack';

export { default as ListScreen } from '../screens/ListScreen';
export { default as DetailScreen } from '../screens/DetailScreen';
export { default as CreateScreen } from '../screens/CreateScreen';

type ItemWithId = {
  id: string;
  itemName: string;
  amount: string;
  itemDescription: string;
  intention: string;
  remarks: string;
}

export type RootStackParamList = {
  List: undefined;
  商品の更新: { item: ItemWithId };
  商品リスト作成: undefined;
};

export type ListScreenProps = StackScreenProps<RootStackParamList, 'List'>;