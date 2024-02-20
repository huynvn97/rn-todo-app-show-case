import React from 'react';
import {
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
  View,
  StyleSheet,
} from 'react-native';

export type TextInputProps = RNTextInputProps & {};

export default function TextInput(props: TextInputProps): React.ReactElement {
  const {style, ...rest} = props;

  return <RNTextInput style={[styles.input, style]} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    minHeight: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
});
