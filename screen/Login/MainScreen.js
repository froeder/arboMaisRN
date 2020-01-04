import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './Style'
import { Title, Subheading, TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-navigation';

export default class MainScreen extends Component {
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
                        <Title style={{color: '#000', fontSize: 30}}> ArboMais </Title>
                        <Subheading style={{color: '#000'}}>UFMS</Subheading>
                    </View>
                    <TextInput style={styles.mainInput} label="E-mail" mode="outlined" />
                    <TextInput style={{ paddingTop: 20 }} label="Senha" mode="outlined" secureTextEntry={true} />
                    <View style={styles.buttonContainer}>
                        <Button style={{backgroundColor: '#2EE400'}} mode="contained">Login</Button>
                        <Button style={{ marginTop: 20, backgroundColor: '#00FFFF' }} mode="contained">Criar Conta</Button>
                        <Button color='#000'  style={{ marginTop: 10}}>Esqueci Minha Senha</Button>
                    </View>
                </View>
            </ImageBackground>

        );
    }
}
