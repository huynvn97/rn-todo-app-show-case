import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import moment from 'moment';
import {Todo} from '../../../types/todo.types';

export default function TodoItem(props: {
  todo: Todo;
  containerStyle?: StyleProp<ViewStyle>;
}) {
  const {todo, containerStyle} = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title]} numberOfLines={1}>
        {todo.title}
      </Text>
      <Text style={[styles.description]} numberOfLines={3}>
        {todo.description}
      </Text>

      <View style={[styles.footer]}>
        <Text style={[styles.subtitle]}>
          {todo.updatedDate
            ? moment(todo.updatedDate).format('hh:mm MM-DD-YYYY')
            : '--'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    borderRadius: 5,
  },
  footer: {
    marginTop: 5,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '400',
  },
});
