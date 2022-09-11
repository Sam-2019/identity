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
import {stack} from './config';
import axios from 'axios';

const App = () => {
  const [loading, setLoading] = React.useState(false);
  let countryCode = 'GH';

  const [text, updateText] = React.useState(null);
  const [data, setData] = React.useState(null);

  const [paystackData, setPaystackData] = React.useState({
    data: null,
    loading: false,
  });

  const [truecallerData, setTruecallerData] = React.useState({
    data: null,
    loading: false,
  });

  const handlePress = async () => {
    const pn = parsePhoneNumber(text, countryCode);
    const phone = pn.getNumber('significant');
    const updated = `0${phone}`;
    const accountCode = getCode(updated);
    console.log(updated);

    axios
      .get(
        `https://api.paystack.co/bank/resolve?account_number=${updated}&bank_code=${accountCode}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + stack,
          },
        },
      )
      .then(res => {
        const posts = res.data;
        setPaystackData({data: JSON.stringify(posts.data)});
      });
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
        />

        <View style={styles.pagesButton}>
          <Button onPress={handlePress} title="Search!" color="red" />
        </View>
      </View>

      <View>{loading && <Text>Loading....</Text>}</View>

      <View>{data ? <Text>{data}</Text> : null}</View>

      <View>
        {truecallerData.data && <Text>Truecaller: {truecallerData.data}</Text>}
      </View>

      <View>
        {paystackData.data && <Text>Paystack: {paystackData.data}</Text>}
      </View>
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
