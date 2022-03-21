import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

import RNFetchBlob from 'rn-fetch-blob';
import Icon from 'react-native-vector-icons/Ionicons';

import Button from '../Components/Button';

const UnitPage_2 = ({navigation, ...props}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <ScrollView>
        <View>
          <Image
            source={require('../Assets/Logo.png')}
            resizeMode="contain"
            style={{width: '100%', height: 150}}
          />
        </View>
        <TouchableOpacity
          style={{
            marginLeft: 20,
            marginTop: -10,
          }}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color="#FFFFFF" size={30} />
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <View style={{marginTop: 10, position: 'absolute'}}>
            <Text style={styles.text}>PC 50</Text>
          </View>
          <Image
            source={require('../Assets/PC_50-1.png')}
            style={{width: '100%', height: 200}}
          />
          <View style={{width: '80%'}}>
            <Text style={styles.text}>
              Precision Compression PC50 2 Stage Unit Flow Rate Calculations
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 30,

            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{}}>
            <Text style={[styles.title, {left: 20}]}>SUCTION PSI</Text>
            <View style={styles.box}>
              <Text style={styles.number}>25</Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.title, {left: 10}]}>DISCHARGE PSI</Text>
              <View style={styles.box}>
                <Text style={styles.number}>150</Text>
              </View>
            </View>
          </View>
          <View style={{marginRight: 40, marginTop: 30}}>
            <Text style={[styles.title, {left: 15}]}>FLOW RATE MCF</Text>
            <View style={styles.box}>
              <Text style={styles.number}>100</Text>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 60, marginBottom: 20}}>
          <Button />
        </View>
      </ScrollView>
    </View>
  );
};

export default UnitPage_2;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '700',
    color: 'red',
    textAlign: 'center',
  },
  desc: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
    color: 'blue',
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: 'red',
  },
  box: {
    borderWidth: 3,
    height: 40,
    width: '120%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
  },
  line: {
    borderBottomWidth: 3,
    transform: [{rotate: '-75deg'}],
    width: 110,
    position: 'absolute',
    bottom: 230,
  },
  line2: {
    borderBottomWidth: 3,
    transform: [{rotate: '-50deg'}],
    width: 30,
    position: 'absolute',
    bottom: 185,
    left: 45,
  },
  number: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '700',
  },
});
