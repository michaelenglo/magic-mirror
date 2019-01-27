import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';

import FriendPhoto from '../components/FriendPhoto';
import { ScrollView } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tab: 'received',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
          <TouchableHighlight style={{ flex: 1, height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.setState({tab: 'received'})}>
            <Text style={{ color: '#E07A5F', fontSize: 20, fontWeight: (this.state.tab === 'received' ? '900' : '100') }} >RECEIVED</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{ flex: 1, height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}  onPress={() => this.setState({tab: 'sent'})}>
            <Text style={{ color: '#E07A5F', fontSize: 20, fontWeight: (this.state.tab === 'sent' ? '900' : '100') }} >SENT</Text>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 7 }}>
          <ScrollView>
            <FriendPhoto name={this.props.currentUser.first_name} caption="Night Out" read={false} onPress={() => this.props.navigation.navigate('ReactionCapture')} />
            <FriendPhoto name="Wedding Party" caption="Food Hunting" read={true} />
            <FriendPhoto name="Interview" caption="Night Out" read={false} />
            <FriendPhoto name="Date Night" caption="Food Hunting" read={true} />
            <FriendPhoto name="Graduation Party" caption="Night Out" read={false} />
            <FriendPhoto name="Singing Competition" caption="Food Hunting" read={true} />
            <FriendPhoto name="Girl's Night Out" caption="Night Out" read={false} />
            <FriendPhoto name="Hackathon" caption="Food Hunting" read={true} />
            <FriendPhoto name="Interview" caption="Food Hunting" read={true} />
            <FriendPhoto name="Date Night" caption="Night Out" read={false} />
            <FriendPhoto name="Job Interview" caption="Food Hunting" read={true} />
            <FriendPhoto name="Alumni Dinner" caption="Night Out" read={false} />
            <FriendPhoto name="NW Hacks 2019" caption="Food Hunting" read={true} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default connect(mapStateToProps, null)(HomeScreen);