import React, {useEffect, useState} from 'react';
import {Dimensions, View, Text, InteractionManager} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import getApi from '../../utils/api';
const width = Dimensions.get('screen').width;

export default function Graph({setCurrentMood}) {
  const [data, setData] = useState([
    {created_at: '03/09/2022'},
    {created_at: '06/09/2022'},
    {created_at: '07/09/2022'},
    {created_at: '08/09/2022'},
    {created_at: '09/09/2022'},
    {created_at: '10/09/2022'},
    {created_at: '12/09/2022'},
    {created_at: '13/09/2022'},
    {created_at: '14/09/2022'},
  ]);
  const [dataSet, setDataSet] = useState([4, 5, 1, 5, 3, 4, 4, 3, 5]);
  useEffect(() => {
    getApi(
      res => {
        setData(res);
        setDataSet(res.map(ele => ele.emoji_point));
        let sum = res.reduce((a, b) => a + b.emoji_point, 0);
        setCurrentMood(Math.floor(sum / res.length));
      },
      err => {
        let sum = dataSet.reduce((a, b) => a + b, 0);
        setCurrentMood(Math.floor(sum / dataSet.length));
        console.log(err);
      },
    );
  }, []);

  return (
    <View style={{marginBottom: 50}}>
      <LineChart
        data={{
          datasets: [
            {
              data: dataSet,
            },
          ],
        }}
        getDotColor={(dataPoint, dataPointIndex) => 'green'}
        height={180}
        width={width}
        xAxis
        yAxisInterval={1} // optional, defaults to 1
        segments={Math.max(...dataSet) - Math.min(...dataSet)} // optional, defaults to 1
        verticalLabelRotation={-60}
        renderDotContent={({x, y, index, indexData}) => {
          return (
            <Text
              style={{
                position: 'absolute',
                top: y - 20,
                left: x + 2,
                color: 'green',
              }}
              key={index}>
              {indexData}
            </Text>
          );
        }}
        chartConfig={{
          backgroundColor: '#222222',
          backgroundGradientFrom: '#222222',
          backgroundGradientTo: '#222222',
          fillShadowGradientFrom: '#222222',
          fillShadowGradientTo: '#222222',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            height: 200,
            right: 100,
          },
          propsForBackgroundLines: {
            color: '#808080',
            strokeDasharray: [],
          },
          propsForVerticalLabels: {
            translateY: 40,
          },
          propsForDots: {
            r: '4',
          },
        }}
        style={{
          marginVertical: 8,
          right: 25,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          right: 12,
          justifyContent: 'space-between',
          width: width - 120,
        }}>
        {data.map((ele, index) => {
          return (
            <Text
              style={{
                color: '#fff',
                left: 6,
                marginRight: -42,
                transform: [{rotate: '-60deg'}],
              }}
              key={index}>
              {ele.created_at}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
