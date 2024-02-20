import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SimpleLayout from '../../components/Layout/SimpleLayout';
import TextInput from '../../components/TextInput';
import Title from '../../components/Title';

type LoginScreenProps = {};

export default function LoginScreen(
  props: LoginScreenProps,
): React.ReactElement {
  return (
    <SimpleLayout innerContainerStyle={styles.innerContainer}>
      <Title>Login Screen</Title>
      <TextInput placeholder="User name" autoFocus />
      <TextInput placeholder="Password" secureTextEntry />
    </SimpleLayout>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
