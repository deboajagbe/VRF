// src/Measurement.js
import React from 'react';
import { View, TextInput, Button } from 'react-native';


import useProfile from './useProfile';

const Measurement = () => {
  const [height, setHeight] = React.useState('');
  const [armLength, setArmLength] = React.useState('');
  const [shoeSize, setShoeSize] = React.useState('');

  const userMeasure = { height, armLength, shoeSize };

  const {
    color,
    data,
    handleOnSave,
    styles,
  } = useProfile();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        value={height}
        keyboardType="numeric"
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Arm Length (cm)"
        value={armLength}
        keyboardType="numeric"
        onChangeText={setArmLength}
      />
      <TextInput
        style={styles.input}
        placeholder="Shoe Size"
        value={shoeSize}
        keyboardType="numeric"
        onChangeText={setShoeSize}
      />
      <Button title="Save Measurements" 
      onPress={() => {
        handleOnSave(userMeasure);
      }} />
    </View>
  );
};

export default Measurement;