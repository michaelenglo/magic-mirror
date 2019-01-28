import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { Button, Input } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    padding: 30,
  },
});

export default class CaptionSCreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <View style={{
          marginTop: 300,
          flex: 2,
        }}
        >
          <Input
            placeholder="BASIC INPUT"
            label="Caption your image"
          />
        </View>
        <View style={{ flex: 5 }} />
        <View style={{
          flex: 2,
        }}
        >
          <Button
            title="SEND"
            buttonStyle={{
              padding: 20,
              margin: 30,
              backgroundColor: '#E07A5F',
            }}
            titleStyle={{ fontWeight: '300', fontSize: 20 }}
          />
        </View>
      </View>
    );
  }
}