import React from 'react';
import AddOrEditTodoForm from './components/AddOrEditTodoForm';
import SimpleLayout from '../../components/Layout/SimpleLayout';
import Title from '../../components/Title';
import {StyleSheet, View} from 'react-native';

type TodoDetailScreenProps = {};

export default function TodoDetailScreen(
  props: TodoDetailScreenProps,
): React.ReactElement {
  return (
    <SimpleLayout>
      <View style={[styles.body]}>
        <AddOrEditTodoForm />
      </View>
    </SimpleLayout>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingVertical: 20,
  },
});
