import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface CustomCardComponent {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function CustomCardComponent(props: CustomCardComponent) {
  console.log('id', props.id);
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textTitle}>{props.title}</Text>
      <Text>{props.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'grey',
    width: 300,
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
});
