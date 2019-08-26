import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { captalizeFirstLetter } from '../util';
import Line from '../components/line';

export default class FilmesDetalhes extends Component {

    static navigationOptions = ({ navigation }) => {
    //render() {
        const filmes = navigation;
        console.log(filmes);
        const filme = filmes.getParam('itemT');
        const teste = filme.title;
        console.log(teste);

        return ({
            headerTitle: `${
                captalizeFirstLetter(teste)
            }`,
            headerTitleStyle: {
                color: 'red',
                fontSize: 30,
            },
            

        });
    }

    render() {

        const {navigate} = this.props.navigation.state.params.itemT;
        console.log(navigate);

        return (
            <View style={styles.container}>
                
                
                <View style={styles.detailContainer}>
                   

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
