import {useCallback, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from './redux';
import {Todo, TodoStatus} from '../types/todo.types';
import {createTodo, deleteTodo, updateTodo} from '../redux/todo/index.slice';

export default function useTodoDetail(todoId: string) {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos.todos);
  const userId = useAppSelector(state => state.auth.user?.id);

  const todo = useMemo(() => todos.find(t => t.id === todoId), [todos]);
  const isCreating = !todo;

  const handleCreate = useCallback(
    (data: Pick<Todo, 'title' | 'priority' | 'description'>) => {
      dispatch(
        createTodo({
          ...data,
          ownerId: userId,
        }),
      );
    },
    [],
  );

  const handleUpdate = (
    data: Pick<Todo, 'id' | 'priority' | 'title' | 'description'>,
  ) => {
    dispatch(updateTodo(data));
  };

  const handleComplete = (data: Pick<Todo, 'id'>) => {
    dispatch(
      updateTodo({
        id: data.id,
        status: TodoStatus.COMPLETED,
      }),
    );
  };

  const handleDelete = (data: Pick<Todo, 'id'>) => {
    dispatch(
      deleteTodo({
        id: data.id,
      }),
    );
  };

  return {
    todo,
    isCreating,
    createTodo: handleCreate,
    updateTodo: handleUpdate,
    completeTodo: handleComplete,
    deleteTodo: handleDelete,
  };
}
