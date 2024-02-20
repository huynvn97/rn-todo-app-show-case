import CONFIGS from '../configs';
import {User} from '../types/user.types';

function getUserByUserNameAndEmail(username: string, password: string) {
  const listFakeUsers = CONFIGS.fakeUsers;
  return listFakeUsers.find(
    u => u.username === username && u.password === password,
  );
}

function login(username: string, password: string): User {
  const foundUser = getUserByUserNameAndEmail(username, password);

  if (!foundUser) {
    throw Error('Username/password is incorrect!');
  }

  return {
    id: foundUser.id,
    name: foundUser.name,
  };
}

const AuthService = {
  login,
};

export default AuthService;
