import React from "react";
import { storiesOf } from "@storybook/react";
// import { WanderingPet } from "../../dist/index";
import { WanderingPet } from "../components/WanderingPet";
const stories = storiesOf("App test", module);

import imageFile from "./assets/cat.gif";

stories.add("app", () => {
  return <WanderingPet src={imageFile} movementInterval={4} />;
});
