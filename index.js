import React, { PureComponent } from "react";
import * as Animatable from "react-native-animatable";

export class TransitionView extends PureComponent {
  render() {
    const { index, ...rest } = this.props;
    return (
      <Animatable.View
        animation="fadeIn"
        duration={1000}
        delay={index ? (index * 1000) / 5 : 0}
        useNativeDriver
        {...rest}
      />
    );
  }
};
