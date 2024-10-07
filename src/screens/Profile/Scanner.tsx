// src/Scanner.js
import React from 'react';
import { View, Button } from 'react-native';
import { ViroARScene, ViroARSceneNavigator, ViroCamera, ViroAmbientLight } from '@reactvision/react-viro';

import useProfile from './useProfile';

const Scanner = () => {

  const {
    handleOnCapture,
    styles
  } = useProfile();


  return (
    <View style={styles.container}>
      <ViroARSceneNavigator 
      autofocus={true}
      initialScene={{
        scene: function (): JSX.Element {
          return (
            <ViroARScene >
              <ViroAmbientLight color={'#aaaaaa'} />
              <ViroCamera active={true} />
              <Button title="Capture" onPress={handleOnCapture} />
            </ViroARScene>
          );
        }
      }}>
      </ViroARSceneNavigator>
    </View>
  );
};

export default Scanner;