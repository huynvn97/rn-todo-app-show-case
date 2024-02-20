import {Dimensions, StyleSheet, Text, View} from 'react-native';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

export default function AddOrEditTodoForm() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.inputLabel]}>Name:</Text>
      <TextInput placeholder="Enter todo name" style={styles.input} />

      <Text style={[styles.inputLabel]}>Description:</Text>
      <TextInput
        placeholder="Enter todo description"
        style={[styles.input, styles.inputDescription]}
        multiline
        numberOfLines={10}
      />

      <Button title="Submit" style={styles.btn} />
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
  },
  inputLabel: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
});
