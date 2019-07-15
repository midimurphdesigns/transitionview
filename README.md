# TransitionView

TransitionView is a drop-in replacement for a View component. It serves the same purpose, except to animate it into the UI. It utilizes the Animatable library for animations and adds an index prop to control the sequence at which things load.

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

```
<TransitionView
  index={1}
  animation="fadeInDown"
>
    ...
</TransitionView>
```
