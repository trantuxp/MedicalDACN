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
import {useNavigation} from '@react-navigation/native';
import Taskbar from '../components/Taskbar';

function HomeScreens() {
  const [products, setproducts] = useState([
    {
      id: 1,
      name: 'Giảm đau, hạ sốt',
      imageUrl:
        'https://nhathuocviet.vn/data/items/4981/thuoc-giam-dau-ha-sot-partamol-500mg.png',
    },
    {
      id: 2,
      name: 'Huyết áp, tim mạch',
      imageUrl:
        'https://nhathuocviet.vn/data/items/3762/Thuoc-Zekof-80_10-1720.jpg',
    },
    {
      id: 3,
      name: 'Cơ xương khớp, gút',

      imageUrl:
        'https://nhathuocviet.vn/data/items/1583/e9b0f8578_635406922655430000_HasThumb.jpg',
    },
    {
      id: 4,
      name: 'Da liễu, dị ứng',
      imageUrl:
        'https://nhathuocviet.vn/data/items/4654/thuoc-dieu-tri-mun-trung-ca-nang-acnotin-20.jpg',
    },
  ]);
  const navigation = useNavigation();

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
                  <View style={{flex: 50, alignItems: 'flex-start'}}>
                    <Text style={{fontSize: fontsize.h6}}>
                      CHUYÊN KHOA PHỔ BIẾN
                    </Text>
                  </View>
                  <View style={{flex: 50, alignItems: 'flex-end'}}>
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
                      <TouchableOpacity
                        onPress={() => {
                          // let canGoBack = navigation.canGoBack();
                          // console.log(canGoBack);
                          navigation.navigate('Specialties');
                        }}>
                        <Image
                          source={images.header_background}
                          style={{
                            width: 120,
                            height: 80,
                            alignItems: 'center',
                          }}
                        />
                        <Text>Thần kinh</Text>
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
                  marginVertical: 20,
                  marginHorizontal: 10,
                }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 50, alignItems: 'flex-start'}}>
                    <Text style={{fontSize: fontsize.h6}}>
                      Cơ sở y tế nổi bật
                    </Text>
                  </View>
                  <View style={{flex: 50, alignItems: 'flex-end'}}>
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
                  data={products}
                  renderItem={({item}) => (
                    <View style={{flex: 1, marginLeft: 10}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Clinics');
                        }}>
                        <Image
                          source={images.header_background}
                          style={{
                            width: 120,
                            height: 80,
                            alignItems: 'center',
                          }}
                        />
                        <Text>sjdfkjasdkfjkadlsj</Text>
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
                  <View style={{flex: 50, alignItems: 'flex-start'}}>
                    <Text style={{fontSize: fontsize.h6}}>
                      Bác sĩ nổi bật tuần qua
                    </Text>
                  </View>
                  <View style={{flex: 50, alignItems: 'flex-end'}}>
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
                    <View
                      style={{
                        flex: 1,
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
                          style={{
                           
                            alignItems: 'center',
                            justifyContent: 'center',
                           
                          }}
                          onPress={() => {
                            // let canGoBack = navigation.canGoBack();
                            // console.log(canGoBack);
                            navigation.navigate('DoctorInfo');
                          }}>
                          <Image
                            source={images.header_background}
                            style={{
                              width: 80,
                              height: 80,
                              alignItems: 'center',
                              borderColor: colors.white,
                              borderWidth: 0,
                              borderRadius: 50,
                            }}
                          />

                          <Text>sjdfkjasdkfjkadlsj</Text>
                        </TouchableOpacity>
                      </View>
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
                  marginVertical: 20,
                  marginHorizontal: 10,
                }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 50, alignItems: 'flex-start'}}>
                    <Text style={{fontSize: fontsize.h6}}>CẨM NANG</Text>
                  </View>
                  <View style={{flex: 50, alignItems: 'flex-end'}}>
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
                      <Text>sjdfkjasdkfjkadlsj</Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
          <View style={{height: 350, backgroundColor: colors.white}}>
            <View style={{flex: 1}}>
              <View
                style={{flex: 20, marginHorizontal: 10, marginVertical: 10}}>
                <Text style={{fontWeight: 'bold'}}>
                  Khoa học kỹ thuật hỗ trợ dịch vụ y tế
                </Text>
              </View>
              <View style={{flex: 80}}>
                <VideoPlayer
                  video={{
                    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                  }}
                  videoWidth={200}
                  videoHeight={140}
                  autoplay={false}
                  defaultMuted={true}
                  showDuration={true}
                  thumbnail={{
                    uri: 'https://i.picsum.photos/id/866/1600/900.jpg',
                  }}
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
