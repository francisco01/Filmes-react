import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import FilmeListItem from './FilmeListItem'


const FilmeList = props => {
    const {filmes, onPressItem} = props;
    return (
        <FlatList
            style={styles.container}>
            data={filmes}
            renderItem={({item}) => (
            <FilmeListItem 
                filme = {item}
                navigateFilmeDetalhe={onPressItem}/>
            )} 
            
            keyExtractor={item => item.id}
            
        </FlatList>
    )
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#e2f9ff'
    },

})

export default FilmeList;