import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from 'styles/Colors';

const Button = ({style, title, onPress}) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.Blue,
    borderRadius: 5,
  },
  text: {
    color: Colors.Blue,
  },
});

export default Button;