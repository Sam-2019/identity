/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import {parsePhoneNumber} from 'awesome-phonenumber';
import {localhost, prodhost, auth_token} from './config';
import axios from 'axios';

const App = () => {
  axios.defaults.headers.common['Authorization'] = auth_token;

  const [loading, setLoading] = React.useState(false);
  let countryCode = 'GH';

  const [text, updateText] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [data, setData] = React.useState(null);

  const handlePress = async () => {
    setLoading(true);
    setMessage(null);
    setData(null);
    const pn = parsePhoneNumber(text, countryCode);

    if (pn.isValid() === false) {
      setLoading(false);
      setMessage('Invalid Number');
      return;
    }

    const phone = pn.getNumber('significant');
    const updated = `0${phone}`;

    try {
      axios.get(`${localhost}/${updated}`).then(res => {
        const posts = res.data;
        setData(posts);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      setMessage(error);
    }
  };

  var inputHandler = text => {
    updateText(text);
  };

  const list2 = () => {
    return (
      <View style={{margin: 10}}>
        {!data ? (
          <Text>No Data</Text>
        ) : (
          <View>
            <Text>{data.name}</Text>
            <Text>{data.other_name}</Text>
            <Text>{data.email}</Text>
            <Text>{data.gender}</Text>
            <Text>{data.image}</Text>
            <Text>{data.countryCode}</Text>
            <Text>{data.e164Format}</Text>
            <Text>{data.numberType}</Text>
            <Text>{data.bank_id}</Text>
            <Image
              source={{uri: data.image}}
              style={{width: 400, height: 400}}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={inputHandler}
          placeholder="Type an email!"
          keyboardType="email-address"
          defaultValue={text}
        />

        <View style={styles.pagesButton}>
          <Button onPress={handlePress} title="Search!" color="red" />
        </View>
      </View>

      <View>{loading ? <Text>Loading....</Text> : list2()}</View>

      <View>{message && <Text>{message}</Text>}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },

  input: {
    width: '80%',
    padding: 5,
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 22,
    textAlign: 'center',
    backgroundColor: 'lightgrey',
    borderColor: 'black',
  },
});

export default App;
