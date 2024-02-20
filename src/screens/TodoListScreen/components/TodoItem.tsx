import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import moment from 'moment';
import {Todo, TodoPriority, TodoStatus} from '../../../types/todo.types';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProps} from '../../../types/navigation.types';

const COLOR_BY_PRIORITY = {
  [TodoPriority.HIGH]: 'red',
  [TodoPriority.MEDIUM]: 'orange',
  [TodoPriority.LOW]: 'gray',
};

export default function TodoItem(props: {
  todo: Todo;
  containerStyle?: StyleProp<ViewStyle>;
}) {
  const navigation = useNavigation<RootNavigationProps>();
  const {todo, containerStyle} = props;

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() =>
        navigation.navigate('TodoDetailScreen', {todoId: todo.id})
      }>
      <Text style={[styles.title]} numberOfLines={1}>
        {todo.title}
      </Text>
      <Text style={[styles.description]} numberOfLines={3}>
        {todo.description}
      </Text>

      <View style={[styles.footer]}>
        <Text
          style={[
            styles.subtitle,
            todo.status === TodoStatus.COMPLETED && {color: 'green'},
          ]}>
          {todo.status === TodoStatus.COMPLETED ? 'Completed' : 'Not done'}
        </Text>

        <Text
          style={[styles.subtitle, {color: COLOR_BY_PRIORITY[todo.priority]}]}>
          {todo.priority}
        </Text>

        <Text style={[styles.subtitle]}>
          {todo.updatedDate
            ? moment(todo.updatedDate).format('hh:mm MM-DD-YYYY')
            : '--'}
        </Text>
      </View>
    </TouchableOpacity>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
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
