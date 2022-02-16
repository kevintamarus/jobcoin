import React from 'react';
import {
  Text
} from 'react-native';
import Colors from 'styles/Colors';

const Stats = ({transactions, address}) => {
  const sentTransactions = transactions.filter(item => item.fromAddress === address).length;
  const receivedTransactions = transactions.filter(item => item.toAddress === address).length;
  return (
    <>
      <Text>Transactions Sent: {sentTransactions}</Text>
      <Text>Transactions Received: {receivedTransactions}</Text>
    </>
  );
};

export default Stats;
