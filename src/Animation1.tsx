import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Animation1 = () => {
  const titlePosition = useSharedValue(30);

  useEffect(() => {
    titlePosition.value = withTiming(0, {duration: 1000});
  }, [titlePosition]);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
      opacity: interpolate(
        titlePosition.value,
        [30, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, titleStyle]}>Fala DEV</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
});

export default Animation1;
