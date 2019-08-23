import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Filmes from './src/pages/Filmes';
import FilmesDetalhes from './src/pages/FilmesDetalhes';


const AppNavigator = createStackNavigator({
  'Main': {
    screen: Filmes
  },
  'FilmesDetalhes': {
    screen: FilmesDetalhes,
  }
},
  {
    defaulNavigationOptions: {
      title: 'Filmes!',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,

        flexGrow: 1,
        textAlign: 'center'
      }
    }

  }


);
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer;