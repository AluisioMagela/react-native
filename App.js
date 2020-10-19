
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import filmesAcao from './src/screens/Filmes';
import PaginaInicial from './src/screens/PaginaInicial';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilmesDetalhes from './src/screens/FilmesDetalhes';
import AtoresDetalhes from './src/screens/AtoresDetalhes';
import BuscarFilmesGeneros from './src/screens/BuscarFilmesGeneros';
import SeriesDetalhes from './src/screens/SeriesDetalhes';
import SeriesExibicao from './src/screens/SeriesExibicao';
import SeriesPopulares from './src/screens/SeriesPopulares';
import SeriesAvaliadas from './src/screens/SeriesAvaliadas';
import SeriesTV from './src/screens/SeriesTV';
import Series from './src/screens/Series';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  const estilo = StyleSheet.create({
    menuBottom: {
      flex: 1, justifyContent: 'space-between', alignItems: 'center'
    },
    textoTitulo: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 10,
      fontSize: 20
    }

  })

  return (
    <>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio" headerMode="screen" >
          <Stack.Screen name="Kijoia - Filmes e Séries" >
            {() => (
              <Tab.Navigator >
                <Tab.Screen name="Inicio" component={PaginaInicial}
                  options={{
                    tabBarIcon: ({ color, size, focused }) =>
                      (<MaterialCommunityIcons name='home' color={color} size={size} focused={focused} />)
                  }}
                />

                <Tab.Screen name="Filmes" component={filmesAcao}
                  options={{
                    tabBarIcon: ({ color, size, focused }) =>
                      (<MaterialCommunityIcons name='play-circle' color={color} size={size} focused={focused} />)
                  }}
                />

                <Tab.Screen name="Series" component={Series}
                  options={{
                    tabBarIcon: ({ color, size, focused }) =>
                      (<MaterialCommunityIcons name='television' color={color} size={size} focused={focused} />)
                  }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen name="filmes/detalhes" component={FilmesDetalhes} />
          <Stack.Screen name="filmes/detalhesAtores" component={AtoresDetalhes} />
          <Stack.Screen name="filmes/buscarFilmes" component={BuscarFilmesGeneros} />
          <Stack.Screen name="series/seriesDetalhes" component={SeriesDetalhes} />

          <Stack.Screen name="series/populares" component={SeriesPopulares} />
          <Stack.Screen name="series/exibicao" component={SeriesExibicao} />
          <Stack.Screen name="series/tv" component={SeriesTV} />
          <Stack.Screen name="series/avaliadas" component={SeriesAvaliadas} />
        </Stack.Navigator>
        
      </NavigationContainer>

    </>
  );
}


