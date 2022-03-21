import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Button from '../Components/Button';

const Home = ({navigation, ...props}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../Assets/Logo.png')}
            resizeMode="contain"
            style={{width: '90%', height: 150}}
          />
        </View>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate('UnitPage_1')}>
          <View style={{marginTop: 10, position: 'absolute'}}>
            <Text style={styles.text}>PC 50-1</Text>
          </View>
          <Image
            source={require('../Assets/PC_50-1.png')}
            style={{width: '100%', height: 200}}
          />
          <View style={{width: '80%'}}>
            <Text style={styles.text}>
              Precision Compression PC 50-1 Single Stage Unit
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', marginTop: 25}}
          onPress={() => navigation.navigate('UnitPage_2')}>
          <View style={{marginTop: 10, position: 'absolute'}}>
            <Text style={styles.text}>PC 50</Text>
          </View>
          <Image
            source={require('../Assets/PC_50.png')}
            style={{width: '100%', height: 200}}
          />
          <View style={{width: '75%'}}>
            <Text style={styles.text}>
              Precision Compression PC 50 2 Stage Unit
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginTop: 25}}>
          <Button />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '700',
    color: 'red',
    textAlign: 'center',
  },
});
