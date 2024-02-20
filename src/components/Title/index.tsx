import {StyleSheet, Text, TextProps} from 'react-native';

export type TitleProps = TextProps & {text?: string};

export default function Title(props: TitleProps) {
  const {text, style, ...rest} = props;
  return (
    <Text style={[styles.title, style]} {...rest}>
      {text || props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
