import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import NavBar from './navbar';
import MessageList from './message-list';
import s from './chat-room.styles';

export default props => {
  const messages = props.room ? props.room.messages.slice().reverse() : [];
  const backAction = () => props.navigator.pop();
  return (
    <View style={s.container}>
      <NavBar {...props} backAction={backAction} />
      <MessageList messages={messages} />
      <View style={s.inputContainer}>
        <View style={s.textContainer}>
          <TextInput style={s.input} value={props.message} onChangeText={props.updateMessage} />
        </View>
        <View style={s.sendContainer}>
          <TouchableHighlight underlayColor={'#dcf4ff'} onPress={props.sendMessage}>
            <Text style={s.sendLabel}>SEND</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};
