import React from 'react';
import {Text, View} from 'react-native';
import SimpleLayout from '../../components/Layout/SimpleLayout';

type TodoListScreenProps = {};

export default function TodoListScreen(
  props: TodoListScreenProps,
): React.ReactElement {
  return (
    <SimpleLayout>
      <Text>Home screen</Text>
    </SimpleLayout>
  );
}
