import React, {Component} from "react";
import {Text, Image, TextInput, View} from 'react-native';

class Home extends Component {
  render(){
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{paddingTop: 25, fontSize: 30, fontWeight: 'bold'}}>
          Bem vindo
        </Text>
      </View>
    );
  }
}

export default Home;
