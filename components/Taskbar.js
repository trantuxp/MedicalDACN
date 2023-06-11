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

export default function Taskbar (props) {
  const {navigation} = props;
  const [canGoBack, setcanGoBack] = useState();
  
  useEffect(() => {
    setcanGoBack(navigation.canGoBack());
  }, [canGoBack]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: "#d1d0d0",
        borderBottomWidth: 3,
        backgroundColor: colors.white
      }}>
      <View
        style={{
          flex: 20,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        {canGoBack != false ? (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={images.back}
              style={{
                width: 30,
                height: 20,
                alignItems: 'center',
                tintColor: colors.inactive,
              }}
            />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        <Image
          source={images.menu}
          style={{
            width: 30,
            height: 20,
            alignItems: 'center',
            tintColor: colors.inactive,
          }}
        />
      </View>
      <View
        style={{
          flex: 50,
          paddingLeft: 10,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <Image
          source={images.logo_top}
          style={{
            width: '60%',
            height: '50%',
            alignItems: 'center',
            tintColor: colors.primary,
          }}
        />
      </View>
      <View style={{flex: 20, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.Text}>? Hỗ trợ</Text>
      </View>
      <View style={{flex: 15, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.Text}>VN EN</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
