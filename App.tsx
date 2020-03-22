import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoListScreen from './src/screens/MemoListScreen';
import AppBar from './src/components/AppBar';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import StackNavigator from 'react-navigation'
import MemoList from './src/components/MemoList';import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//   // let memo = new Memo("講座のアイディア", new Date(), "講座のアイディアです。\nこれは本文です。\nマークダウンも書けるようにします。");

const App = createStackNavigator({
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen }, 
  Login: { screen: LoginScreen },
  SignUp: { screen: SignUpScreen },
}, {
  defaultNavigationOptions: {
      headerTitle: "Memot",
      headerStyle: {
        backgroundColor: "#265366"
      },
      headerTitleStyle: {
        color: "white"
      }
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default createAppContainer(App)