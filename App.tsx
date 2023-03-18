import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Moodalytics from '@travnor/screen/moodalytics';
// import Moodalytics from '@travnor/screen/moodalytics';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Moodalytics />
    </View>
  );
}

const styles = StyleSheet.create({});
