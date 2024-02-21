import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SimpleLayout from '../../components/Layout/SimpleLayout';
import TextInput from '../../components/TextInput';
import Title from '../../components/Title';
import Button from '../../components/Button';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {loginAction, switchAction} from '../../redux/auth/actions';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProps} from '../../types/navigation.types';
import {User} from '../../types/user.types';

type LoginScreenProps = {};

export default function LoginScreen(
  props: LoginScreenProps,
): React.ReactElement {
  const currentUser = useAppSelector(state => state.auth.user);
  const loggedUsers = useAppSelector(state => state.auth.loggedUsers);
  const loginError = useAppSelector(state => state.auth.login.error);
  const navigation = useNavigation<RootNavigationProps>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const handleOnLogin = useCallback(() => {
    dispatch(
      loginAction({
        username,
        password,
      }),
    );
  }, [username, password]);

  const handleOnSwitch = useCallback((user: User) => {
    dispatch(
      switchAction({
        user,
        cb: () => {
          navigation.navigate('TodoListScreen');
        },
      }),
    );
  }, []);

  useEffect(() => {
    if (currentUser?.id) {
      navigation.navigate('TodoListScreen');
    }
  }, [currentUser?.id]);

  useEffect(() => {
    return () => {
      setPassword('');
      setUsername('');
    };
  }, []);

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

      {loginError ? <Text style={[styles.error]}>{loginError}</Text> : null}

      <Button title="Login" onPress={() => handleOnLogin()} />

      {loggedUsers.length > 0 && (
        <View style={[styles.loggedContainer]}>
          <Text style={{marginBottom: 5}}>Logged Users:</Text>
          <FlatList
            data={loggedUsers}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={[styles.userContainer]}
                  onPress={() => handleOnSwitch(item)}>
                  <Text>Name: {item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
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

  loggedContainer: {
    marginTop: 10,
  },
  userContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    marginBottom: 5,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  error: {
    color: 'red',
    marginVertical: 5,
  },
});
