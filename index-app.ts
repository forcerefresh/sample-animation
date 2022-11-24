/**
 * This is a entry point for Animation used in Web Slider app.
 */

import { SAMPLE_ANIMATION } from "./src/sample-animation-types";
import {
  sampleDefaults,
  sampleDefinition,
  sampleMeta,
} from "./src/sample-animation-app";
import { addAppAnimationToGlobalScope } from "webslider-sdk/lib/animations/animation-utils";
import { IAnimationExtensionAppDefinition } from "webslider-sdk/lib/animations/animations-register";

export const animationDefinition: IAnimationExtensionAppDefinition = {
  animationId: SAMPLE_ANIMATION,
  meta: sampleMeta,
  formDefinition: sampleDefinition,
  formDefaults: sampleDefaults,
};

// Animation adds itself to global scope in order to be used by Web Slider
addAppAnimationToGlobalScope(SAMPLE_ANIMATION, animationDefinition);
