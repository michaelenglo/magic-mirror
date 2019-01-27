import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class ReactionSentScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2}} />
        <View style={{ flex: 2 }} >
            <Image source={require('../assets/images/success.png')} />
        </View>
        <View style={{ flex: 1 }}>
            <Text style={{ color: '#ffffff', fontSize: 40, marginLeft: 45,  marginRight: 45 }}> Your reaction has been analyzed and sent to Najla. Thanks!</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#3D405B',
    alignItems: 'center',
  },
});
