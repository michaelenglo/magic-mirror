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
import { Button } from 'react-native-elements';
import { WebBrowser,  LinearGradient } from 'expo';

import { MonoText } from '../components/StyledText';

export default class AuthLoadingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

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
            <Button
                title={"Forgot your password"} 
                style={styles.forgotYourPassword}
                clear
                onPress={() => this.props.navigation.navigate('Main')}
            />
            <Button
                style={styles.loginButton}
                title={"Login"}
                onPress={() => this.props.navigation.navigate('Main')}    
            />
        </LinearGradient>
      </View>
    );
  }
}

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
