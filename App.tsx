import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BodyText from './src/elements/BodyText'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View>
          <Text style={styles.appBarTitle}>MEMOT</Text>
        </View>
      </View>

      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイディア</Text>
          <Text style={styles.memoDate}>2017/10/10</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイディア</Text>
          <Text style={styles.memoDate}>2017/10/10</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイディア</Text>
          <Text style={styles.memoDate}>2017/10/10</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイディア</Text>
          <Text style={styles.memoDate}>2017/10/10</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイディア</Text>
          <Text style={styles.memoDate}>2017/10/10</Text>
        </View>
      </View>

      <View style={styles.memoAddButton}>
        <Text style={styles.addButtonText}>+</Text>
      </View>
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

  appBar: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: "#265366",
    justifyContent: 'center',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10
  },

  appBarTitle: {
    color: "white"
  },

  memoList: {
    width: '100%',
    flex: 1,
    paddingTop: 78
  },

  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: "white"
  },
  
  memoTitle: {
    fontSize: 18,
    marginBottom: 4
  }, 

  memoDate: {
    fontSize: 12,
    color: '#a2a2a2'
  },

  memoAddButton: {
    height: 48,
    width: 48,
    backgroundColor: "#E31676",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    right: 24,
    bottom: 24,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  addButtonText: {
    fontSize: 24,
    color: "white"
  }

});
