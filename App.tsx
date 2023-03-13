import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Posts from '@travnor/posts';

export default function App() {
  return (
    <View style={styles.containerStyle}>
      <Posts />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});
