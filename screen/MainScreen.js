import React, { Component } from 'react';
import { View, Text , SafeAreaView} from 'react-native';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
        <Text> MainScreen </Text>
      </SafeAreaView>
    );
  }
}
