import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SimpleLayout from '../../components/Layout/SimpleLayout';
import TextInput from '../../components/TextInput';
import Title from '../../components/Title';
import Button from '../../components/Button';
import {useAppDispatch} from '../../hooks/redux';
import {loginAction} from '../../redux/auth/actions';

type LoginScreenProps = {};

export default function LoginScreen(
  props: LoginScreenProps,
): React.ReactElement {
  const [username, setUsername] = useState('jackson.nguyen');
  const [password, setPassword] = useState('123456');

  const dispatch = useAppDispatch();

  const handleOnLogin = useCallback(() => {
    dispatch(
      loginAction({
        username,
        password,
      }),
    );
  }, [username, password]);

  return (
    <SimpleLayout innerContainerStyle={styles.innerContainer}>
      <Title style={styles.title}>Login Screen</Title>
      <TextInput
        value={username}
        placeholder="User name"
        autoFocus
        onChangeText={value => setUsername(value)}
        style={styles.input}
      />
      <TextInput
        value={password}
        placeholder="Password"
        secureTextEntry
        onChangeText={value => setPassword(value)}
        style={styles.input}
      />

      <Button title="Login" onPress={() => handleOnLogin()} />
    </SimpleLayout>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 10,
  },
  title: {
    marginBottom: 10,
  },
});
