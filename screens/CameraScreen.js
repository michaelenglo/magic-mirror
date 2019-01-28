import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { Camera, Permissions } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import CameraBottomButtons from '../components/CameraBottomButtons';


export default class CameraScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.front,
      photoTaken: null,
    };

    this.renderPreviewPhoto = this.renderPreviewPhoto.bind(this);
    this.snap = this.snap.bind(this);
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async snap() {
    try {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        this.setState({
          photoTaken: photo,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  renderPreviewPhoto() {
    console.log(this.state.photoTaken.uri);
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
          }}
          source={{ uri: this.state.photoTaken.uri }}
        >
          <View
            style={{
              flex: 3,
              backgroundColor: 'transparent',
              flexDirection: 'column',
              display: 'flex',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                marginRight: 'auto',
              }}
            >
              <Icon
                name='remove'
                color="#ffffff"
                size={50}
                style={{
                  margin: 20,
                  alignSelf: 'flex-end'
                }}
                onPress={() => this.setState({ photoTaken: null })}
              />
            </TouchableOpacity>

            <View style={{ flex: 9 }} />

            <TouchableOpacity
              style={{
                flex: 2,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 'auto',
              }}
            >
              <Icon
                name='send'
                color="#ffffff"
                size={50}
                style={{
                  margin: 20,
                  padding: 25,
                  alignSelf: 'flex-end',
                  borderRadius: 50,
                  backgroundColor: '#E07A5F',
                }}
                onPress={() => this.props.navigation.navigate('Caption')}
              />
            </TouchableOpacity>
          </View>



        </ImageBackground>
      </View>
    );
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (this.state.photoTaken) {
      console.log('hehe');
      return this.renderPreviewPhoto();
    }

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={cam => { this.camera = cam; }}>
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

              <View style={{ flex: 8 }} />

              <View
                style={{
                  flex: 2,
                  display: 'flex',
                  flexDirection: 'row'
                }}
              >
                <CameraBottomButtons snap={this.snap} />
              </View>
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
    backgroundColor: '#fff',
  },
});
