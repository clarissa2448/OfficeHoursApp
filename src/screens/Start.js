import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import { Constants } from 'expo';
import { Button } from 'react-native-elements'; // 0.19.1
import {
  createStackNavigator,
} from 'react-navigation';
//import "@expo/vector-icons"; // 6.3.1

export default class App extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          raised
          buttonStyle={{backgroundColor: '#636c6d', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          onPress={() =>
          navigate('Home')
        }
          title={`Welcome to\nFix Your Trashy Site`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
//    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#44cde5',
  }
});
