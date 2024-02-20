import React, {useCallback, useMemo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SimpleLayout from '../../components/Layout/SimpleLayout';
import {useAppSelector} from '../../hooks/redux';
import Title from '../../components/Title';
import {Todo, TodoStatus} from '../../types/todo.types';
import Button from '../../components/Button';
import TodoItem from './components/TodoItem';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProps} from '../../types/navigation.types';

type TodoListScreenProps = {};

export default function TodoListScreen(
  props: TodoListScreenProps,
): React.ReactElement {
  const todos = useAppSelector(state => state.todos.todos);
  const completedTaskCount = useMemo(() => {
    return todos.filter(i => i.status === TodoStatus.COMPLETED).length;
  }, [todos]);
  const navigation = useNavigation<RootNavigationProps>();

  const _renderItem = useCallback(({item}: {item: Todo}) => {
    return <TodoItem todo={item} containerStyle={{marginBottom: 10}} />;
  }, []);

  return (
    <SimpleLayout>
      <View style={[styles.screenHeader]}>
        <Title>Todo List:</Title>

        <Button
          title="Add +"
          style={styles.btnAdd}
          onPress={() => navigation.navigate('TodoDetailScreen', {todoId: ''})}
        />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(todo: Todo) => todo.id}
        renderItem={_renderItem}
        ListEmptyComponent={<Text>Empty Todo ...</Text>}
        ListHeaderComponent={
          <ListHeader completedTaskCount={completedTaskCount} />
        }
      />
    </SimpleLayout>
  );
}

function ListHeader(props: {completedTaskCount: number}) {
  return (
    <View style={[styles.listHeader]}>
      <Text>Completed Tasks: {props.completedTaskCount}</Text>
    </View>
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
  listHeader: {marginBottom: 10},
});
