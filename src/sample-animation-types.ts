import {
  IAnimationBase,
  INextZIndex,
} from "webslider-sdk/lib/animations/i-animation-types";

/**
 * This is animation unique id. This have to be unique string across app.
 */
export const SAMPLE_ANIMATION = "sample-animation";

/**
 * Define Animation properties types.
 * Property names should be the same as for animation tuple definition.
 * In a runtime animation functions get values that are output of Properties Panel form that is generated from tuple definition.
 */
export interface ISampleAnimation extends IAnimationBase, INextZIndex {
  showDebugInfo: Boolean;
}
