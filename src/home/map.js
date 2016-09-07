import React from 'react';
import {
  View,
  MapView,
  TouchableHighlight,
  Text,
} from 'react-native';
import NavBar from './navbar';
import s from './map.styles';

export default props => {
  const { exists, joinRoom, createRoom } = props;
  const onPress = exists ? joinRoom : createRoom;
  return (
    <View style={s.container}>
      <NavBar {...props} />
      <MapView style={s.map} showsUserLocation followUserLocation />
      <TouchableHighlight style={s.button} underlayColor={'#dcf4ff'} onPress={onPress}>
        <Text style={s.buttonText}>{`${exists ? 'Join' : 'Create'} Room!`}</Text>
      </TouchableHighlight>
    </View>
  );
};
