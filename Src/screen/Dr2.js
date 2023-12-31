import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'react-native-axios';
const Dr2 = ({navigation}) => {
  const [headerImage, setHeaderImage] = useState([]);
  const [userDataArr, setUserDataArr] = useState([]);

  return (
    <ScrollView style={styles.flexView}>
      <View style={{marginHorizontal: 10, backgroundColor: '00000099'}}>
        <View style={styles.headercontaner}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate('Dr2');
            }}>
            <Image
              style={{width: 25, height: 25, tintColor: 'white'}}
              source={require('../Image/DrowerMenu.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.wellbest}>WallBest</Text>

          <View style={{}}>
            <View style={{marginTop: 10}}>
              <Image
                style={{tintColor: '#fff', width: 24, height: 24}}
                source={require('../Image/Bookmark.png')}
                resizeMode="contain"
              />
            </View>
            <View style={styles.notificationcontan}>
              <Text style={styles.notificationtext}>2</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#000',
            borderRadius: 20,
            paddingHorizontal: 10,
            marginTop: 18,
            height: 45,
          }}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: '#404040',
              borderRadius: 18,
              alignItems: 'center',
              width: 52,
              height: 30,
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <Image
              style={[styles.hart, {width: 8, height: 13}]}
              source={require('../Image/backicon.png')}
            />
            <Text style={{color: '#fff', fontSize: 15, fontWeight: '700'}}>
              Back
            </Text>
          </TouchableOpacity>
          <View style={{}}>
            <Text
              style={[styles.downlodText, {fontSize: 17, fontWeight: '700'}]}>
              yuuuuuu{' '}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: '#404040',
              borderRadius: 18,
              alignItems: 'center',
              width: 30,
              height: 30,
              justifyContent: 'center',
            }}>
            <Image
              style={styles.hart}
              source={require('../Image/uploded.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: '#404040',
              borderRadius: 18,
              alignItems: 'center',
              width: 30,
              height: 30,
              justifyContent: 'center',
            }}>
            <Image
              style={[styles.hart, {}]}
              source={require('../Image/StarB.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewSec}>
        <Image
          style={styles.img}
          source={require('../Image/PaneerPizza.png')}
        />
      </View>
      <View
        style={{
          backgroundColor: '#000',
          marginHorizontal: 12,
          borderRadius: 18,
          marginTop: 10,
          flex: 1,
        }}>
        <View>
          <View
            style={{
              borderWidth: 3,
              borderBottomColor: 'red',
              width: 130,
              alignSelf: 'center',
            }}></View>
          <View>
            <View style={[styles.HartView2, {justifyContent: 'space-around'}]}>
              <View
                style={[
                  styles.HartView,
                  {width: '16%', backgroundColor: 'gray', alignItems: 'center'},
                ]}>
                <Text style={styles.text}>5</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '16%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>6</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '16%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>7</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '16%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>8</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '16%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>X</Text>
              </View>
            </View>
            <View style={[styles.HartView2, {justifyContent: 'space-around'}]}>
              <View
                style={[
                  styles.HartView,
                  {width: '16%', backgroundColor: 'gray', alignItems: 'center'},
                ]}>
                <Text style={styles.text}>SE</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '16%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>6+</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '16%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>7+</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '16%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>8+</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '16%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>Max</Text>
              </View>
            </View>
            <View style={[styles.HartView2, {justifyContent: 'space-between'}]}>
              <View
                style={[
                  styles.HartView,
                  {width: '16%', backgroundColor: 'gray', alignItems: 'center'},
                ]}>
                <Text style={styles.text}>11</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '16%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>11 Pro</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '25%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>11 Pro Max</Text>
              </View>
            </View>
            <View style={[styles.HartView2, {justifyContent: 'space-between'}]}>
              <View
                style={[
                  styles.HartView,
                  {width: '16%', backgroundColor: 'gray', alignItems: 'center'},
                ]}>
                <Text style={styles.text}>12</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '16%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>12 Pro</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '25%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>12 Pro Max</Text>
              </View>
            </View>

            <View style={[styles.HartView2, {justifyContent: 'space-between'}]}>
              <View
                style={[
                  styles.HartView,
                  {width: '16%', backgroundColor: 'gray', alignItems: 'center'},
                ]}>
                <Text style={styles.text}>13</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '16%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>11 Pro</Text>
              </View>
              <View
                style={[
                  styles.HartView,
                  {marginLeft: 10, width: '25%', backgroundColor: 'gray'},
                ]}>
                <Text style={styles.text}>13 Pro Max</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonflex}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.downlodText}>DOWNLOAD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dr2;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: '#353935',
  },
  img: {
    width: '100%',
    height: 370,
    borderRadius: 10,
  },
  viewSec: {
    marginHorizontal: 13,
    elevation: 3,
  },
  hart: {
    width: 20,
    height: 18,
    tintColor: '#FFF',
  },
  HartView: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    width: '22%',
    padding: 2,
    borderRadius: 18,
    paddingHorizontal: 8,
    marginTop: 10,
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    alignItems: 'center',
  },
  Contender: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  HartView2: {
    flexDirection: 'row',
    flex: 1,
  },
  FlexCut: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 18,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#037171',
    padding: 18,
    width: '60%',
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'flex-end',
    borderWidth: 3,
    borderColor: 'gray',
  },
  downlodText: {
    fontSize: 21,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonflex: {justifyContent: 'flex-end', flex: 0.9},
  headercontaner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  wellbest: {
    color: '#fff',
    fontSize: 28,
    fontStyle: 'italic',
  },
  notificationcontan: {
    backgroundColor: '#037171',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    right: 10,
    borderWidth: 1,
    borderColor: '#000',
    position: 'absolute',
    bottom: 12,
    marginRight: 3,
  },
  notificationtext: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },
});
