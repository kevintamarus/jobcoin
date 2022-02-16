import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Modal, Text, StyleSheet, FlatList } from 'react-native';
import Colors from 'styles/Colors';

const TransactionModal = ({transactions, onRequestClose, ...props}) => {
  const Item = ({item: { timestamp, toAddress, fromAddress }}) => {
    const today = new Date();
    const date = today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{timestamp}</Text>
        <Text style={styles.title}>{toAddress}</Text>
        <Text style={styles.title}>{fromAddress}</Text>
      </View>
    );
  }
  
  const DATA = transactions;
    console.log('transactions', transactions);
  return (
    <Modal
      animationType="slide"
      onRequestClose={onRequestClose}
      {...props}
    >
      <SafeAreaView>
        <View style={styles.header} >
          <Text>{' '}</Text>
          <Text>All Transactions</Text>
          <TouchableOpacity onPress={onRequestClose}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.item}>
            <Text style={styles.title}>Date</Text>
            <Text style={styles.title}>From</Text>
            <Text style={styles.title}>To</Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={Item}
            keyExtractor={(item) => item.timestamp}
          />
        </View>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.Blue,
    padding: 5,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {

  }
});

export default TransactionModal;