import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import Mood from '@travnor/components/card/mood';
import TeamMood from '@travnor/components/card/teamMood';
import User from '@travnor/components/card/user';
import Graph from '@travnor/components/graph';
import Heading from '@travnor/components/heading';
import Heading2 from '@travnor/components/heading/heading2';
import Separator from '@travnor/components/separator';
import styles from './style';

export default function Moodalytics() {
  const [currentMood, setCurrentMood] = useState(1);
  console.log('currentMood1', currentMood);
  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView>
        <View style={styles.parentView}>
          <User />
          <Mood />
          <Separator width={'95%'} />
          <Heading
            icon={require('../../images/speed.png')}
            label={'Team Mood'}
          />
          <TeamMood currentMood={currentMood} />
          <Heading2 currentMood={currentMood} />
          <Graph setCurrentMood={setCurrentMood} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
