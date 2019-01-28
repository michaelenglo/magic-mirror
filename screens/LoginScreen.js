import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';

import MMLogoV2 from '../assets/images/MM-logo-v2.png';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#81B29A',
    position: 'relative',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
    maxWidth: '80%',
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
  },
});

class LoginScreen extends React.Component {
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
            <Image style={styles.test} source={MMLogoV2} />
          </View>
          <Input
            label="userID"
            onChangeText={(e) => {
              this.setState({ inp: e });
            }}
            value={this.state.inp}
          />
          <Input label="Password" />
          <Button
            title="Forgot your password"
            style={styles.forgotYourPassword}
            clear
            onPress={() => this.props.navigation.navigate('Main')}
          />
          <Button
            style={styles.loginButton}
            title="Login"
            onPress={() => {
              this.props.setUserId(this.state.inp);
              this.props.navigation.navigate('Main');
            }}
          />
        </LinearGradient>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUserId: userId => dispatch({
    type: 'SET_USER',
    payload: userId,
  }),
});

export default connect(null, mapDispatchToProps)(LoginScreen);
