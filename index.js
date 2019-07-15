module.exports = class TransitionView extends PureComponent {
  render() {
    const { index, ...rest } = this.props;
    return (
      <Animatable.View
        animation="fadeInDown"
        duration={500}
        delay={index ? (index * 500) / 5 : 0}
        useNativeDriver
        {...rest}
      />
    );
  }
};
