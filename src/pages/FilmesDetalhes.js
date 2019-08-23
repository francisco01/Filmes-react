import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Line from '../components/line';

export default class FilmesDetalhes extends Component {

    static navigationOptions = ({ navigation }) => {
        const filmeNome = navigation.state.params.filme.title;

        return {
            headerTitle: {
                filmeNome
            },
            headerTitleStyle: {
                color: 'red',
                fontSize: 30,
            }
        }
    }

    render() {

        const {filme} = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Image source={{ uri: filme.backdrop_path}}
                    style={styles.avatar}>

                </Image>
                <View style={styles.detailContainer}>
                   <Line label="Title: " content={filme.title}></Line>

                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({

    avatar: {
        aspectRatio: 1
    },
    container: {
        padding: 15
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },

})
