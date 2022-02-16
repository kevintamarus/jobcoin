import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {getAddressInfo, sendCoins} from 'helpers/endpoints';
import {get} from 'helpers/util';
import Graph from './components/Graph';
import Stats from './components/Stats';
import TransactionModal from './components/TransactionModal';
import Button from 'components/Button';
import Colors from 'styles/Colors';

const Send = ({navigateTo, address, setAddress}) => {
  const [balance, setBalance] = React.useState(0);
  const [transactions, setTransactions] = React.useState([]);
  const [sendAmount, setSendAmount] = React.useState('');
  const [sendAddress, setSendAddress] = React.useState('');
  const [showModal, setShowModal] = React.useState('true');

  React.useEffect(() => {
    updateInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = () => {
    setAddress(null);
    navigateTo('SignIn');
  };

  const updateInfo = async () => {
    const account = await getAddressInfo(address);
    const balance = get(account, 'balance', 0);
    const userTransactions = get(account, 'transactions', 0);
    setBalance(balance);
    setTransactions(userTransactions);
  };

  const handleSend = async () => {
    const response = await sendCoins({
      fromAddress: address,
      toAddress: sendAddress,
      amount: sendAmount,
    });
    updateInfo();
  };

  const handleViewTransactions = () => {
    setShowModal(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TransactionModal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        transactions={transactions}
      />
      <View style={styles.header}>
        <Text>{address}</Text>
        <Text>{balance} Jobcoins</Text>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
      <ScrollView>
        <Text style={styles.title}>Last 5 Transactions Sent</Text>
        <Graph transactions={transactions} address={address} />

        <Text style={styles.title}>Statistics</Text>
        <Stats transactions={transactions} address={address} />

        <Button
          style={styles.button}
          title="View All Transactions"
          onPress={handleViewTransactions}
        />

        <View style={styles.sendContainer}>
          <Text style={styles.title}>Send Jobcoin</Text>
          <Text>Send Coins:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setSendAddress}
            value={sendAddress}
          />
          <Text>Amount:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setSendAmount}
            value={sendAmount}
          />
          <Button style={styles.button} title="Send" onPress={handleSend} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  },
  sendContainer: {
    marginTop: 50,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignSelf: 'center',
    width: '90%',
  },
});

export default Send;
