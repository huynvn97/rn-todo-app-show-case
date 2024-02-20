import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
};

export default function Button(props: ButtonProps) {
  const {title, style, titleStyle, ...rest} = props;

  return (
    <TouchableOpacity style={[styles.btnStyle, style]} {...rest}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
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
