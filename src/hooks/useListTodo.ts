import {useMemo} from 'react';
import {
  SortPriority,
  Todo,
  TodoPriority,
  TodoStatus,
} from '../types/todo.types';
import {useAppSelector} from './redux';

const POINT_BY_PRIORITY = {
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
};

type UseListTodoParams = {
  searchText?: string;
  priority?: SortPriority;

  // Test data
  testUserId?: string;
  testDodos?: Todo[];
};

export default function useListTodo(params: UseListTodoParams) {
  const {searchText, priority, testUserId, testDodos} = params;
  const currentUserId =
    testUserId || useAppSelector(state => state.auth.user?.id);
  const todos = testDodos || useAppSelector(state => state.todos.todos);

  const todosFiltered = useMemo(() => {
    let tempTodos = [...todos.filter(u => u.ownerId === currentUserId)];

    if (searchText) {
      tempTodos = tempTodos.filter(td => td.title.includes(searchText));
    }

    if (priority === 'increasing') {
      tempTodos.sort(
        (a, b) => POINT_BY_PRIORITY[a.priority] - POINT_BY_PRIORITY[b.priority],
      );
    }

    if (priority === 'decreasing') {
      tempTodos.sort(
        (a, b) => POINT_BY_PRIORITY[b.priority] - POINT_BY_PRIORITY[a.priority],
      );
    }

    return tempTodos;
  }, [todos, searchText, priority]);

  const completedTaskCount = useMemo(() => {
    return todos.filter(i => i.status === TodoStatus.COMPLETED).length;
  }, [todos]);

  return {
    todos: todosFiltered,
    totalCount: todos.length,
    completedCount: completedTaskCount,
  };
}
