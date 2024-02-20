import {useMemo} from 'react';
import {SortPriority, TodoPriority, TodoStatus} from '../types/todo.types';
import {useAppSelector} from './redux';

const POINT_BY_PRIORITY = {
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
};

type UseListTodoParams = {
  searchText?: string;
  priority?: SortPriority;
};

export default function useListTodo(params: UseListTodoParams) {
  const {searchText, priority} = params;
  const todos = useAppSelector(state => state.todos.todos);

  const todosFiltered = useMemo(() => {
    let tempTodos = [...todos];

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
