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
    <TouchableOpacity
      hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
      testID="button-common"
      style={[styles.btnStyle, style]}
      {...rest}>
      <Text style={[styles.title, titleStyle]} testID="button-text-common">
        {title}
      </Text>
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
