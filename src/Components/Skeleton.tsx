import {Colors} from '@themes/Colors';
import {GlobalStyles} from '@themes/Styles';
import React, {PureComponent} from 'react';
import {Animated, LayoutChangeEvent, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SkeletonProps, SkeletonState} from 'src/Types/components';

const skeletonAnimatedValue = new Animated.Value(0);

const SkeletonAnimation = Animated.loop(
  Animated.timing(skeletonAnimatedValue, {
    useNativeDriver: false,
    delay: 1200,
    duration: 750,
    toValue: 1,
  }),
);

export default class Skeleton extends PureComponent<
  SkeletonProps,
  SkeletonState
> {
  private readonly animation: Animated.CompositeAnimation;
  private gradientColorsLight = [
    Colors['Gray-100'],
    Colors.White,
    Colors['Gray-100'],
  ];

  constructor(props: Readonly<SkeletonProps>) {
    super(props);

    this.state = {
      viewWidth: -1,
    };

    this.animation = SkeletonAnimation;
  }

  startAnimation() {
    this.animation.start();
  }

  render() {
    const {height, width, borderRadius} = this.props;
    const loadingStyle = {backgroundColor: Colors['Gray-100']};
    const left = this._getLeftValue();

    return (
      <View style={{width, height}}>
        <View
          style={[styles.container, loadingStyle, {borderRadius}]}
          onLayout={event => this._onLayoutChange(event)}>
          <Animated.View style={[GlobalStyles.container, {left}]}>
            <LinearGradient
              colors={this.gradientColorsLight}
              start={{x: 0.3, y: 0.2}}
              end={{x: 0.8, y: 0.5}}
              style={[GlobalStyles.container]}
            />
          </Animated.View>
        </View>
      </View>
    );
  }

  private _onLayoutChange(event: LayoutChangeEvent) {
    this.setState({
      viewWidth: event.nativeEvent.layout.width,
    });

    this.startAnimation();
  }

  private _getLeftValue() {
    const {viewWidth} = this.state;
    return skeletonAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-viewWidth, viewWidth],
    });
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    borderRadius: 90,
  },
});
