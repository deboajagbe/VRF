// src/ARView.js
import React from 'react';
import { ViroARScene, Viro3DObject, Viro360Image, ViroARTrackingTargets, } from '@reactvision/react-viro';
import {Images} from '@src/assets/images';

const ARView = () => {

  return (
    <ViroARScene>
      {/* Render a 3D object if available */}
      <Viro360Image
        source={Images.TEST_IMAGE} // Your 3D user model file
      />
      
    </ViroARScene>
  );
};

export default ARView;