import AsyncStorage from '@react-native-async-storage/async-storage';
import {Todo} from '../types/todo.types';
import CONFIGS from '../configs';

async function syncTodoListToLocal(todos: Todo[]): Promise<void> {
  return await AsyncStorage.setItem(
    CONFIGS.STORAGE_KEYS.TODO_LIST,
    JSON.stringify(todos),
  );
}

export const TodoService = {
  syncTodoListToLocal,
};

export default TodoService;
