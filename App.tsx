import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoListScreen from './src/screens/MemoListScreen';
import AppBar from './src/components/AppBar';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';


export default function App() {
  // let memo = new Memo("講座のアイディア", new Date(), "講座のアイディアです。\nこれは本文です。\nマークダウンも書けるようにします。");
  return (
    <View style={styles.container}>
      <AppBar />
      {/* <MemoDetailScreen/> */}
      <MemoEditScreen />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
