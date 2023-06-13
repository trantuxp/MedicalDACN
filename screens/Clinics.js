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
import {useNavigation, useRoute} from '@react-navigation/native';
import Markdown from 'react-native-markdown-display';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import { Replace_html } from './utilities/Replace';
import axios from 'axios';
import { ArrayBufferToBase64 } from './utilities/Convert_buffer';

export default function Clinics(props) {
  const {navigation} = props;
  const route = useRoute();
  const descriptionHTML = route.params?.descriptionHTML;

  let strClinicReplace = Replace_html(descriptionHTML);
 
  const [data, setdata] = useState([]);

  useEffect(() => {
    calGetUrl();
  }, [data]);
  
  const calGetUrl = async () => {
    axios
      .get('http://192.168.2.14:8080/api/get-all-doctors')

      .then(res => {
        setdata(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 10, flexDirection: 'row'}}>
        <Taskbar navigation={navigation}></Taskbar>
      </View>
      <View style={{flex: 90, paddingVertical: 10}}>

        <KeyboardAwareScrollView
          style={{flex: 1, backgroundColor: colors.white}}>
          <Text
            style={{
              fontSize: fontsize.h2,
              color: '#22bad8',
              fontWeight: 'bold',
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            Bệnh viện Hữu nghị Việt Đức
          </Text>

          <RichEditor
            editorStyle={{}}
            style={{fontSize: fontsize.h6}}
            placeholder="Write your cool content here :)"
            androidHardwareAccelerationDisabled={true}
            initialHeight={250}
            initialContentHTML={strClinicReplace}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
