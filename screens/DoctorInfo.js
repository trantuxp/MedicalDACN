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
import Taskbar from '../components/Taskbar';
import Markdown from 'react-native-markdown-display';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {Replace_html} from '../utilities/Replace';
import axios from 'axios';
import {useNavigation, useRoute} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {formatCurrency} from 'react-native-format-currency';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import {
  Convert_to_DD,
  Convert_to_MM,
  Convert_to_timestamp,
  Convert_to_Day,
} from '../utilities/Convert_timestamp';

export default function DoctorInfo(props) {
  const {navigation} = props;
  const route = useRoute();
  const dataDoctorById = route.params?.dataDoctorById;
  // const dataScheduleOfDoctorById = route.params?.dataScheduleOfDoctorById;
  // console.log(dataDoctorById);
  // let str =
  //   '<h3>Phó Giáo sư, Tiến sĩ, Bác sĩ Cao cấp Nguyễn Duy Hưng</h3> <ul> <li>Phó giáo sư, Tiến sĩ, Bác sĩ cao cấp chuyên khoa Da liễu</li> <li>Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương</li> <li>Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương</li> <li>Đạt chứng chỉ Diploma về Da liễu tại Viện da liễu Băng Cốc - Thái Lan</li> <li>Bác sĩ thường xuyên tham gia các Hội thảo, Hội nghị Quốc tế về Da liễu</li> <li>Hội viên của Hội Da liễu Đông Nam Á, Châu Á và Thế giới</li> <li>Giảng viên bộ môn Da liễu tại Đại Học Y Hà Nội</li> <li>Trưởng Bộ môn Da liễu, Trường Đại học Kinh doanh và Công nghệ</li> <li>Tốt nghiệp Đại học Y Hà Nội (1977)</li> <li>Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam</li> </ul> <h5>Phó Giáo sư khám và điều trị</h5> <ul> <li>Các bệnh lý về chuyên sâu về da liễu người lớn và trẻ em</li> <li>Trứng cá thông thường thanh thiếu niên, người lớn, trứng cá do thuốc, mỹ phẩm, do bôi corticord, các thể bệnh trứng cá nặng, trứng cá đỏ (rosacea)</li> <li>Điều trị da phục hồi da tổn hại do trứng cá, sẹo trứng cá</li> <li>Các bệnh lý da mặt: viêm da dị ứng, tổn hại da do sử dụng mỹ phẩm, do corticord, lão hóa da</li> <li>Nám da, tàn nhang, sạm da, các bệnh da tăng sắc tố sau viêm, sau trứng cá, do mỹ phẩm</li> <li>Viêm da cơ địa trẻ em và người lớn</li> <li>Viêm da dị ứng, viêm da tiếp xúc, viêm da dầu</li> <li>Tổ đỉa</li> <li>Mày đay</li> <li>Bạch biến</li> <li>Vảy nến</li> <li>Rụng tóc</li> <li>Các bệnh da do nhiễm khuẩn: Viêm nang lông, chốc, nhọt, viêm da mủ</li> <li>Zona, Thủy đậu, Herpes</li> <li>Ghẻ</li> <li>Các bênh da do nấm: Nấm nông da, nấm da đầu, nấm móng tay, móng chân, lang ben, nấm men niêm mạc</li> <li>Viêm mao mạch dị ứng</li> <li>các bệnh da: Có bọng nước, bệnh vẩy phấn hồng, á vẩy nến, liken phẳng, các bệnh da dị ứng thuốc</li> <li>U lành tính của da: Đồi mồi, u cổ tuyến mồ hôi, u mềm lây, u mềm treo, u tuyến bã</li> <li>Một số bệnh lông - tóc - móng</li> <li>Chăm sóc da (skincare)  cho viêm da mặt, trứng cá, liệu trình trị nám, lăn kim, huyết tương giàu tiểu cầu, trị sẹo trứng cá, laser, plasma trị u lành da, nám, đồi mồi</li> <li>Tiêm tái sinh nang tóc</li> </ul>';
  // let strReplace2 = Replace_html(str);
  const Ngay = [
    'T2 - 12/06',
    'T3',
    'T4',
    'T5',
    'T6',
    'T7',
    'T8',
    
  ];
  const [date, setdate] = useState();

  const SevenDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(moment().add(i, 'days').format('DD/MM/YYYY'));
    }

    return days;
  };
  const days = SevenDays()
  // const days_dd = Convert_to_DD(days[0]);
  // console.log(days_dd);
  const myNumber = 123456.789;
  const renderDropdownIcon = () => (
    <Icons name="angle-down" size={20} color={colors.primary} />
  );
  const FormatNumber = (number) => {
    const formattedValue = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(number);
    return formattedValue;
  };

  const [dataScheduleOfDoctorById, setdataScheduleOfDoctorById] = useState([]);

  const CalGetScheduleDoctorByDate = async (doctorId, date) => {
    axios
      .get(CallURL.URL_getScheduleDoctorByDate, {
        params: {
          doctorId: doctorId,
          date: date,
        },
      })

      .then(res => {
        setdataScheduleOfDoctorById(res.data.data);
        // console.log(res.data.data);
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
                  }}>
                  {dataDoctorById.Markdown.description}
                </Text>
              </View>
            </View>
            <View style={{flex: 1, paddingTop: 20}}>
              <View style={{flex: 1, alignItems: 'center', marginLeft: 10}}>
                <SelectDropdown
                  buttonStyle={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.inactive,
                    height: 40,
                    width: 150,
                    alignSelf: 'flex-start',
                    backgroundColor: colors.white,
                  }}
                  color="blue"
                  renderDropdownIcon={renderDropdownIcon}
                  defaultButtonText={' '}
                  rowTextStyle={{color: colors.primary}}
                  buttonTextStyle={{color: colors.primary}}
                  data={days}
                  dropdownIconPosition="right"
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem);
                    setdate(Convert_to_timestamp(selectedItem));
                    CalGetScheduleDoctorByDate(
                      dataDoctorById.id,
                      Convert_to_timestamp((selectedItem)),
                    );
                    
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
              </View>
              <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
                <Icons name="calendar" size={20} color={colors.black} />
                <Text style={{color: colors.black, marginLeft: 10}}>
                  LỊCH KHÁM
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                  paddingBottom: 20,
                }}>
                {dataScheduleOfDoctorById != null ? (
                  <FlatList
                    style={{flex: 1}}
                    horizontal
                    data={dataScheduleOfDoctorById}
                    renderItem={({item}) => (
                      <View style={{height: 50, width: 100, marginLeft: 10}}>
                        <TouchableOpacity
                          style={{backgroundColor: colors.warning,color: colors.black}}
                          onPress={() => {
                            
                            navigation.navigate('BookSchedule', {
                              time: item.timeTypeData.valueVI,
                              date: date,
                              dataDoctorById: dataDoctorById,
                            });
                          }}>
                          <Text style={{textAlign: 'center'}}>{item.timeTypeData.valueVI}</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  />
                ) : (
                  <Text style={{color: colors.black, marginLeft: 10}}>
                    Bác sĩ không có lịch hẹn trong thời gian này, vui lòng chọn
                    thời gian khác!
                  </Text>
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                  paddingBottom: 20,
                }}>
                <Text style={{color: colors.black, margin: 10}}>
                  ĐỊA CHỈ PHÒNG KHÁM
                </Text>
                <Text
                  style={{
                    color: colors.black,
                    marginLeft: 10,
                    marginBottom: 5,
                  }}>
                  {dataDoctorById.Doctor_Infor.nameClinic}
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    marginBottom: 5,
                  }}>
                  {dataDoctorById.Doctor_Infor.addressClinic}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                  paddingBottom: 20,
                  flexDirection: 'row',
                }}>
                <Text style={{color: colors.black, margin: 10}}>GIÁ KHÁM:</Text>
                <Text style={{color: colors.black, margin: 10}}>
                  {FormatNumber(
                    dataDoctorById.Doctor_Infor.priceTypeData.valueVI,
                  )}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                paddingBottom: 20,
              }}>
              <RichEditor
                editorStyle={{}}
                style={{fontSize: fontsize.h6}}
                placeholder="Write your cool content here :)"
                androidHardwareAccelerationDisabled={true}
                initialHeight={250}
                initialContentHTML={Replace_html(
                  dataDoctorById.Markdown.contentHTML,
                )}
              />
            </View>
          </View>
          {/* )}
        /> */}
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
