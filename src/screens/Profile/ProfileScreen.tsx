import React from 'react';
import { View } from 'react-native';
// import Scanner from './Scanner';
import Measurement from './Measurement';
// import ARView from './ARView';
import useProfile from './useProfile';

const ProfileScreen = () => {
  const { 
    styles,
    data,
  } = useProfile();

  return (
    <View style={styles.container}>
    {/* {!data.measurements ? (
      <>
        <Scanner/>
        <Measurement />
      </>
    ) : (
      <ARView measurements={data.measurements} capturedImage={data.imageFile} />
    )} */}
  </View>
  );
};

export default React.memo(ProfileScreen);
