import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CustomCardComponent from '@travnor/component';

export default function Posts() {
  const [search, setSearchData] = useState('');
  const [post, setPost] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const getData = () => {
    axios
      .get(url)
      .then(resp => {
        setPost(resp?.data);
      })
      .catch(error => {
        console.log('error');
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const postSearch = () => {
    setPost(
      post.filter(item =>
        item?.title?.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.renderItemView}>
        <CustomCardComponent
          userId={item?.userId}
          id={item?.id}
          title={item?.title}
          body={item?.body}
        />
      </View>
    );
  };

  return (
    <>
      <View style={styles.containerStyle}>
        <TextInput
          value={search}
          onChangeText={val => setSearchData(val)}
          placeholder="Search..."
          placeholderTextColor={'black'}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.touchableContainer}
          activeOpacity={0.7}
          onPress={postSearch}>
          <Text style={styles.press}>{'press'}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FlatList data={post} renderItem={renderItem} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    height: 35,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 10,
  },
  touchableContainer: {
    width: '90%',
    height: 35,
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 20,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  press: {
    alignSelf: 'center',
  },
  renderItemView: {
    paddingVertical: 10,
  },
});
