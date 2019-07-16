# TransitionView

TransitionView is a drop-in replacement for the React Native View component. It serves the same purpose, except to animate it into the UI. It utilizes the Animatable library for animations and adds an index prop to control the sequence at which things load.

## Installation

```
npm i transitionview
```

## Usage

### Include the components

```
import { TransitionView } from "transitionview";
```

### Render Component

By default, TransitioView receives the following props as well as all the default props of a regular React Native View component.

```
<TransitionView
  index={0}
  animation="fadeIn"
  duration={500}
  delay={index ? (index * 500) / 5 : 0}
  useNativeDriver
>
  (...components to be rendered to UI)
</TransitionView>
```

The above chunk of code is the same as the one below.

```
<TransitionView>
  (...components to be rendered to UI)
</TransitionView>
```

To add sequence to components loading to the UI, use the 'delay' prop. So, the first component to load will be the default index={0}. Then, set the next component to load to index={1}, and the next to index={2}, and so on... If you are using '.map', set the index of the TransitionView to the index prop of the '.map' function and it will evenly increment your components as they load onto the UI.

```
data.map((item, index) => {
  return (
    <TransitionView
      index={index}
    >
    <Text>
      {item.text}
    <Text>
  )
})
```

To change the amount of the delay, change the number of miliseconds index is multiplied by (default is 500).

```
data.map((item, index) => {
  return (
    <TransitionView
      index={index}
      delay={index ? (index * 1500) / 5 : 0}
    >
      <Text>
        {item.text}
      <Text>
    </TransitionView>
  )
})
```

To change the animation, change the animation prop to the corresponding animation from [react-native-animatable](https://github.com/oblador/react-native-animatable "react-native-animatable github").

```
data.map((item, index) => {
  return (
    <TransitionView
      index={index}
      delay={index ? (index * 1500) / 5 : 0}
      animation={"bounceInDown}
    >
      <Text>
        {item.text}
      <Text>
    </TransitionView>
  )
})
```

To change the duration of the animation, change the duration prop to the desired amount of miliseconds for the animation to last.

```
data.map((item, index) => {
  return (
    <TransitionView
      index={index}
      delay={index ? (index * 1500) / 5 : 0}
      animation={"bounceInDown}
      duration={1500}
    >
      <Text>
        {item.text}
      <Text>
    </TransitionView>
  )
})
```

### Misc. Notes

The 'useNativeDriver' prop is set, so if you don't want to use native drivers for your animations you can set this prop to false (useNativeDriver={false}).

Feel free to check out my work further at my portfolio & blog site - [https://kevinmurphywebdev.com](https://kevinmurphywebdev.com/ "Kevin Murphy's Portfolio/Blog Site").
