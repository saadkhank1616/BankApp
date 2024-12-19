import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {LandingData} from '@enums/landingdata';
import {useNavigation} from '@react-navigation/native';
import {Spacer} from '@common';
import {hp, SCREEN, wp} from '@enums';

const {width} = Dimensions.get('window');

const LandingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation();

  const onViewRef = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const handleSkip = () => {
    navigation.navigate(SCREEN.LogIn);
  };

  const handleMore = () => {
    if (currentIndex < LandingData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({index: nextIndex});
    } else {
      handleSkip(); // If it's the last item, navigate to HomeScreen
    }
  };

  return (
    <View style={styles.container}>
      <Spacer height={hp(20)} />
      <FlatList
        ref={flatListRef}
        data={LandingData}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            {item.image}
            <Text style={styles.heading}>{item.heading}</Text>
          </View>
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />

      <View style={styles.indicatorContainer}>
        {LandingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>

      {/* Bottom buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMore}>
          <Text style={styles.moreButton}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  itemContainer: {
    width,
    alignItems: 'center',
  },
  heading: {
    fontSize: wp(6),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: wp(15),
    width: wp(70),
    color: '#00214E',
  },
  indicatorContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: wp(16),
  },
  indicator: {
    width: wp(2),
    height: hp(1),
    borderRadius: wp(1.5),
    backgroundColor: '#ccc',
    marginHorizontal: wp(1),
  },
  activeIndicator: {
    backgroundColor: '#00214E',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: wp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: wp(4),
  },
  skipButton: {
    fontSize: wp(4),
    color: '#989898',
  },
  moreButton: {
    fontSize: wp(4),
    color: '#00214E',
  },
});
