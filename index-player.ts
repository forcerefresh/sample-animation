/**
 * This is a entry point for Object used in Web Slider Player.
 */

import { SAMPLE_ANIMATION } from "./src/sample-animation-types";
import { sampleAnimation } from "./src/sample-animation-player";
import { addPlayerAnimationToGlobalScope } from "webslider-sdk2/lib/animations/animation-utils";
import { IAnimationExtensionDefinition } from "webslider-sdk2/lib/animations/animations-register";

export const AnimationDefinition: IAnimationExtensionDefinition = {
  animationId: SAMPLE_ANIMATION,
  animationFunc: sampleAnimation,
};

// Animation adds itself to global scope in order to be used by Web Slider
addPlayerAnimationToGlobalScope(SAMPLE_ANIMATION, AnimationDefinition);
