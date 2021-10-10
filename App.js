
import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORSS from './src/consts/colors';
import DetailsScreen from './src/views/screens/DetailsScreen';
//import BottomNavigator from './src/views/navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import Login from './src/views/screens/LoginScreen'
import BooksScreen from './containers/BooksScreen'
import CartScreen from './containers/CartScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'
import ElectronicsScreen from './containers/ElectronicsScreen'
import HomeScreen from './containers/HomeScreen'
import { Provider } from 'react-redux'
import store from './store/index'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar backgroundColor={COLORSS.white} barStyle="dark-content" />
      <Stack.Navigator
      initialRouteName='HomeScreen'
    >
        <Stack.Screen name="BooksScreen" component={BooksScreen} />
       <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="ElectronicsScreen" component={ElectronicsScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ShoppingCartIcon" component={ShoppingCartIcon} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
