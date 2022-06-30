import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Icons, Images} from '../constants';

export default function HomeScreen(props: object) {
  const {navigation}: any = props;

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={onBackPress}>
        <Image source={Icons.back_arrow} style={styles.normalIcon} />
      </TouchableOpacity>
      <ScrollView>
        <View>
          <Text style={[styles.transactionsTitle, {alignSelf: 'center'}]}>
            {'Family Plus Investments'}
          </Text>
          <Swiper
            style={{height: Dimensions.get('window').height / 3.5}}
            activeDotColor={'#C9C9CA'}
            dotColor={'#7F18D0'}>
            <SwiperItem />
            <SwiperItem />
            <SwiperItem />
            <SwiperItem />
          </Swiper>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <IconWithLabel
            icon={Icons.family_plus}
            title={'FamilyPlus Savings'}
          />
          <IconWithLabel
            icon={Icons.invest_in_stocks}
            title={'Invest in Stocks'}
          />
          <IconWithLabel icon={Icons.user} title={'Early for kids'} />
        </View>
        <View style={styles.itemsWithArrowContainer}>
          <ItemWithRightArrow title={'Portfolio'} rightText={'Aggressive'} />
          <ItemWithRightArrow
            title={'Round-Up Settings'}
            rightText={'Automatic'}
          />
          <ItemWithRightArrow title={'Recurring'} rightText={'$20/Monthly'} />
          <ItemWithRightArrow title={'Beneficiary'} rightText={'1 Child'} />
          <ItemWithRightArrow title={'One-time Investment'} rightText={''} />
        </View>

        <View style={styles.transactionsContainer}>
          <Text style={styles.transactionsTitle}>{'Recent Transactions'}</Text>
          <TransactionItem
            title={'One Time Investment'}
            status={'Processing'}
            value={'$20'}
          />
          <TransactionItem
            title={'Withdrawal'}
            status={'Processing'}
            value={'$-8.00'}
          />
          <TransactionItem
            title={'Round-Up Investment'}
            status={'Processing'}
            value={'$10.36'}
          />
        </View>

        <View style={styles.questionsContainer}>
          <Text style={styles.transactionsTitle}>{'Grow your Knowledge'}</Text>
          <QuestionItem title={'What is Family Plus?'} icon={Icons.user} />
          <QuestionItem title={'How do Round-Ups work?'} icon={Icons.user} />
          <QuestionItem
            title={'What is FamilyPlus Savings?'}
            icon={Icons.user}
          />
          <QuestionItem
            title={'How can I withdraw my money?'}
            icon={Icons.user}
          />
        </View>
      </ScrollView>
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

const IconWithLabel = ({icon, title}: any) => {
  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.normalIcon} />
      </View>
      <Text numberOfLines={1} style={styles.cardButtonTitle}>
        {title}
      </Text>
    </View>
  );
};

const ItemWithRightArrow = ({title, rightText}: any) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 15}}>
      <Text style={[styles.mediumText, {flex: 1}]}>{title}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.mediumText, {color: '#7F18D0'}]}>{rightText}</Text>
        <Image
          style={[
            styles.normalIcon,
            {transform: [{rotate: '180deg'}], tintColor: '#888789'},
          ]}
          source={Icons.back_arrow}
        />
      </View>
    </TouchableOpacity>
  );
};

const TransactionItem = ({title, status, value}: any) => {
  return (
    <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 10}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.normalIcon} source={Icons.right_tick} />
        <View style={{marginStart: 10}}>
          <Text style={styles.mediumText}>{title}</Text>
          <Text style={[styles.smallText, {marginTop: 5}]}>{status}</Text>
        </View>
      </View>
      <Text style={styles.mediumText}>{value}</Text>
    </TouchableOpacity>
  );
};

const QuestionItem = ({icon, title}: any) => {
  return (
    <View
      style={{flexDirection: 'row', paddingVertical: 10, alignItems: 'center'}}>
      <View style={styles.questionIconContainer}>
        <Image source={icon} style={styles.smallIcon} />
      </View>
      <Text numberOfLines={1} style={styles.mediumText}>
        {title}
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
    // flex: 1,
    alignItems: 'center',
  },
  header: {
    padding: 20,
  },
  normalIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  smallIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  totalBalance: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    flexGrow: 1,
    width: '85%',
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
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2E1FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  questionIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E3DFF7',
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 10,
  },
  normalText: {
    color: 'black',
    fontSize: 14,
  },
  smallText: {
    color: 'black',
    fontSize: 12,
  },
  mediumText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  itemsWithArrowContainer: {
    backgroundColor: '#F4F4F4',
    margin: 20,
    paddingStart: 20,
    paddingEnd: 15,
    borderRadius: 6,
  },
  transactionsContainer: {
    backgroundColor: '#FBFAFA',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderRadius: 6,
  },
  transactionsTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  questionsContainer: {
    padding: 10,
    margin: 20,
    borderRadius: 6,
    backgroundColor: '#FBFAFA',
  },
});
