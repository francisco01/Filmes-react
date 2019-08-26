import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { captalizeFirstLetter } from '../util';
import Line from '../components/line';

export default class FilmesDetalhes extends Component {

    static navigationOptions = ({ navigation }) => {
   
        const filme = navigation.state.params.itemT;
        const filmeNome = filme.title;
     
        return ({
            headerTitle: `${
                captalizeFirstLetter(filmeNome)
            }`,
            headerTitleStyle: {
                color: 'red',
                fontSize: 30,
            },
            
        });
    }

    render() {
        const {itemT} = this.props.navigation.state.params;
        const {url} = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                
                <Image source={{uri:url + itemT.poster_path}} style={styles.avatar}></Image>
                <View style={styles.detailContainer}>
                   <Line label="Overview: " content={itemT.overview}></Line>

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
