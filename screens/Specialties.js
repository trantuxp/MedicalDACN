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

export default function Specialties(props) {
  const {navigation} = props;

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 10, flexDirection: 'row'}}>
        <Taskbar navigation={navigation}></Taskbar>
      </View>
      <View style={{flex: 90, paddingHorizontal: 10, paddingVertical: 20}}>
        <TouchableOpacity
          onPress={() => {
            // let canGoBack = navigation.canGoBack();
            // console.log(canGoBack);
            // navigation.goBack();
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: fontsize.h3,
              marginVertical: 10,
            }}>
            Cơ Xương Khớp
          </Text>
          <Text style={{fontWeight: 'bold'}}>Bác sĩ Cơ Xương Khớp giỏi</Text>
          <FlatList
            data={[
              {
                key: 'Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm',
              },
              {
                key: 'Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội',
              },
              {
                key: 'Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.',
              },
              {
                key: 'Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...',
              },
              {
                key: 'Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...',
              },
            ]}
            renderItem={({item}) => {
              return (
                <View style={{marginBottom: 10}}>
                  <Text
                    style={{
                      fontSize: fontsize.h5,
                      textAlign: 'justify',
                    }}>{`\u2022 ${item.key}`}</Text>
                </View>
              );
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: fontsize.h3,
              marginVertical: 10,
            }}>
            Bệnh Cơ Xương Khớp
          </Text>
          <FlatList
            data={[
              {
                key: 'Gout',
              },
              {
                key: 'Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ',
              },
              {
                key: 'Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân',
              },
              {
                key: 'Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai',
              },
              {
                key: 'Loãng xương, đau nhức xương',
              },
              {key: 'Viêm xương, gai xương'},
              {key: 'Viêm cơ, Teo cơ, chứng đau mỏi cơ'},
              {key: 'Yếu cơ, Loạn dưỡng cơ'},
              {key: 'Các chấn thương về cơ, xương, khớp'},
              {key: '...'},
            ]}
            renderItem={({item}) => {
              return (
                <View style={{marginBottom: 10}}>
                  <Text
                    style={{
                      fontSize: fontsize.h5,
                      textAlign: 'justify',
                    }}>{`\u2022 ${item.key}`}</Text>
                </View>
              );
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
