import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function List({data}) {
  if (!data) {
    return (
      <View style={styles.view}>
        <Text>No Data</Text>
      </View>
    );
  }

  return (
    <View style={styles.view}>
      <View>
        <Text>{data.name}</Text>
        <Text>{data.other_name}</Text>
        <Text>{data.email}</Text>
        <Text>{data.gender}</Text>
        <Text>{data.countryCode}</Text>
        <Text>{data.e164Format}</Text>
        <Text>{data.numberType}</Text>
        <Text>{data.bank_id}</Text>
        <Image source={{uri: data.image}} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  image: {
    width: 350,
    height: 400,
  },
});
