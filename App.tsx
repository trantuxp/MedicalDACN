
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
import {colors, fontsize, images} from './constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icons from 'react-native-vector-icons/FontAwesome5';

function App() {
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
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 10, flexDirection: 'row'}}>
        <View
          style={{
            flex: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={images.menu}
            style={{
              width: '50%',
              height: '30%',
              alignItems: 'center',
              tintColor: colors.inactive,
            }}
          />
        </View>
        <View
          style={{
            flex: 55,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Image
            source={images.logo_top}
            style={{
              width: '50%',
              height: '50%',
              alignItems: 'center',
              tintColor: colors.primary,
            }}
          />
        </View>
        <View
          style={{flex: 15, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.Text}>? Hỗ trợ</Text>
        </View>
        <View
          style={{flex: 15, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.Text}>VN EN</Text>
        </View>
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
          <View style={{height: 200}}>
            <View style={{flex: 1,}}>
              <FlatList
                style={{flex: 1}}
                horizontal
                data={products}
                renderItem={({item}) => (
                  <View style={{flex: 1}}>
                    <Image
                      source={images.logo_top}
                      style={{
                        width: 200,
                        height: 50,
                        alignItems: 'center',
                        tintColor: colors.primary,
                      }}
                    />
                    <Text>sjdfkjasdkfjkadlsj</Text>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={{height: 300}}>
            <Text>Hello world </Text>
            <Image
              source={images.home}
              style={{
                tintColor: colors.inactive,
                height: 100,
                width: 100,
                marginRight: 20,
                marginLeft: 20,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={{height: 300}}>
            <Text>Hello world </Text>
            <Image
              source={images.home}
              style={{
                tintColor: colors.inactive,
                height: 100,
                width: 100,
                marginRight: 20,
                marginLeft: 20,
              }}
              resizeMode="contain"
            />
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
  }
});


export default App;
