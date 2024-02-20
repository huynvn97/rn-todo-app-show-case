import {Alert, Dimensions, StyleSheet, Text, View} from 'react-native';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import {useCallback, useEffect, useState} from 'react';
import useTodoDetail from '../../../hooks/todo';
import {TodoPriority, TodoStatus} from '../../../types/todo.types';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProps} from '../../../types/navigation.types';

type AddOrEditTodoFormProps = {
  todoId: string;
};

export default function AddOrEditTodoForm(props: AddOrEditTodoFormProps) {
  const navigation = useNavigation<RootNavigationProps>();
  const {todo, isCreating, createTodo, updateTodo, completeTodo} =
    useTodoDetail(props.todoId);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<TodoPriority>(TodoPriority.HIGH);

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);

  const handleOnCreate = useCallback(() => {
    createTodo({
      title: title,
      description: description,
      priority: priority,
    });
    navigation.goBack();
  }, [title, description, priority]);

  const handleOnUpdate = useCallback(() => {
    updateTodo({
      id: todo?.id || '',
      title: title,
      description: description,
      priority: priority,
    });
    Alert.alert('Update success!');
  }, [title, description, priority]);

  const handleOnComplete = useCallback(() => {
    completeTodo({
      id: todo?.id || '',
    });
    Alert.alert('Completed todo!');
  }, [title, description, priority]);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.inputLabel]}>Name:</Text>
      <TextInput
        placeholder="Enter todo title"
        style={styles.input}
        value={title}
        onChangeText={value => setTitle(value)}
      />

      <Text style={[styles.inputLabel]}>Description:</Text>
      <TextInput
        placeholder="Enter todo description"
        style={[styles.input, styles.inputDescription]}
        multiline
        numberOfLines={10}
        value={description}
        onChangeText={value => setDescription(value)}
      />

      {!isCreating && (
        <>
          <Button
            title="Complete"
            style={styles.btn}
            onPress={handleOnComplete}
          />
          <View style={[styles.subBtns]}>
            <Button title="Save" style={styles.btn} onPress={handleOnUpdate} />
            <View style={[styles.box]} />
            <Button title="Delete" style={styles.btnInactive} />
          </View>
        </>
      )}

      {isCreating && (
        <Button title="Submit" style={styles.btn} onPress={handleOnCreate} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    marginBottom: 10,
  },
  inputDescription: {
    maxHeight: Dimensions.get('screen').height / 2,
    paddingVertical: 5,
  },
  btn: {
    marginTop: 10,
    flex: 1,
  },
  btnInactive: {
    marginTop: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
  },
  inputLabel: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subBtns: {
    flexDirection: 'row',
  },
  box: {
    width: 15,
  },
});
