import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { Camera, Permissions } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input } from 'react-native-elements';
import CameraBottomButtons from '../components/CameraBottomButtons';


export default class CaptionSCreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { hasCameraPermission } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <View style={{
          marginTop: 300,
          flex: 2,
        }}>
          <Input
            placeholder='BASIC INPUT'
            label="Caption your image"
          />
        </View>
        <View style={{ flex: 5 }} />
        <View style={{
          flex: 2
        }}>
          <Button
            title={"SEND"}
            buttonStyle={{
              padding: 20,
              margin: 30,
              backgroundColor: '#E07A5F',
            }}
            titleStyle={{ fontWeight: "300", fontSize: 20 }}
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    padding: 30,
  },
});
