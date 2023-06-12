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
import { Replace_html } from './utilities/Replace';
import axios from 'axios';

export default function Clinics(props) {
  const {navigation} = props;
  let str = '<h3>GIỚI THIỆU</h3> <h3>Địa chỉ:  Bệnh viện có nhiều cổng, bệnh nhân đến khám sẽ đến cổng:</h3> <ul> <li>Số 16 - 18 Phủ Doãn, Hoàn Kiếm, Hà Nội</li> </ul> <h3>Thời gian làm việc: Thứ 2 đến thứ 7</h3> <ul> <li>Sáng: 7h00 - 12h00</li> <li>Chiều: 13h30 - 16h30</li> </ul> <p>Bệnh viện Việt Đức là một trong 5 bệnh viện tuyến Trung ương, hạng đặc biệt của Việt Nam. Bệnh viện có lịch sử trên 100 năm, bề dày truyền thống danh tiếng, là cái nôi của ngành ngoại khoa Việt Nam gắn liền với những thành tựu Y học quan trọng của đất nước.</p> <p>Việt Đức là địa chỉ uy tín hàng đầu về ngoại khoa, tiến hành khám bệnh, chữa bệnh và thực hiện các kỹ thuật chụp chiếu, xét nghiệm, thăm dò chức năng cơ bản và chuyên sâu hàng ngày cho người dân.</p> <p>Bệnh viện có đội ngũ y bác sĩ hùng hậu, nhiều người kiêm là cán bộ giảng dạy tại Đại học Y khoa Hà Nội hoặc Khoa Y Dược - Đại học Quốc gia Hà Nội. Trong số họ nhiều người là chuyên gia đầu ngành và bác sĩ giàu kinh nghiệm ở các chuyên khoa khác nhau.</p> <h3>Lưu ý quan trọng</h3> <ul> <li>Bệnh viện có nhiều khu khám bệnh, do đó để thuận tiện và tiết kiệm thời gian khi đi khám, người bệnh nên tìm hiểu kĩ về vị trí khu khám bệnh của mình trước khi đi khám.</li> <li>Bệnh viện Hữu nghị Việt Đức là bệnh viện chuyên về Ngoại khoa, vì vậy, lịch các bác sĩ thường linh động và ưu tiên khám cho các ca cấp cứu.</li> <li>Người bệnh nên chủ động chuẩn bị một số câu hỏi liên quan đến tình trạng của mình trước khi đi khám để hành trình khám bệnh được hiệu quả hơn.</li> </ul> <h3>Chi phí khám</h3> <p>Người bệnh có thể lựa chọn một trong các gói khám sau:</p> <ol> <li>Gói 1:</li> </ol> <ul> <li>Khám Giáo sư, Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa II - Chi phí 500.000 đồng/lần khám</li> <li>Khám với bác sĩ Trưởng khoa hoặc Phó khoa - Chi phí 500.000 đồng/lần khám</li> </ul> <ol start="2"> <li>Gói 2:</li> </ol> <ul> <li>Khám Thạc sĩ, Bác sĩ Chuyên khoa I - Chi phí: 300.000 đồng/lần khám</li> </ul>';
  let strReplace2 = Replace_html(str);
 
  const [data, setdata] = useState([]);

  useEffect(() => {
    calGetUrl();
  }, [data]);
  const arrayBufferToBase64 = buffer => {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const imagebase64 = window.btoa(binary);
    return imagebase64;
  };
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
        <FlatList
          data={data}
          key={data.id}
          renderItem={({item}) => (
            <Image
              source={{
                uri:
                  'data:image/jpeg;base64,' +
                  arrayBufferToBase64(item.image.data),
              }}
              style={{
                width: 80,
                height: 80,
                alignItems: 'center',
                borderColor: colors.white,
                borderWidth: 0,
                borderRadius: 50,
              }}
            />
          )}
        />
        {/* <KeyboardAwareScrollView
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
            initialContentHTML={strReplace2}
          /> 
        </KeyboardAwareScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
