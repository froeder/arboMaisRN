import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1 ,
        justifyContent: "center" ,
        alignSelf: 'center',
        padding: 50 ,
        backgroundColor: 'rgba(255,255,255,0.9)' ,
        position: 'absolute' ,
        borderRadius: 20,
        marginTop: '30%',
    } ,
    mainContent: {
        alignItems: 'center',
        paddingTop: '30%'
    } ,
    mainInput: {
        borderRadius: 20
    },
    buttonContainer: {
        paddingTop: 30
    }
})

export default styles ;