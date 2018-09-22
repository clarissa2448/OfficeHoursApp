/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
// import {
//   createStackNavigator,
// } from 'react-navigation';
type Props = {};
export default class Header extends Component<Props> {
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Icon onPress={() =>navigate('Start')} name='home' size={30} color='white'/>
        <Text style={styles.title}>
          Fix Your Trashy Site
        </Text>
        <Icon name='menu' size={30} color='#44cde5'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    height:75,
    padding:8,
    paddingHorizontal:12,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    backgroundColor:'#44cde5'
  },
  title:{
    color:'white',
    fontSize:20,
  }
});
