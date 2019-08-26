import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import FilmeListItem from './FilmeListItem'



const FilmeList = props => {
    const {filmes, onPressItem} = props;
    console.log('list', filmes);
    return (
        <FlatList style={styles.container}
            data={this.filmes}
            renderItem={({item}) => (
            <FilmeListItem
                filme = {item}
                navigateFilmeDetalhe={onPressItem}/>
            )} 
            keyExtractor={item => item.id.toString()}>
        </FlatList>
       
    )
    
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#e2f9ff'
    },

})

export default FilmeList;