import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {captalizeFirstLetter} from '../util';


const FilmeListItem = props =>{
    const {filme, navigateFilmeDetalhe} = props
    console.log(filme);
    const {title} = filme.title;
    const{original_language} = filme.original_language;

    return (
        <TouchableOpacity onPress={() => {
            navigateFilmeDetalhe({filme});
        }}>
            <View style={styles.line} >

                <Image style={styles.avatar} source={{uri:filme.backdrop_path}}/>
                <Text style={styles.lineText}>
                    { `${
                        captalizeFirstLetter(title)
                        }
                        ${
                            captalizeFirstLetter(original_language)
                        }`
                    }
                        
                </Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText:{
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar:{
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50

    }
});

export default FilmeListItem;