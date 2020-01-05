import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './Style'
import { Title, Subheading, TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-navigation';

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ImageBackground source={require("../../assets/fundoLogin.jpg")}
                style={{ width: '100%', height: '100%' }}>
                <View style={styles.mainContainer}>
                    <View style={{ ...styles.mainContent, paddingBottom: 20 }}>
                        <Title style={{color: '#FFF', fontSize: 30}}> ArboMais </Title>
                        <Subheading style={{color: '#FFF'}}>UFMS</Subheading>
                    </View>
                    <TextInput style={styles.mainInput} label="E-mail" mode="outlined" />
                    <TextInput style={{ paddingTop: 20 }} label="Senha" mode="outlined" secureTextEntry={true} />
                   
                </View>
            </ImageBackground>

        );
    }
}


