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
import {prefix} from './constants';

import {searchPaystack, searchTruecaller} from './functions';

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
    if (!text) {
      setData('No data');
      setTruecallerData({
        data: null,
      });
      setPaystackData({
        data: null,
        loading: false,
      });

      return;
    }

    setLoading(true);

    setTruecallerData({
      loading: true,
    });

    setPaystackData({
      loading: true,
    });

    const pn = parsePhoneNumber(text, countryCode);

    if (pn.isValid() === false) {
      setData('Invalid phone number');
      return;
    }

    const resultTruecaller = searchTruecaller(pn);
    const resultPaystack = searchPaystack(pn);

    if (resultPaystack) {
      setTruecallerData({
        data: resultTruecaller._W,
        loading: false,
      });
    }

    if (resultPaystack) {
      setPaystackData({
        data: resultPaystack,
        loading: false,
      });
    }

    setLoading(false);
    setData('');
  };

  var inputHandler = text => {
    let result = text.startsWith(prefix);

    if (!result) {
      console.log('error');
      return;
    }

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

      <View>{data ? <Text>No data</Text> : null}</View>

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
