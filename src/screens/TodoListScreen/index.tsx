import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SimpleLayout from '../../components/Layout/SimpleLayout';
import {useAppSelector} from '../../hooks/redux';
import Title from '../../components/Title';
import {Todo} from '../../types/todo.types';
import Button from '../../components/Button';
import TodoItem from './components/TodoItem';

type TodoListScreenProps = {};

export default function TodoListScreen(
  props: TodoListScreenProps,
): React.ReactElement {
  const todos = useAppSelector(state => state.todos.todos);

  const _renderItem = useCallback(({item}: {item: Todo}) => {
    return <TodoItem todo={item} containerStyle={{marginBottom: 10}} />;
  }, []);

  return (
    <SimpleLayout>
      <View style={[styles.screenHeader]}>
        <Title>Todo List:</Title>

        <Button title="Add +" style={styles.btnAdd} />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(todo: Todo) => todo.id}
        renderItem={_renderItem}
      />
    </SimpleLayout>
  );
}

const styles = StyleSheet.create({
  screenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  btnAdd: {
    paddingHorizontal: 5,
  },
});
