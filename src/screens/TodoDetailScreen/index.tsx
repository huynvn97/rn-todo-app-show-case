import React from 'react';
import AddOrEditTodoForm from './components/AddOrEditTodoForm';
import SimpleLayout from '../../components/Layout/SimpleLayout';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

type TodoDetailScreenProps = {};

export default function TodoDetailScreen(
  props: TodoDetailScreenProps,
): React.ReactElement {
  const route = useRoute<any>();

  return (
    <SimpleLayout>
      <View style={[styles.body]}>
        <AddOrEditTodoForm todoId={route?.params?.todoId || ''} />
      </View>
    </SimpleLayout>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingVertical: 20,
  },
});
