import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default class ReactionSentScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2}} />
        <View style={{ flex: 2 }} >
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Image source={require('../assets/images/success.png')} />
          </TouchableOpacity>
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
