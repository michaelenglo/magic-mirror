import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { WebBrowser,  LinearGradient } from 'expo';
import axios from 'axios';
import config from '../config';


export default class AuthLoadingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      inp: '1',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
            colors={['#81B29A', '#3D405B']}
            style={styles.grad}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.test} source={require('../assets/images/MM-logo-v2.png')}/>
            </View>
            <Input label="userID" onChangeText={e => {
              console.log('hajsdfhhaklsdf', e);
              this.setState({ inp: e });
            }} value={this.state.inp} />
            <Input label="Password" />
            <Button
                title={"Forgot your password"} 
                style={styles.forgotYourPassword}
                clear
                onPress={() => this.props.navigation.navigate('Main')}
            />
            <Button
                style={styles.loginButton}
                title={"Login"}
                onPress={async () => {
                  console.log('hajsdfhhaklsdf');
                  await setUserId(this.state.inp);
                  this.props.navigation.navigate('Camera');
                }}    
            />
        </LinearGradient>
      </View>
    );
  }
}

const setUserId = async userId => {
  console.log('userId :', userId);
  const url = `https://magicmirror.lib.id/magicmirror@0.1.5/users/get/?id=${userId}`;
  console.log('url :', url);
  // const res = await axios.get(url);
  config.currentUser = {
    "id": 1,
    "first_name": "Nico",
    "last_name": "Alimin",
    "username": "nicoalmin",
    "email": "nicoalimin@yahoo.com"
  }
  console.log('config :', config);
}

// const mapDispatchToProps = (dispatch) => ({
//   setUserId: userId => dispatch({
//     type: 'SET_USER',
//     payload: userId,
//   }),
// });

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#81B29A",
    position: 'relative',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  logoContainer: {
      maxHeight: '100%',
      maxWidth: '100%',
      position: 'relative',
      overflow: 'visible',
      marginLeft: 12,
      marginRight: 12,  
      marginTop: 2,
  },
  test: {
    maxHeight: '95%',
    maxWidth: '80%'
  },
  grad: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
  },
  forgotYourPassword: {
    width: '100%',
  },
  loginButton: {
    width: '100%',
  }
});

// export default connect(null, mapDispatchToProps)(AuthLoadingScreen);
