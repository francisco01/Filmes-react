import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import FilmeList from '../components/FilmeList';
import FilmeListItem from '../components/FilmeListItem';



export default class Filme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmes: [],
            loading: false,
            error: false,
            post_url: '',
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.setState({ post_url: 'https://image.tmdb.org/t/p/w500' });
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
                error: false
            }
            );
            //console.log(thie.state.filmes);
        } catch (e) {
            this.setState({
                loading: false,
                error: true

            })
            console.log("erro: ", e);
        }

        console.log(this.state.filmes[0]);

        return;
    }

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.onPress(item)}
        >
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: this.state.post_url + item.backdrop_path }}></Image>
                <Text style={styles.lineText}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
    onPress(item){
        this.props.navigation.navigate('FilmesDetalhes', {
            itemT: item,
            url: this.state.post_url});
    }


    render() {
        return (

            <View style={styles.container}>

                {
                    this.state.loading
                        ? <ActivityIndicator size="large" color="blue" />
                        : this.state.error
                            ? <Text style={styles.error}>OPS ALGO ERRADO!!!</Text>

                            : <FlatList data={this.state.filmes}
                                keyExtractor={item => item.id.toString()}
                                renderItem={this.renderItem}
                               >

                            </FlatList>


                    /*<FilmeList filmes={this.state.filmes}
                        onPressItem={pageParams => {
                            this.props.navigation.navigate('FilmesDetalhes', pageParams);
                        }}>
                    </FilmeList>*/
                }
            </View>

        )
        /* return (
 
             <PeopleListItem></PeopleListItem>
             <View style={styles.container}>
                 <FlatList data={this.filmes}
                 renderItem={({item}) => (
                 <PeopleListItem
                     filme ={item}
                     ></PeopleListItem>
                 )} keyExtractor={item => item.id.toString()}> 
                     
                 </FlatList>
             </View>
         );*/
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
    },
    avatar: {
        aspectRatio: 1,
        flex: 1.2,
        marginLeft: 15,
        borderRadius: 55

    },
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    }
})
