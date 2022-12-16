# react-wandering-pet

![Alt Text](https://i.ibb.co/5G85TVG/ezgif-com-gif-maker.gif)

`react-wandering-pet` is a "just for fun" React component, made to give your website a hint of fun by having a gif of an animal wander around the screen in a none distracting way. Also who wouldn't want a cat to walk along the bottom of their screen? 👀

## Installation

**_NPM_**

```
npm install react-wandering-pet
```

**_Yarn_**

```
yarn add react-wandering-pet
```

## Usage

```
import { WanderingPet } from "react-wandering-pet";
import catGif from "react-wandering-pet/dist/assets/cat.gif"; // You can also import the cat GIF itself if you'd like

const MyComponent = () => {
  return (
    <WanderingPet
      src="" // Optional. Default is the orange cat GIF.
      height={48} // Default is 48px.
      width={} // Default is auto
      className=""
      heightOffset={-9} // The hight of the GIF from the bottom of the screen. Default is -9px.
      maxLimitOffset={20} // When will the GIF reset and repeat offset from the right edge of the screen.
      movementInterval={50} // The number (milliseconds) at which will add movementOffset to the GIF to move it.
      movementOffset={0.8} // The number of pixels at which the GIF will move by for each interval.
      startingOffset={-20} // The offset at which the GIF starts from.
    />
  );
};

export default MyComponent;
```
