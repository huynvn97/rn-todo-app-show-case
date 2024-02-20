import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function SimpleLayout(
  props: React.PropsWithChildren,
): React.ReactElement {
  return (
    <SafeAreaView style={[styles.container]}>{props.children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
