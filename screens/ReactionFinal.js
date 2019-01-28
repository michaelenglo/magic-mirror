//https://magicmirrorblob.blob.core.windows.net/magic-mirror-dev/image-2019-01-27T22:12:10.216Z.jpg
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class ReactionFinal extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/mi.jpg')} style={{width: '100%', height: '100%'}}/>
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
