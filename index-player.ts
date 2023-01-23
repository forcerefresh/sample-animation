/**
 * This is a entry point for Object used in Web Slider Player.
 */

import { ANIMATION_UID } from "./src/animation-types";
import { animation } from "./src/animation-player";
import { addPlayerAnimationToGlobalScope } from "webslider-sdk/lib/animations/animation-utils";
import { IAnimationExtensionDefinition } from "webslider-sdk/lib/animations/animations-register";

export const AnimationDefinition: IAnimationExtensionDefinition = {
  animationId: ANIMATION_UID,
  animationFunc: animation,
};

// Animation adds itself to global scope in order to be used by Web Slider
addPlayerAnimationToGlobalScope(ANIMATION_UID, AnimationDefinition);
