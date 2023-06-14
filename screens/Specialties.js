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
import {colors, fontsize, images,CallURL} from '../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icons from 'react-native-vector-icons/FontAwesome5';
import VideoPlayer from 'react-native-video-player';
import {useNavigation, useRoute} from '@react-navigation/native';
import Taskbar from '../components/Taskbar';
import { Replace_html } from '../utilities/Replace';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import axios from 'axios';

export default function Specialties(props) {
  const {navigation} = props;
  const route = useRoute();

  const descriptionHTML = route.params?.descriptionHTML;

  let strSpecialtiesReplace = Replace_html(descriptionHTML);
  
  // let strSpecialties =
  //   '<h3>Thần kinh</h3> <h5>Bác sĩ Thần kinh giỏi</h5> <ul> <li>Danh sách các giáo sư, bác sĩ chuyên khoa Thần kinh giỏi:</li> <li>Các giáo sư, bác sĩ uy tín đầu ngành chuyên khoa Thần kinh đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh viện 108, Bệnh viện Đại học Y Hà Nội, Bệnh viện 103.</li> <li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hội Thần kinh Việt Nam, Hội Phẫu thuật Thần kinh...</li> <li>Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp.</li> </ul> <h5>Khám bệnh chuyên khoa Thần kinh</h5> <ul> <li>Bại Não</li> <li>Đau đầu, chóng mặt, buồn nôn</li> <li>Bệnh Pakison, bệnh tiền đình</li> <li>Bị co cơ, căng dây thần kinh</li> <li>Động kinh, có những cơn vãng ý thức</li> <li>Bị tê bì nửa mặt, chèn dây thần kinh</li> <li>Bồn chồn, lo lắng, hồi hộp, chân tay run</li> <li>Có dấu hiệu tăng động</li> <li>Co rút cổ, đau đầu với mặt, chân tay, vã mồ hôi</li> <li>Chấn thương đầu, dây thần kinh</li> <li>...</li> </ul>';
  
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 10, flexDirection: 'row'}}>
        <Taskbar navigation={navigation}></Taskbar>
      </View>

      <View style={{flex: 90, paddingHorizontal: 10, paddingVertical: 10}}>
        <KeyboardAwareScrollView style={{flex: 1}}>
          <View style={{flex: 1}}>
          
              <RichEditor
                editorStyle={{}}
                style={{fontSize: fontsize.h6}}
                placeholder="Write your cool content here :)"
                androidHardwareAccelerationDisabled={true}
                initialHeight={250}
                initialContentHTML={strSpecialtiesReplace}
              />
            
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
