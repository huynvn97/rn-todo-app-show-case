import type {
  NativeStackNavigationProp,
  ,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  LoginScreen: undefined;
  TodoDetailScreen: {todoId: string};
  TodoListScreen: undefined;
};

export type RootNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen' | 'TodoDetailScreen' | 'TodoListScreen'
>;
