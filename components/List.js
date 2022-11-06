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
        <>{data.name ? <Text>{data.name}</Text> : null}</>
        <>{data.other_name ? <Text>{data.other_name}</Text> : null}</>
        <>{data.email ? <Text>{data.email}</Text> : null}</>
        <>{data.gender ? <Text>{data.gender}</Text> : null}</>
        <>{data.countryCode ? <Text>{data.countryCode}</Text> : null}</>
        <>{data.e164Format ? <Text>{data.e164Format}</Text> : null}</>
        <>{data.numberType ? <Text>{data.numberType}</Text> : null}</>
        <>{data.bank_id ? <Text>{data.bank_id}</Text> : null}</>
        <>
          {data.image ? (
            <Image source={{uri: data.image}} style={styles.image} />
          ) : null}
        </>
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
