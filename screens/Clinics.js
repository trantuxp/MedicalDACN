import React, {Component, useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {colors, fontsize, images} from '../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icons from 'react-native-vector-icons/FontAwesome5';
import VideoPlayer from 'react-native-video-player';
import Taskbar from '../components/Taskbar';
import Markdown from 'react-native-markdown-display';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';

export default function Clinics(props) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 10, flexDirection: 'row'}}>
        <Taskbar navigation={navigation}></Taskbar>
      </View>
      <View style={{flex: 90, paddingHorizontal: 10, paddingVertical: 20}}>
        <KeyboardAwareScrollView style={{flex: 1}}>
          <RichEditor
            placeholder="Write your cool content here :)"
            androidHardwareAccelerationDisabled={true}
            style={styles.richTextEditorStyle}
            initialHeight={250}
            initialContentHTML={
              '<ol> <li>Gói 1:</li> </ol> <ul> <li>Khám Giáo sư, Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa II - Chi phí 500.000 đồng/lần khám</li> <li>Khám với bác sĩ Trưởng khoa hoặc Phó khoa - Chi phí 500.000 đồng/lần khám</li> </ul> <ol start="2"> <li>Gói 2:</li> </ol>'
            }
          />
        </KeyboardAwareScrollView>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({});
