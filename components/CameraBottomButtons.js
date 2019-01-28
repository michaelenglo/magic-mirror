import React from 'react';
import {
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CameraBottomButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 35,
        paddingRight: 35,
      }}
      >
        <Icon
          name="image"
          color="#ffffff"
          size={50}
        />

        <Icon
          name="circle-o"
          color="#ffffff"
          size={100}
          onPress={() => this.props.snap()}
        />

        <Icon
          name="user"
          color="#ffffff"
          size={50}
        />
      </View>
    );
  }
}
