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
import SelectDropdown from 'react-native-select-dropdown';

import Markdown from 'react-native-markdown-display';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {Replace_html} from '../utilities/Replace';
import axios from 'axios';
import {ArrayBufferToBase64} from '../utilities/Convert_buffer';
import moment from 'moment';
import {
  Convert_to_DD,
  Convert_to_MM,
  Convert_to_timestamp,
  Convert_to_Day,
} from '../utilities/Convert_timestamp';

export default function BookSchedule(props) {
  const {navigation} = props;
   const route = useRoute();
   const dataDoctorById = route.params?.dataDoctorById;
   const date = route.params?.date;
   const time = route.params?.time;

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 10, flexDirection: 'row'}}>
        <Taskbar navigation={navigation}></Taskbar>
      </View>
      <View style={{flex: 90, paddingVertical: 10}}>
        <KeyboardAwareScrollView>
          {/* <FlatList
          style={{flex: 1, backgroundColor: colors.white}}
          horizontal
          data={dataDoctorById}
          renderItem={({item}) => ( */}
          <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row', paddingTop: 20}}>
              <View style={{flex: 40, alignItems: 'center'}}>
                <Image
                  source={{
                    uri: dataDoctorById.image,
                  }}
                  style={{
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                    borderColor: colors.white,
                    borderWidth: 0,
                    borderRadius: 50,
                    marginTop: 10,
                  }}
                />
              </View>
              <View style={{flex: 60}}>
                <Text
                  style={{
                    fontSize: fontsize.h3,
                    fontWeight: 'bold',
                    color: colors.black,
                  }}>
                  {dataDoctorById.positionData.valueVI},
                  {dataDoctorById.lastName} {dataDoctorById.firstName}
                </Text>
                <Text
                  style={{
                    fontSize: fontsize.h4,
                    textAlign: 'justify',
                    marginRight: 5,
                  }}>{time} - {date}</Text>
                <Text
                  style={{
                    fontSize: fontsize.h4,
                    textAlign: 'justify',
                    marginRight: 5,
                  }}>Miễn Phí Đặt lịch</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', paddingTop: 20}}>
              <View style={{flex: 50, marginLeft: 10}}>
                <Text>Họ và tên</Text>
                <TextInput
                  onChangeText={text => {}}
                  style={{borderWidth: 1, borderRadius: 10, width: '90%'}}
                />
              </View>
              <View style={{flex: 50}}>
                <Text>Số Điện Thoại</Text>
                <TextInput
                  onChangeText={text => {}}
                  style={{borderWidth: 1, borderRadius: 10, width: '90%'}}
                />
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', paddingTop: 20}}>
              <View style={{flex: 50, marginLeft: 10}}>
                <Text>Địa chỉ email</Text>
                <TextInput
                  onChangeText={text => {}}
                  style={{borderWidth: 1, borderRadius: 10, width: '90%'}}
                />
              </View>
              <View style={{flex: 50}}>
                <Text>Địa chỉ liên hệ</Text>
                <TextInput
                  onChangeText={text => {}}
                  style={{borderWidth: 1, borderRadius: 10, width: '90%'}}
                />
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', paddingTop: 20}}>
              <View style={{flex: 100, marginLeft: 25}}>
                <Text>Lý do khám bệnh</Text>
                <TextInput
                  onChangeText={text => {}}
                  style={{borderWidth: 1, borderRadius: 10, width: '90%'}}
                />
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', paddingTop: 20}}>
              <View style={{flex: 50, marginLeft: 10}}>
                <Text>Ngày sinh</Text>
                <TextInput
                  onChangeText={text => {}}
                  style={{borderWidth: 1, borderRadius: 10, width: '90%'}}
                />
              </View>
              <View style={{flex: 50}}>
                <Text>Giới tính</Text>
                <TextInput
                  onChangeText={text => {}}
                  style={{borderWidth: 1, borderRadius: 10, width: '90%'}}
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
