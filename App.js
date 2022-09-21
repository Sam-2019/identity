/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {parsePhoneNumber} from 'awesome-phonenumber';
import {localhost} from './config';
import axios from 'axios';

const App = () => {
  const [loading, setLoading] = React.useState(false);
  let countryCode = 'GH';

  const [text, updateText] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [data, setData] = React.useState([]);

  const handlePress = async () => {
    setLoading(true);
    setMessage(null);
    const pn = parsePhoneNumber(text, countryCode);

    if (pn.isValid() === false) {
      setLoading(false);
      setMessage('Invalid Number');
      return;
    }

    const phone = pn.getNumber('significant');
    const updated = `0${phone}`;
    try {
      axios
        .get(`https://name-node-rest-api.herokuapp.com/api/id/${updated}`)
        .then(res => {
          console.log({res: res.data});
          const posts = res.data;
          setData(posts);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  var inputHandler = text => {
    updateText(text);
  };

  const list = () => {
    return data.map(( element, index) => {
  
      return (
        <View key={index} style={{margin: 10}}>
          <Text>{JSON.stringify(element)}</Text>
        </View>
      );
    });
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={inputHandler}
          placeholder="Type an email!"
          keyboardType="email-address"
        />

        <View style={styles.pagesButton}>
          <Button onPress={handlePress} title="Search!" color="red" />
        </View>
      </View>

      <View>{loading && <Text>Loading....</Text>}</View>

      <View>{message && <Text>{message}</Text>}</View>

      {/* <View>{data ? <Text>{data}</Text> : null}</View> */}

      <View>{data.length === 0 ? null : list()}</View>

      {/* <View>
        {truecallerData.data && <Text>Truecaller: {truecallerData.data}</Text>}
      </View>

      <View>
        {paystackData.data && <Text>Paystack: {paystackData.data}</Text>}
      </View> */}
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

const prefix =
  '024' ||
  '054' ||
  '055' ||
  '059' ||
  '025' ||
  '020' ||
  '050' ||
  '027' ||
  '057' ||
  '026' ||
  '056';

const networkCodes = [
  {mtn: ['024', '054', '055', '059', '025']},
  {vodafone: ['020', '050']},
  {airteltigo: ['027', '057', '026', '056']},
];

const bankIDs = {
  mtn: {
    id: 28,
    code: 'MTN',
  },
  vodafone: {
    id: 66,
    code: 'VOD',
  },
  airteltigo: {
    id: 29,
    code: 'ATL',
  },
};

const getCode = data => {
  const slicedPhone = data.slice(0, 3);

  console.log(slicedPhone);

  if (networkCodes[0].mtn.includes(slicedPhone)) {
    return bankIDs.mtn.code;
  }

  if (networkCodes[1].vodafone.includes(slicedPhone)) {
    return bankIDs.vodafone.code;
  }

  return bankIDs.airteltigo.code;
};
