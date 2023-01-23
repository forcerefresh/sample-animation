/**
 * This is a entry point for Animation used in Web Slider app.
 */

import { ANIMATION_UID } from "./src/animation-types";
import {
  sampleDefaults,
  sampleDefinition,
  sampleMeta,
} from "./src/animation-app";
import { addAppAnimationToGlobalScope } from "webslider-sdk/lib/animations/animation-utils";
import { IAnimationExtensionAppDefinition } from "webslider-sdk/lib/animations/animations-register";

export const animationDefinition: IAnimationExtensionAppDefinition = {
  animationId: ANIMATION_UID,
  meta: sampleMeta,
  formDefinition: sampleDefinition,
  formDefaults: sampleDefaults,
};

// Animation adds itself to global scope in order to be used by Web Slider
addAppAnimationToGlobalScope(ANIMATION_UID, animationDefinition);
