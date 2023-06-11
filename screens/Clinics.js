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

const copy = `# h1 Heading 8-)
 
**This is some bold text!**
 
This is normal text
`;

export default function Specialties(props) {
  const {navigation} = props;
  const [doctorInfo, setDoctorInfo] = useState([
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
  ]);
  const [diseases, setDiseases] = useState([
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
  ]);

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
      {/* <View style={{flex: 90, paddingHorizontal: 10, paddingVertical: 20}}>
        <KeyboardAwareScrollView style={{flex: 1}}>
          <View style={{height: 450}}>
            <Text
              style={{
                color: '#000',
                fontSize: fontsize.h3,
                marginVertical: 10,
              }}>
              Cơ Xương Khớp
            </Text>
            <Text style={{color: '#000'}}>Bác sĩ Cơ Xương Khớp giỏi</Text>
            {doctorInfo.map((item, index) => (
              <View style={{marginBottom: 10}} key={index}>
                <Text
                  style={{
                    fontSize: fontsize.h5,
                    textAlign: 'justify',
                  }}>{`\u2022 ${item.key}`}</Text>
              </View>
            ))}
          </View>
          <View style={{height: 450}}>
            <Text
              style={{
                color: '#000',
                fontSize: fontsize.h3,
                marginVertical: 10,
              }}>
              Bệnh Cơ Xương Khớp
            </Text>
            {diseases.map((item, index) => (
              <View style={{marginBottom: 10}} key={index}>
                <Text
                  style={{
                    fontSize: fontsize.h5,
                    textAlign: 'justify',
                  }}>{`\u2022 ${item.key}`}</Text>
              </View>
            ))}
          </View>
          {/* <FlatList
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
          /> */}

      {/* <FlatList
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
        </KeyboardAwareScrollView>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({});
