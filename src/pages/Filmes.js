import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import FilmeList from '../components/FilmeList';


export default class Filme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmes: [],
            loading: false,
            error: false,
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.loadFilmes();
    }

    loadFilmes = async () => {
        try {
            const response =
                await axios.get('http://api.themoviedb.org/3/search/movie?api_key=da169b13baae8222394c1d4ffb57222d&query=adventure');
            const { results } = response.data;
            this.setState({
                filmes: results,
                loading: false,
                error: false,
            }
           
            );
        } catch (e) {
            this.setState({
                loading: false,
                error: true
            })
        }
        return;
    }


    render() {
        return (
            <View style={styles.container}>

                {
                    this.state.loading
                        ? <ActivityIndicator size="large" color="blue" />
                        : this.state.error
                            ? <Text style={styles.error}>OPS ALGO ERRADO!!!</Text>

                            :<FilmeList filmes={this.state.filmes}
                                OnPressItem={pageParam => {
                                    this.props.navigation.navigate('FilmesDetalhes', pageParam);
                                }}>

                            </FilmeList>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    error: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 20,
    }
})
