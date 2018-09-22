import React, {Component} from 'react';
import {Platform, Button, Linking, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import {
//   createStackNavigator,
// } from 'react-navigation';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Home extends Component<Props> {

  state = {
    data: []
  }

  componentWillMount() {
    this.populateData()
  }

  populateData() {
    this.setState({data: [
      {
          id: 1,
          class: '15-151',
          location: 'Wean',
          time : "12:30"
        },
        {
          id: 2,
          class: '21-241',
          location: 'Wean',
          time : "12:30"
        }
    ]})
  }

  _renderItem = ({item}) => (
    <View style={styles.CellContainer}>
      <View style={styles.CellInnerCont}>

        <Text style={styles.CellText}>
          Class: {item.class}
        </Text>
        <Text style={styles.CellText}>
          {item.location}
        </Text>
        <Text style={styles.CellText}>
          {item.time}
        </Text>
      </View>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen2')}>
        <Icon style={styles.icon} name='add' size={30} color='black'/>
      </TouchableOpacity>

    </View>
  )

  _keyExtractor = (item, index) => item.id;


  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FormLabel>Name</FormLabel>
        <FormInput/>
        <FormLabel>Application</FormLabel>
        <FormInput/>
        <FormLabel>Color Scheme</FormLabel>
        <FormInput/>
        <FormLabel>Website Link</FormLabel>
        <FormInput/>

        <Button
          raised
          buttonStyle={{backgroundColor: '#44cde5', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={`Generate!`}
          onPress={ ()=>{ Linking.openURL('https://www.wix.com/')}}
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  secondContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
  },
  thirdContainer:{
    flex:2,
    backgroundColor:'green'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#44cde5',
    marginBottom: 5,
  },
  bottomText:{
    fontSize: 30,
    color:'red'
  },


  CellContainer:{
    flex:1,
    flexDirection:'row',
    padding: 20,
    justifyContent:'space-between',
    alignItems:'center',
    // backgroundColor:'red'
  },
  CellText:{
    // fontSize:20,
    alignItems:'center',
    justifyContent:'center',
    fontStyle: 'italic',

  },
  CellInnerCont:{
    flexDirection:'row'
  },
  icon:{
    justifyContent:'center',
    alignItems:'center'
  }




});
// import React, {Component} from 'react';
// import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
// import { Platform,  Button, Linking, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity} from 'react-native';
// import Header from '../components/Header';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Button } from 'react-native-elements';
// import { SearchBar } from 'react-native-elements';
// import { Constants } from 'expo';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// type Props = {};
// export default class Home extends Component<Props> {
//
//   state = {
//     data: []
//   }
//
//   componentWillMount() {
//     this.populateData()
//   }
//
//   populateData() {
//     this.setState({data: [
//       {
//         id: 1,
//         class: '15-151',
//         location: 'Wean',
//         time : "12:30"
//       },
//       {
//         id: 2,
//         class: '21-241',
//         location: 'Wean',
//         time : "12:30"
//       }
//     ]})
//   }
//
//   _renderItem = ({item}) => (
//     <View style={styles.CellContainer}>
//       <View style={styles.CellInnerCont}>
//         <Text style={styles.CellText}>
//            Class: {item.class}
//         </Text>
//         <Text style={styles.CellText}>
//            Location: {item.location}
//         </Text>
//         <Text style={styles.CellText}>
//            Time: {item.time}
//         </Text>
//     </View>
//   )
//   _keyExtractor = (item, index) => item.id;
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header/>
//         <FormLabel>Name</FormLabel>
//         <FormInput/>
//         <FormLabel>Application</FormLabel>
//         <FormInput/>
//         <FormLabel>Color Scheme</FormLabel>
//         <FormInput/>
//         <FormLabel>Website Link</FormLabel>
//         <FormInput/>
//         <Button title="Click me" onPress={ ()=>{ Linking.openURL('https://google.com')}} />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   secondContainer:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:'black',
//   },
//   thirdContainer:{
//     flex:2,
//     backgroundColor:'green'
//   },
//   welcome: {
//     fontSize: 40,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   bottomText:{
//     fontSize: 30,
//     color:'red'
//   },
//   CellContainer:{
//     flex:1,
//     flexDirection:'row',
//     padding: 20,
//     justifyContent:'space-between',
//     alignItems:'center',
//     // backgroundColor:'red'
//   },
//   CellText:{
//     // fontSize:20,
//     alignItems:'center',
//     justifyContent:'center',
//     fontStyle: 'italic',
//
//   },
//   CellInnerCont:{
//     flexDirection:'row'
//   },
//   icon:{
//     justifyContent:'center',
//     alignItems:'center'
//   }
//   // <SearchBar
//   //   showLoading
//   //   platform="ios"
//   //   cancelButtonTitle="Cancel"
//   //   placeholder='Search' />
//   // <Button
//   //   //icon={{name: 'home', size: 15}}
//   //   buttonStyle={{backgroundColor: 'blue', borderRadius: 0}}
//   //   textStyle={{textAlign: 'left'}}
//   //   title={`Filter`}
//   // />
//   // <Button
//   //   //icon={{name: 'home', size: 15}}
//   //   buttonStyle={{backgroundColor: 'blue', borderRadius: 5}}
//   //   textStyle={{textAlign: 'right'}}
//   //   title={`Sort`}
//   // />
//   // <FlatList
//   //   data={this.state.data}
//   //   renderItem={this._renderItem}
//   //   navigation={this.props.navigation}
//   //   keyExtractor={this._keyExtractor}
//   // />
//
// });
