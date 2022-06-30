import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {Button} from '../components';
import {Icons, Images} from '../constants';

export default function IntroScreen(props: object) {
  const {navigation}: any = props;

  const onGetStarted = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.close}>
        <Image source={Icons.close} style={styles.closeIcon} />
      </TouchableOpacity>
      <View style={{flex: 0.6}}>
        <Swiper activeDotColor={'#7F18D0'} dotColor={'#C9C9CA'}>
          <SwiperItem />
          <SwiperItem />
          <SwiperItem />
        </Swiper>
      </View>
      <View style={{flex: 0.4, marginHorizontal: 24}}>
        <Button title={'Get Started'} onPress={onGetStarted} />
      </View>
    </View>
  );
}

const SwiperItem = () => {
  return (
    <View style={styles.swiperPage}>
      <Image source={Images.swiper_image_1} />
      <Text style={styles.titleText}>
        {'3KLE invests your money intelligently in stocks'}
      </Text>
      <Text style={styles.descriptionText}>
        {'Build, perserve and manage your family wealth with stocks investment'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  swiperPage: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  descriptionText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginHorizontal: 60,
    marginTop: 10,
  },
  close: {
    padding: 15,
  },
  closeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
