import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import cookie from '../assets/cookie.jpg';
import s from './styles';

export default props => (
  <View style={s.loginContainer}>
    <Image source={cookie} />
    <Text style={s.header}>Crumbs</Text>
    <TextInput
      style={s.input}
      value={props.username}
      onChangeText={props.updateUsername}
      placeholder={'Enter Username'}
      maxLength={12}
      multiline={false}
    />
    <TextInput
      style={s.input}
      secureTextEntry
      value={props.password}
      onChangeText={props.updatePassword}
      placeholder={'Enter Password'}
      maxLength={12}
      multiline={false}
    />
    {props.children}
  </View>
);
