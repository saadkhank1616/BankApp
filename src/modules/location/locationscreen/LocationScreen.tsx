import {BackArrow, GpsIcon, SearchIcon} from '@assets/icons';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import MapView from 'react-native-maps';
import {CustomModal} from '@common/modal';
import {LocationTabIcon, Spacer} from '@common';
import {hp} from '@enums';
// {UrlTile, Marker}
const LocationScreen = () => {
  const [search, setSearch] = useState('');
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  const handleSearch = () => {
    console.log('Search:', search);
    // Implement search functionality (e.g., geocoding) here
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const ShowModal = () => {
    setModalVisible(true);
  };

  // Function to request location permission on Android
  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message:
              'This app needs to access your location to show nearby places.',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          setHasLocationPermission(true);
        } else {
          console.log('Location permission denied');
        }
      } else {
        setHasLocationPermission(true); // Assume permissions are granted on iOS
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top_header}>
        <View style={styles.back}>
          <BackArrow />
        </View>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#888"
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={handleSearch} // Trigger search when "Enter" is pressed
          />
          <SearchIcon />
        </View>
      </View>

      {/* Map */}
      {hasLocationPermission ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 26.8233,
            longitude: 145.7857,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      ) : (
        <Text style={styles.permissionText}>
          Location permission is required to display the map.
        </Text>
      )}

      {/* Zoom Controls */}
      <View style={styles.zoomControls}>
        <TouchableOpacity style={styles.zoomButton}>
          <Text style={styles.zoomText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zoomButton}>
          <Text style={styles.zoomText}>−</Text>
        </TouchableOpacity>
      </View>

      {/* GPS Icon */}
      <TouchableOpacity style={styles.gpsButton} onPress={ShowModal}>
        <GpsIcon />
      </TouchableOpacity>
      <CustomModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}>
        <View style={styles.custommodal}>
          <LocationTabIcon color={'red'} />
          <Spacer />
          <Text style={styles.modalheading}>Enabel Location</Text>
          <Spacer />
          <Text style={styles.modaltext}>
            Allow Paynow to use your location and find locations of all
            biometric, cash agents and business near you.
          </Text>
          <Spacer height={hp(2)} />
          <TouchableOpacity
            style={styles.deny_btn}
            onPress={() => setModalVisible(false)}>
            <Text>Deny</Text>
          </TouchableOpacity>
          <Spacer height={hp(2)} />
          <TouchableOpacity style={styles.enable_btn}>
            <Text>Enabel Location Acces</Text>
          </TouchableOpacity>
        </View>
      </CustomModal>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top_header: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1, // Ensures it stays above the map
    padding: 10,
  },
  back: {
    padding: 13,
    borderRadius: 25,
    backgroundColor: 'white',
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    padding: 6,
  },
  map: {
    flex: 1,
  },
  zoomControls: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1,
  },
  zoomButton: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  zoomText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  gpsButton: {
    position: 'absolute',
    bottom: 20, // Distance from the bottom
    right: 10, // Align to the right side
    width: 50, // Set width
    height: 50, // Set height
    borderRadius: 25, // Circular button
    backgroundColor: 'white', // Background color
    justifyContent: 'center', // Center the icon vertically
    alignItems: 'center', // Center the icon horizontally
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  custommodal: {
    padding: 45,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 50,
  },
  modaltext: {
    width: 270,
    textAlign: 'center',
    color: '#00214E',
  },
  deny_btn: {
    padding: 10,
    backgroundColor: 'white',
    paddingHorizontal: 120,
    borderRadius: 10,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 5,
  },
  enable_btn: {
    padding: 10,
    backgroundColor: '#E9F2FF',
    paddingHorizontal: 65,
    borderRadius: 10,
  },
  modalheading: {
    fontSize: 24,
    color: '#00214E',
    fontWeight: 'semibold',
  },
  permissionText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    color: '#888',
  },
});
