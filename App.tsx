
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icons from 'react-native-vector-icons/FontAwesome5';
import VideoPlayer from 'react-native-video-player';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreens from './screens/HomeScreen';
import Specialties from './screens/Specialties';
import Clinics from './screens/Clinics';
import DoctorInfo from './screens/DoctorInfo';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreens"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreens" component={HomeScreens} />
        <Stack.Screen name="Specialties" component={Specialties} />
        <Stack.Screen name="Clinics" component={Clinics} />
        <Stack.Screen name="DoctorInfo" component={DoctorInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
