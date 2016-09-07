import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Alert,
} from 'react-native';
import s from './chat-room.styles';

const alert = logout => {
  const buttons = [{ text: 'CANCEL' }, { text: 'OK', onPress: logout }];
  return () => Alert.alert('LOGOUT', 'Exit chat room and return to login page?', buttons);
};

export default ({ backAction, logout }) => (
  <View style={s.topContainer}>
    <View style={s.topContainerLeft}>
      {backAction &&
        <TouchableHighlight style={s.navButton} underlayColor={'#dcf4ff'} onPress={backAction}>
          <Text>&lt; Back</Text>
        </TouchableHighlight>
      }
    </View>
    <View style={s.topContainerRight}>
      <TouchableHighlight style={s.navButton} underlayColor={'#dcf4ff'} onPress={alert(logout)}>
        <Text>Logout &gt;</Text>
      </TouchableHighlight>
    </View>
  </View>
);
