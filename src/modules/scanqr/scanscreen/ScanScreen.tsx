import React, {useEffect} from 'react';
import {StyleSheet, View, PermissionsAndroid, Text} from 'react-native';
import {Camera} from 'react-native-camera-kit';

const ScanScreen = () => {
  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera to scan QR codes.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan QR Code</Text>
      <Camera
        style={styles.camera}
        scanBarcode={true} // Enable barcode scanning
        onReadCode={event => console.log('QR code found:', event.nativeEvent)}
        showFrame={true} // Show scanner frame
        laserColor="red" // Laser color in the scanner
        frameColor="white" // Frame color around the scanner
      />
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    color: 'green',
    marginBottom: 20,
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
