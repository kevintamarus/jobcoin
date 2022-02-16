import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Dimensions
} from 'react-native';
import Button from 'components/Button';
import { getAddressInfo } from 'helpers/endpoints';
import { get } from 'helpers/util';

const mariah = "https://www.gannett-cdn.com/presto/2021/05/08/USAT/f615da7d-9dfd-4f65-b246-62f0afa1e365-AP_Mariah_Carey_Empire_State_Building_Lighting.JPG"

const SignIn = ({navigateTo, address, setAddress}) => {
  const handleSignIn = async() => {
    const response = await getAddressInfo(address);
    const transactions = get(response, 'transactions', []).length;
    if (transactions) {
      navigateTo('Send');
    } else {
      alert('Address does not exist');
    }
  };
  console.log('platform', Dimensions);
  return (
    <View style={styles.container}>
      <Image source={{uri: mariah}} style={styles.image} />
      <Text>Enter your Jobcoin address here:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAddress}
        value={address}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const imageSideLength = windowWidth > 400 ? 300 : 250


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '90%',
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    borderWidth: 1, borderColor: 'red',
    width: imageSideLength,
    height: imageSideLength,
  }
});



export default SignIn;
