import {renderHook} from '@testing-library/react-native';
import useListTodo from '../../useListTodo';
import CONFIGS from '../../../configs';
import {TodoPriority, TodoStatus} from '../../../types/todo.types';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  TypedUseSelectorHook: {},
  useDispatch: jest.fn(),
}));

const testDodos = [
  {
    id: '1',
    ownerId: CONFIGS.fakeUsers[0].id,
    title: 'Todo 1',
    description: 'Todo description long text here',
    createdDate: new Date(),
    updatedDate: new Date(),
    status: TodoStatus.COMPLETED,
    priority: TodoPriority.HIGH,
  },
  {
    id: '2',
    ownerId: CONFIGS.fakeUsers[0].id,
    title: 'Todo 2',
    description: 'Todo description long text here',
    createdDate: new Date(),
    updatedDate: new Date(),
    status: TodoStatus.CREATED,
    priority: TodoPriority.MEDIUM,
  },
  {
    id: '3',
    ownerId: CONFIGS.fakeUsers[0].id,
    title: 'Todo 3',
    description: 'Todo description long text here',
    createdDate: new Date(),
    updatedDate: new Date(),
    status: TodoStatus.CREATED,
    priority: TodoPriority.LOW,
  },
];

it('useListTodo: Should return list todos sorted by priority increasing', () => {
  const {result} = renderHook(() =>
    useListTodo({
      searchText: '',
      priority: 'increasing',
      testDodos: testDodos,
      testUserId: CONFIGS.fakeUsers[0].id,
    }),
  );

  const todos = result.current.todos;

  expect(todos[0].priority).toBe(TodoPriority.LOW);
  expect(todos[1].priority).toBe(TodoPriority.MEDIUM);
  expect(todos[2].priority).toBe(TodoPriority.HIGH);
});

it('useListTodo: Should return list todos sorted by priority decreasing', () => {
  const {result} = renderHook(() =>
    useListTodo({
      searchText: '',
      priority: 'decreasing',
      testDodos: testDodos,
      testUserId: CONFIGS.fakeUsers[0].id,
    }),
  );

  const todos = result.current.todos;

  expect(todos[0].priority).toBe(TodoPriority.HIGH);
  expect(todos[1].priority).toBe(TodoPriority.MEDIUM);
  expect(todos[2].priority).toBe(TodoPriority.LOW);
});

it('useListTodo: Should return total count is 3', () => {
  const {result} = renderHook(() =>
    useListTodo({
      searchText: '',
      priority: 'default',
      testDodos: testDodos,
      testUserId: CONFIGS.fakeUsers[0].id,
    }),
  );

  expect(result.current.totalCount).toBe(3);
});

it('useListTodo: Should return total count is 1', () => {
  const {result} = renderHook(() =>
    useListTodo({
      searchText: '',
      priority: 'default',
      testDodos: testDodos,
      testUserId: CONFIGS.fakeUsers[0].id,
    }),
  );

  expect(result.current.completedCount).toBe(1);
});

it('useListTodo: Should return todo 1', () => {
  const {result} = renderHook(() =>
    useListTodo({
      searchText: 'Todo 1',
      priority: 'default',
      testDodos: testDodos,
      testUserId: CONFIGS.fakeUsers[0].id,
    }),
  );

  expect(result.current.todos[0].title).toBe('Todo 1');
});
