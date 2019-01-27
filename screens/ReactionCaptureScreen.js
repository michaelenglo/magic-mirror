import React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableHighlight, Text, ImageBackground, Image } from 'react-native';
import { Camera, Permissions } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import CameraBottomButtons from '../components/CameraBottomButtons';


export default class CameraScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: null,
      photoTaken: null,
      countDown: 4,
    };

    this.renderPreviewPhoto = this.renderPreviewPhoto.bind(this);
    this.snap = this.snap.bind(this);
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });

    // update every second
    // VERY HACKY BUT IT'S HACKATHON... YOU KNOW :)
    setTimeout(() => {
      this.setState({ countDown: this.state.countDown - 1 });
    }, 2000);
    setTimeout(() => {
      this.setState({ countDown: this.state.countDown - 1 });
    }, 3000);
    setTimeout(() => {
      this.setState({ countDown: this.state.countDown - 1 });
    }, 4000);
    setTimeout(() => {
      this.setState({ countDown: this.state.countDown - 1 });
    }, 5000);
    setTimeout(() => {
      this.setState({ countDown: this.state.countDown - 1 });
      this.snap();
    }, 6000);
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
              />
            </TouchableOpacity>
          </View>



        </ImageBackground>
      </View>
    );
  }

  // renderWebcam() {
  //   const { hasCameraPermission } = this.state;
  //   // if (this.state.photoTaken) {
  //   //   console.log('hehe');
  //   //   return this.renderPreviewPhoto();
  //   // }

  //   if (hasCameraPermission === null) {
  //     return <View />;
  //   } else if (hasCameraPermission === false) {
  //     return <Text>No access to camera</Text>;
  //   } else {
  //     return (
  //       <View style={{
  //         flex: 1,
  //         backgroundColor: '#fff',
  //       }}>
  //         <Camera style={{ flex: 1 }} type={this.state.type} ref={cam => { this.camera = cam; }}>
  //           <View
  //             style={{
  //               flex: 1,
  //               backgroundColor: 'transparent',
  //               flexDirection: 'column',
  //               display: 'flex',
  //             }}>
  //             <TouchableOpacity
  //               style={{
  //                 flex: 1,
  //                 display: 'flex',
  //                 flexDirection: 'column',
  //               }}
  //             >
  //               <Icon
  //                 name='flash'
  //                 color="#ffffff"
  //                 size={50}
  //                 style={{
  //                   margin: 20,
  //                   alignSelf: 'flex-end'
  //                 }}
  //               />
  //             </TouchableOpacity>

  //             <TouchableOpacity
  //               style={{
  //                 flex: 1,
  //                 display: 'flex',
  //                 flexDirection: 'column',
  //               }}
  //             >
  //               <Icon
  //                 name='refresh'
  //                 color="#ffffff"
  //                 size={50}
  //                 style={{
  //                   margin: 20,
  //                   alignSelf: 'flex-end'
  //                 }}
  //                 onPress={() => {
  //                   this.setState({
  //                     type: this.state.type === Camera.Constants.Type.back
  //                       ? Camera.Constants.Type.front
  //                       : Camera.Constants.Type.back,
  //                   });
  //                 }}
  //               />
  //             </TouchableOpacity>

  //             <View style={{ flex: 8 }} />

  //             <View
  //               style={{
  //                 flex: 2,
  //                 display: 'flex',
  //                 flexDirection: 'row'
  //               }}
  //             >
  //               <CameraBottomButtons snap={this.snap} />
  //             </View>
  //           </View>
  //         </Camera>
  //       </View>
  //     );
  //   }
  // }

  render() {
    const { hasCameraPermission } = this.state;

    let counter = this.state.countDown;
    if (this.state.countDown >= 4) {
      counter = 'READY';
    } else if (this.state.countDown <= 0){
      counter = '';
    }

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={this.state.countDown > 0 ? null : require('../assets/images/IMG_1265.jpg')}
            style={{ flex: 1, backgroundColor: '#000000' }}
          >
            <View style={{
              flex: 3,
              justifyContent: 'flex-start'
            }}>
              {
                this.state.photoTaken
                ? <Image source={{ uri: this.state.photoTaken.uri }} style={{
                  backgroundColor: '#000000',
                  width: 145,
                  height: 200,
                  marginTop: 20,
                  marginLeft: 20
                }} />
                : <Camera style={{
                  backgroundColor: '#000000',
                  width: 145,
                  height: 200,
                  marginTop: 20,
                  marginLeft: 20
                }}
                  type={Camera.Constants.Type.front}
                  ref={cam => { this.camera = cam; }} />
              }
            </View>
            <View
              style={{
                flex: 8,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: 'white', fontSize: 120 }}>{counter}</Text>
            </View>
            <View style={{ flex: 1, display: 'flex', flexDirection: 'row', backgroundColor: '#ffffff', height: '100%', width: '100%' }}>
              <TouchableHighlight style={{ flex: 1, height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#E07A5F'}} >ACTUAL REACTION</Text>
              </TouchableHighlight>
              <TouchableHighlight  style={{ flex: 1, height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#E07A5F'}} >ANONYMOUS REACTION</Text>
              </TouchableHighlight>
            </View>
          </ImageBackground>
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
