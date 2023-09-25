import { StackScreenProps } from '@react-navigation/stack';

export { default as ListScreen } from '../screens/ListScreen';
export { default as DetailScreen } from '../screens/DetailScreen';
export { default as CreateScreen } from '../screens/CreateScreen';

export type RootStackParamList = {
  List: undefined;
  Detail: undefined;
  Create: undefined;
};

export type ListScreenProps = StackScreenProps<RootStackParamList, 'List'>;