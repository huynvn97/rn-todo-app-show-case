import React from 'react';
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

export type SimpleLayoutProps = {
  containerStyle?: StyleProp<ViewStyle>;
  innerContainerStyle?: StyleProp<ViewStyle>;
};

export default function SimpleLayout(
  props: React.PropsWithChildren & SimpleLayoutProps,
): React.ReactElement {
  return (
    <SafeAreaView style={[styles.container, props.containerStyle]}>
      <View style={[styles.innerContainer, props.innerContainerStyle]}>
        {props.children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
