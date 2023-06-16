import React, {Component, useState, useEffect, useCallback} from 'react';

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
  Button
} from 'react-native';
import {colors, fontsize, images,CallURL} from '../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icons from 'react-native-vector-icons/FontAwesome5';
import VideoPlayer from 'react-native-video-player';
import {useNavigation} from '@react-navigation/native';
import Taskbar from '../components/Taskbar';
import axios from 'axios';
import {ArrayBufferToBase64} from '../utilities/Convert_buffer';
import YoutubePlayer from 'react-native-youtube-iframe';
import moment from 'moment';
import { Convert_to_DD, Convert_to_MM, Convert_to_timestamp, Convert_to_Day } from '../utilities/Convert_timestamp';

function HomeScreens() {
  // const timestamp = 1686675600000 ; // Replace this with your timestamp

  // const formattedTimestamp = moment(timestamp * 1000).format(
  //   'DD/MM/YYYY HH:mm:ss',
  // );
  
  // const dateString = moment(timestamp).format('DD');
  // console.log(dateString);

  // const date = new Date(timestamp);
  // const day = date.getDay();
  // console.log(day); // Outputs: "14/06/2021 05:20:00"

  // const concertDate = '13/06/2023';
  // const timestamp = Date.parse(concertDate.split('/').reverse().join('-'));
  // console.log(timestamp);
  const [products, setproducts] = useState([
    {
      id: 1,
      name: 'Khám chuyên khoa',
      imageUrl: 'https://thumbs.dreamstime.com/z/print-225410601.jpg',
    },
    {
      id: 2,
      name: 'Khám từ xa',
      imageUrl:
        'https://thumb.ac-illust.com/c2/c2b17b8dca7978b3e636592772aa6ef6_t.jpeg',
    },
    {
      id: 3,
      name: 'Khám tổng quát',

      imageUrl:
        'https://www.shutterstock.com/image-vector/medicine-clinical-center-icon-vector-260nw-1793768515.jpg',
    },
    {
      id: 4,
      name: 'Xét nghiệm y học',
      imageUrl:
        'data:image/png;base64,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',
    },
    {
      id: 5,
      name: 'Sức khỏe tinh thần',
      imageUrl:
        'https://icon-library.com/images/doctor-icon-png/doctor-icon-png-7.jpg',
    },
    {
      id: 6,
      name: 'Khám nha khoa',
      imageUrl:
        'https://static.vecteezy.com/system/resources/previews/000/552/953/original/tooth-vector-icon.jpg',
    },
  ]);
  const navigation = useNavigation();
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);



  const [dataSpecialty, setdataSpecialty] = useState([]);

  useEffect(() => {
    CalGetAllSpecialty();
  }, [dataSpecialty]);

  const CalGetAllSpecialty = async () => {
    axios
      .get(CallURL.URL_getAllSpecialty)

      .then(res => {
        setdataSpecialty(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  const [dataClinics, setdataClinics] = useState([]);

  useEffect(() => {
    CalGetAllClinics();
  }, [dataClinics]);

  const CalGetAllClinics = async () => {
    axios
      .get(CallURL.URL_getAllClinic)

      .then(res => {
        setdataClinics(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const [dataDoctor, setdataDoctor] = useState([]);


  
  useEffect(() => {
    CalGetAllDoctors();
  }, [dataDoctor]);

  const CalGetAllDoctors = async () => {
    axios
      .get(CallURL.URL_getAllDoctors)

      .then(res => {
        setdataDoctor(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  
  // const [dataDoctorById, setdataDoctorById] = useState([]);
  // const [dataScheduleOfDoctorById, setdataScheduleOfDoctorById] = useState([]);

  const CalGetDoctorById = async (doctorId,date) => {
    axios
      .get(CallURL.URL_getProfileDoctorById, {
        params: {
          doctorId: doctorId,
        },
      })

      .then(res => {
        // setdataDoctorById(res.data.data);
        navigation.navigate('DoctorInfo', {
          dataDoctorById: res.data.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    // axios
    //   .get(CallURL.URL_getScheduleDoctorByDate, {
    //     params: {
    //       doctorId: doctorId,
    //       date: '1686675600000',
    //     },
    //   })

    //   .then(res => {
    //     navigation.navigate('DoctorInfo', {
    //       dataDoctorById: dataDoctorById,
    //       dataScheduleOfDoctorById: res.data.data,
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
  };
  // let data = {
  //   fullName: 'ádas',
  //   phoneNumber: '0213456789',
  //   email: 'trantuxp34878@gmail.com',
  //   address: 'sadfadsfadsf',
  //   reason: 'sadfasdfasdf',
  //   date: '1686243600000',
  //   birthday: '13/06/2001',
  //   selectedGender: 'M',
  //   doctorId: '31',
  //   timeType: 'T1',
  //   language: '12321431',
  //   timeString: '9:00 - 10:00',
  //   doctorName: 'sdfasdfsdf',
  // };
  
  // // useEffect(() => {
  // //   CalGetAllSpecialty();
  // // }, [dataSpecialty]);

  // const CalGetSendmail = async data => {
  //   axios
  //     .post(CallURL.URL_getSendEmail, {
  //       data: data,
  //     })

  //     .then(res => {})
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // };
// CalGetSendmail(data);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 10, flexDirection: 'row'}}>
        <Taskbar navigation={navigation}></Taskbar>
      </View>
      <View style={{flex: 90}}>
        <KeyboardAwareScrollView style={{flex: 1}}>
          <View style={{height: 700}}>
            <ImageBackground
              source={images.header_background}
              resizeMode="cover"
              style={{flex: 1, justifyContent: 'center'}}>
              <View
                style={{
                  flex: 1,
                }}>
                <View
                  style={{
                    flex: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: fontsize.h4,
                      color: colors.white,
                      textShadowColor: 'rgba(0, 0, 0, 1)',
                      textShadowOffset: {width: -1, height: 1},
                      textShadowRadius: 10,
                      fontWeight: 'bold',
                    }}>
                    NỀN TẢNG Y TẾ
                  </Text>
                  <Text
                    style={{
                      fontSize: fontsize.h4,
                      color: colors.white,
                      textShadowColor: 'rgba(0, 0, 0, 1)',
                      textShadowOffset: {width: -1, height: 1},
                      textShadowRadius: 10,
                      fontWeight: 'bold',
                    }}>
                    CHĂM SÓC SỨC KHỎE TOÀN DIỆN
                  </Text>
                  <View
                    style={{
                      height: 50,
                      width: '90%',
                      flexDirection: 'row',
                      top: 15,
                      borderRadius: 40,
                      borderWidth: 1,
                      borderColor: 'gray',
                      backgroundColor: '#f5c816',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        top: 13,
                        marginLeft: 15,
                        zIndex: 1,
                      }}>
                      <Icons name="search" size={18} color="black" />
                    </TouchableOpacity>

                    <TextInput
                      onChangeText={text => {}}
                      placeholder="Tìm kiếm"
                      placeholderTextColor={colors.placeholder}
                      style={{
                        backgroundColor: '#f5c816',
                        height: 40,
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 50,
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 60,

                    marginHorizontal: 20,
                  }}>
                  <View style={{flex: 1, marginVertical: 10}}>
                    <View style={{flex: 30, flexDirection: 'row'}}>
                      <View
                        style={{
                          flex: 50,
                        }}>
                        <Image
                          style={{
                            marginTop: 10,
                            width: 60,
                            height: 60,
                            resizeMode: 'cover',
                            borderRadius: 50,
                            marginBottom: 10,
                            alignSelf: 'center',
                            justifyContent: 'center',
                          }}
                          source={{
                            uri: products[0].imageUrl,
                          }}
                        />

                        <Text
                          style={{
                            color: 'black',
                            fontSize: fontsize.h4,
                            textAlign: 'center',
                            textShadowColor: 'white',
                            textShadowOffset: {width: -1, height: 1},
                            textShadowRadius: 10,
                          }}>
                          {products[0].name}
                        </Text>
                      </View>
                      <View style={{flex: 50}}>
                        <Image
                          style={{
                            marginTop: 10,
                            width: 60,
                            height: 60,
                            resizeMode: 'cover',
                            borderRadius: 50,
                            marginBottom: 10,
                            alignSelf: 'center',
                            justifyContent: 'center',
                          }}
                          source={{
                            uri: products[1].imageUrl,
                          }}
                        />
                        <Text
                          style={{
                            color: 'black',
                            fontSize: fontsize.h4,
                            textAlign: 'center',
                            textShadowColor: 'white',
                            textShadowOffset: {width: -1, height: 1},
                            textShadowRadius: 10,
                          }}>
                          {products[1].name}
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 30, flexDirection: 'row'}}>
                      <View style={{flex: 50}}>
                        <Image
                          style={{
                            marginTop: 10,
                            width: 60,
                            height: 60,
                            resizeMode: 'cover',
                            borderRadius: 50,
                            marginBottom: 10,
                            alignSelf: 'center',
                            justifyContent: 'center',
                          }}
                          source={{
                            uri: products[2].imageUrl,
                          }}
                        />
                        <Text
                          style={{
                            color: 'black',
                            fontSize: fontsize.h4,
                            textAlign: 'center',
                            textShadowColor: 'white',
                            textShadowOffset: {width: -1, height: 1},
                            textShadowRadius: 10,
                          }}>
                          {products[2].name}
                        </Text>
                      </View>
                      <View style={{flex: 50}}>
                        <Image
                          style={{
                            marginTop: 10,
                            width: 60,
                            height: 60,
                            resizeMode: 'cover',
                            borderRadius: 50,
                            marginBottom: 10,
                            alignSelf: 'center',
                            justifyContent: 'center',
                          }}
                          source={{
                            uri: products[3].imageUrl,
                          }}
                        />
                        <Text
                          style={{
                            color: 'black',
                            fontSize: fontsize.h4,
                            textAlign: 'center',
                            textShadowColor: 'white',
                            textShadowOffset: {width: -1, height: 1},
                            textShadowRadius: 10,
                          }}>
                          {products[3].name}
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 30, flexDirection: 'row'}}>
                      <View style={{flex: 50}}>
                        <Image
                          style={{
                            marginTop: 10,
                            width: 60,
                            height: 60,
                            resizeMode: 'cover',
                            borderRadius: 50,
                            marginBottom: 10,
                            alignSelf: 'center',
                            justifyContent: 'center',
                          }}
                          source={{
                            uri: products[4].imageUrl,
                          }}
                        />
                        <Text
                          style={{
                            color: 'black',
                            fontSize: fontsize.h4,
                            textAlign: 'center',
                            textShadowColor: 'white',
                            textShadowOffset: {width: -1, height: 1},
                            textShadowRadius: 10,
                          }}>
                          {products[4].name}
                        </Text>
                      </View>
                      <View style={{flex: 50}}>
                        <Image
                          style={{
                            marginTop: 10,
                            width: 60,
                            height: 60,
                            resizeMode: 'cover',
                            borderRadius: 50,
                            marginBottom: 10,
                            alignSelf: 'center',
                            justifyContent: 'center',
                          }}
                          source={{
                            uri: products[5].imageUrl,
                          }}
                        />
                        <Text
                          style={{
                            color: 'black',
                            fontSize: fontsize.h4,
                            textAlign: 'center',
                            textShadowColor: 'white',
                            textShadowOffset: {width: -1, height: 1},
                            textShadowRadius: 10,
                          }}>
                          {products[5].name}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{height: 200, backgroundColor: '#fff'}}>
            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 20,
                  marginVertical: 20,
                  marginHorizontal: 10,
                }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 70, alignItems: 'flex-start'}}>
                    <Text style={{fontSize: fontsize.h5}}>
                      CHUYÊN KHOA PHỔ BIẾN
                    </Text>
                  </View>
                  <View style={{flex: 30, alignItems: 'flex-end'}}>
                    <TouchableOpacity>
                      <Text
                        style={{fontSize: fontsize.h6, color: colors.primary}}>
                        XEM THÊM
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{flex: 80}}>
                <FlatList
                  style={{flex: 1}}
                  horizontal
                  data={dataSpecialty}
                  renderItem={({item}) => (
                    <View style={{flex: 1, marginLeft: 10}}>
                      <TouchableOpacity
                        onPress={() => {
                          // let canGoBack = navigation.canGoBack();
                          // console.log(canGoBack);
                          navigation.navigate('Specialties', {
                            descriptionHTML: item.descriptionHTML,
                          });
                        }}>
                        <Image
                          source={{
                            uri: item.image,
                          }}
                          style={{
                            width: 120,
                            height: 90,
                            alignItems: 'center',
                          }}
                        />
                        <Text style={{textAlign: 'center'}}>{item.name}</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
          <View style={{height: 220}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View
                style={{
                  flex: 20,
                  marginTop: 20,
                  marginHorizontal: 10,
                }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 70, alignItems: 'flex-start'}}>
                    <Text style={{fontSize: fontsize.h5}}>
                      Cơ sở y tế nổi bật
                    </Text>
                  </View>
                  <View style={{flex: 30, alignItems: 'flex-end'}}>
                    <Text
                      style={{fontSize: fontsize.h6, color: colors.primary}}>
                      XEM THÊM
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{flex: 80}}>
                <FlatList
                  style={{flex: 1}}
                  horizontal
                  data={dataClinics}
                  renderItem={({item}) => (
                    <View
                      style={{
                        height: 150, 
                        width: 200,
                        marginLeft: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Clinics', {
                            descriptionHTML: item.descriptionHTML,
                          });
                        }}>
                        <Image
                          source={{
                            uri: item.image,
                          }}
                          style={{
                            width: 200,
                            height: 100,
                            alignItems: 'center',
                          }}
                        />
                        <Text style={{textAlign: 'center'}}>{item.name}</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
          <View style={{height: 220, backgroundColor: colors.white}}>
            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 20,
                  marginVertical: 20,
                  marginHorizontal: 10,
                }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 70, alignItems: 'flex-start'}}>
                    <Text style={{fontSize: fontsize.h5}}>
                      Bác sĩ nổi bật tuần qua
                    </Text>
                  </View>
                  <View style={{flex: 30, alignItems: 'flex-end'}}>
                    <TouchableOpacity>
                      <Text
                        style={{fontSize: fontsize.h6, color: colors.primary}}>
                        XEM THÊM
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{flex: 80}}>
                <FlatList
                  style={{flex: 1}}
                  horizontal
                  data={dataDoctor}
                  renderItem={({item}) => (
                    <View
                      style={{
                        height: 150,
                        width: 200,
                      }}>
                      <View
                        style={{
                          marginLeft: 10,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderColor: colors.inactive,
                          borderWidth: 1,
                          paddingVertical: 10,
                        }}>
                        <TouchableOpacity
                          style={{alignItems: 'center',justifyContent: 'center'}}
                          onPress={() => {
                            // let canGoBack = navigation.canGoBack();
                            // console.log(canGoBack);
                            const currentDate = moment().format('DD/MM/YYYY');
                            const currentDateTimeStamp =
                              Convert_to_timestamp(currentDate);
                            CalGetDoctorById(item.id, currentDateTimeStamp);
                          }}>
                          <Image
                            source={{
                              uri: ArrayBufferToBase64(item.image.data),
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
                          <Text style={{textAlign: 'center'}}>
                            {item.lastName + ' ' + item.firstName}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
          {/* <View style={{height: 220}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View
                style={{
                  flex: 20,
                  marginVertical: 20,
                  marginHorizontal: 10,
                }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 70, alignItems: 'flex-start'}}>
                    <Text style={{fontSize: fontsize.h5}}>CẨM NANG</Text>
                  </View>
                  <View style={{flex: 30, alignItems: 'flex-end'}}>
                    <TouchableOpacity>
                      <Text
                        style={{fontSize: fontsize.h6, color: colors.primary}}>
                        XEM THÊM
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{flex: 80}}>
                <FlatList
                  style={{flex: 1}}
                  horizontal
                  data={products}
                  renderItem={({item}) => (
                    <View style={{flex: 1, marginLeft: 10}}>
                      <Image
                        source={images.header_background}
                        style={{
                          width: 120,
                          height: 80,
                          alignItems: 'center',
                        }}
                      />
                      <Text style={{textAlign: 'center'}}>
                        sjdfkjasdkfjkadlsj
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </View> */}
          <View style={{height: 350, backgroundColor: colors.white}}>
            <View style={{flex: 1}}>
              <View
                style={{flex: 20, marginHorizontal: 10, marginVertical: 10}}>
                <Text style={{fontWeight: 'bold'}}>
                  Khoa học kỹ thuật hỗ trợ dịch vụ y tế
                </Text>
              </View>
              <View style={{flex: 80}}>
                <YoutubePlayer
                  height={300}
                  play={playing}
                  videoId={'WvjwH0fruNI'}
                  onChangeState={onStateChange}
                />
                <Button
                  title={playing ? 'pause' : 'play'}
                  onPress={togglePlaying}
                />
              </View>
            </View>
          </View>
          <View style={{height: 350, backgroundColor: colors.white}}>
            <View style={{flex: 1}}>
              <View
                style={{flex: 15, marginHorizontal: 10, marginVertical: 10}}>
                <Text style={{fontWeight: 'bold'}}>
                  Ứng dụng khoa học-kĩ thuật cao trong khám chữa bệnh
                </Text>
              </View>
              <View
                style={{flex: 70, marginHorizontal: 10, marginVertical: 10}}>
                <Text style={{textAlign: 'justify', fontSize: fontsize.h5}}>
                  Trong những năm qua, ngành Y tế Việt Nam đã đạt được những
                  thành tựu đáng khích lệ trên tất cả các lĩnh vực khám và điều
                  trị bệnh. Từ việc đầu tư, ứng dụng các trang, thiết bị, kỹ
                  thuật công nghệ cao như: phẫu thuật nội soi, tán sỏi, phẫu
                  thuật lấy thể thủy tinh ngoài bao (phương pháp Pha-co) đến các
                  kỹ thuật vi phẫu tạo hình, ứng dụng công nghệ la-de vào y học,
                  máy gia tốc trong điều trị ung thư. Thành công của việc thụ
                  tinh trong ống nghiệm; Ứng dụng thành công nhiều kỹ thuật tim
                  mạch can thiệp như: mổ tim hở, thay van tim, chụp buồng tim,
                  nong động mạch vành, bắc cầu nối động mạch vành, điều trị loạn
                  nhịp tim, v.v. Gần đây nhất, thành công bước đầu của ca ghép
                  gan được cấy ghép từ người "chết não" đầu tiên ở Việt Nam, tại
                  Bệnh viện Việt Ðức đã tiếp thêm hy vọng cho những người bệnh
                  hiểm nghèo...
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  VCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: fontsize.h6,
  },
});

export default HomeScreens;
