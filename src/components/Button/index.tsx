import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  title: string;
};

export default function Button(props: ButtonProps) {
  const {title} = props;

  return (
    <TouchableOpacity style={[styles.btnStyle]}>
      <Text style={[styles.title]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'gray',
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
