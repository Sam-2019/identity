import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {parsePhoneNumber} from 'awesome-phonenumber';
import {localhost, prodhost, auth_token} from '../config';
import axios from 'axios';
import List from './List';

const Search = () => {
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

      {loading ? <Text>Loading....</Text> : <List data={data} />}
      {message && <Text>{message}</Text>}
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

export default Search;
