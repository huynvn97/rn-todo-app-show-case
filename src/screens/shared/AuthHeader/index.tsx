import {StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../../../hooks/redux';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProps} from '../../../types/navigation.types';

export default function AuthHeader() {
  const currentUser = useAppSelector(state => state.auth.user);
  const navigation = useNavigation<RootNavigationProps>();

  return (
    <View style={[styles.container]}>
      <Text>User: {currentUser?.name || ''}</Text>

      <Button
        title="Switch"
        style={[styles.btn]}
        titleStyle={[styles.btnTitle]}
        onPress={() => navigation.navigate('LoginScreen', {isSwitch: true})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    marginLeft: 10,
    backgroundColor: 'transparent',
    borderWidth: 0,
    minHeight: 0,
  },
  btnTitle: {
    fontWeight: '400',
    fontSize: 14,
  },
});
