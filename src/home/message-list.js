import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import s from './chat-room.styles';
import profileIcon from '../assets/profileIcon.png';

export default ({ messages }) => (
  <View style={s.chatContainer}>
    <ScrollView scrollEventThrottle={16}>
      {messages.map((item, index) => (
        <View style={s.listItem} key={index}>
          <View style={s.listIcon}>
            <Image
              style={s.channelIcon}
              defaultSource={profileIcon}
              source={profileIcon}
            />
          </View>
          <View style={s.listInfo}>
            <Text style={s.titleLabel}>{item.message}</Text>
            <Text style={s.memberLabel}>{item.username}</Text>
            <Text style={s.memberLabel}>{moment(item.createdAt).fromNow()}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);
