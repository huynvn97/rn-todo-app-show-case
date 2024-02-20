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

  return (
    <View style={[styles.container]}>
      <RNTextInput style={[styles.input, style]} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  input: {
    minHeight: 40,
  },
});
