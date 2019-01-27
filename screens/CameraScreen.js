import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Camera, Permissions } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import CameraBottomButtons from '../components/CameraBottomButtons';


export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.front,
    };
  }
  
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'column',
                display: 'flex',
              }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Icon 
                    name='flash' 
                    color="#ffffff"
                    size={50}
                    style={{
                      margin: 20,
                      alignSelf: 'flex-end'
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Icon 
                    name='refresh' 
                    color="#ffffff"
                    size={50}
                    style={{
                      margin: 20,
                      alignSelf: 'flex-end'
                    }}
                    onPress={() => {
                      this.setState({
                        type: this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                      });
                    }}
                  />
                </TouchableOpacity>

                <View style={{flex: 8}} />
                
                <View
                  style={{
                    flex: 2,
                    display: 'flex',
                    flexDirection: 'row'
                  }}  
                >
                  <CameraBottomButtons />
                </View>


              {/* <TouchableOpacity
                style={{
                  flex: 0.2,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity> */}
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
