import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {Icons, Images} from '../constants';

export default function HomeScreen(props: object) {
  const {navigation}: any = props;

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.close} onPress={onBackPress}>
        <Image source={Icons.back_arrow} style={styles.closeIcon} />
      </TouchableOpacity>
      <View style={{flex: 0.3}}>
        <Swiper activeDotColor={'#C9C9CA'} dotColor={'#7F18D0'}>
          <SwiperItem />
          <SwiperItem />
          <SwiperItem />
          <SwiperItem />
        </Swiper>
      </View>
      <View style={{flex: 0.7}}></View>
    </View>
  );
}

const SwiperItem = () => {
  return (
    <View style={styles.swiperPage}>
      <View style={styles.card}>
        <Text style={styles.amountText}>{'$4,500.00'}</Text>
        <Text style={styles.totalBalance}>{'Total Balance'}</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonTitle}>{'Add Money'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.cardButton, {marginStart: 26}]}>
            <Text style={styles.cardButtonTitle}>{'withdraw'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  swiperPage: {
    // flex: 1,
    alignItems: 'center',
  },
  close: {
    padding: 15,
  },
  closeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  totalBalance: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    flexGrow: 1,
    width: '80%',
    height: '75%',
    padding: 10,
    backgroundColor: '#7F18D0',
    borderRadius: 6,
    alignItems: 'center',
  },
  amountText: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
  },
  cardButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 6,
  },
  cardButtonTitle: {
    color: 'black',
    fontSize: 12,
    fontWeight: '700',
  },
});
