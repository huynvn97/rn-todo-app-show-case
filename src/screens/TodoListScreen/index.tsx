import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SimpleLayout from '../../components/Layout/SimpleLayout';
import {useAppSelector} from '../../hooks/redux';
import Title from '../../components/Title';
import {
  SortPriority,
  Todo,
  TodoPriority,
  TodoStatus,
} from '../../types/todo.types';
import Button from '../../components/Button';
import TodoItem from './components/TodoItem';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProps} from '../../types/navigation.types';
import TextInput from '../../components/TextInput';
import useListTodo from '../../hooks/useListTodo';
import RNPickerSelect from 'react-native-picker-select';

type TodoListScreenProps = {};

export default function TodoListScreen(
  props: TodoListScreenProps,
): React.ReactElement {
  const [searchText, setSearchText] = useState('');
  const [sortPriority, setSortPriority] = useState<SortPriority>('default');
  const {todos, completedCount, totalCount} = useListTodo({
    searchText,
    priority: sortPriority,
  });

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
          <ListHeader
            totalCount={totalCount}
            completedTaskCount={completedCount}
            sortPriority={sortPriority}
            searchText={searchText}
            onChangeSearchText={val => setSearchText(val)}
            onChangeSortPriority={val => setSortPriority(val)}
          />
        }
      />
    </SimpleLayout>
  );
}

function ListHeader(props: {
  totalCount: number;
  completedTaskCount: number;
  sortPriority: SortPriority;
  onChangeSortPriority: (sort: SortPriority) => void;
  onChangeSearchText: (value: string) => void;
  searchText: string;
}) {
  return (
    <View>
      <View style={[styles.listHeader]}>
        <Text>Total: {props.totalCount}</Text>
        <Text>Completed: {props.completedTaskCount}</Text>
      </View>

      <View style={[styles.listHeader]}>
        <TextInput
          style={[styles.inputSearch, {flex: 1}]}
          placeholder="Search by todo title"
          value={props.searchText}
          onChangeText={props.onChangeSearchText}
        />

        <RNPickerSelect
          onValueChange={value => props.onChangeSortPriority(value)}
          items={[
            {label: 'Default', value: 'default'},
            {label: 'Increasing', value: 'increasing'},
            {label: 'Decreasing', value: 'decreasing'},
          ]}
          value={props.sortPriority}
          style={{
            viewContainer: styles.picker,
          }}
        />
      </View>
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
  listHeader: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputSearch: {},

  picker: {
    minHeight: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    minWidth: 80,
    marginLeft: 15,
  },
});
