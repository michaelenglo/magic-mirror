import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FriendPhoto extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={() => this.props.onPress()} >
        <View style={{ height: 60, display: 'flex', flexDirection: 'row', marginBottom: 40 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="user" style={{ color: '#E07A5F' }} size={40} />
          </View>

          <View style={{ flex: 4 }}>
            <Text style={{ fontSize: 30, fontWeight: '600' }}>{this.props.name}</Text>
            <Text style={{ fontSize: 25, fontWeight: '300' }}>{this.props.caption}</Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
              !this.props.read
                ? <Icon name="circle" style={{ color: 'green' }} size={40} />
                : null
            }
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}